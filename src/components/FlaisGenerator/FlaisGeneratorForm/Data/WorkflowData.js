export const ciBackend = `
name: CI

on:
  pull_request:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@main

      - name: Get repo name
        id: get_repo
        run: echo ::set-output name=REPO::\${GITHUB_REPOSITORY#*/}

      - name: Setup Java 17
        uses: actions/setup-java@v3.12.0
        with:
          distribution: 'adopt'
          java-version: '17'

      - name: Gradle Wrapper Validation
        uses: gradle/wrapper-validation-action@v1.1.0

      - name: Gradle Setup
        uses: gradle/gradle-build-action@v2.4.2
        with:
          gradle-version: wrapper

      - name: Gradle build
        run: |
          ./gradlew build
          mkdir data
          cp ./build/libs/\${GITHUB_REPOSITORY#*/}-*.jar ./data/app.jar

      - name: Upload Build Artifact
        uses: actions/upload-artifact@v3.1.3
        with:
          name: \${{steps.get_repo.outputs.REPO}}
          path: ./data/app.jar

      - name: Trigger CD
        if: github.ref == 'refs/heads/main'
        uses: peter-evans/repository-dispatch@v2
        with:
          token: \${{ secrets.GITHUBACTION_TOKEN }}
          repository: \${{ github.repository }}
          event-type: trigger-cd
`;

export const cdBackend = `
name: CD

on:
  repository_dispatch:
    types: [trigger-cd]

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: \${{ github.repository }}

jobs:
  build-and-push:
    name: Build and push Docker image
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write
    outputs:
      tags: \${{ steps.meta.outputs.tags }}
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4.0.0

      - name: Login to Docker Hub
        uses: docker/login-action@v2.2.0
        with:
          registry: \${{ env.REGISTRY }}
          username: \${{ github.actor }}
          password: \${{ secrets.GITHUB_TOKEN }}

      - name: Extract metadata (tags, labels) for Docker
        uses: docker/metadata-action@v4.6.0
        id: meta
        with:
          images: \${{ env.REGISTRY }}/\${{ env.IMAGE_NAME }}
          tags: |
            type=sha,enable=true,priority=100,prefix=sha-,suffix=,format=short
            latest

      - name: Build and push Docker image
        uses: docker/build-push-action@v4
        with:
          context: .
          push: true
          tags: \${{ steps.meta.outputs.tags }}
          labels: \${{ steps.meta.outputs.labels }}

  deploy-to-aks:
    name: deploy for \${{ matrix.org }} to \${{ matrix.cluster }}
    runs-on: ubuntu-latest
    needs: build-and-push
    permissions:
      contents: read
      packages: write
    strategy:
      matrix:
        org:
          - fintlabs-no
        cluster:
          - aks-alpha-fint-2021-11-18
          - aks-beta-fint-2021-11-23
          - aks-api-fint-2022-02-08
          - aks-pwf-fint-2021-10-20

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4.0.0

      - name: Get environment
        uses: actions/github-script@v6
        id: environment
        with:
          script: return '\${{ matrix.cluster }}'.split('-')[1]
          result-encoding: string

      - name: Get resource group name
        uses: actions/github-script@v6
        id: resource-group
        with:
          script: return 'rg-aks-\${{ steps.environment.outputs.result }}'
          result-encoding: string

      - name: Bake manifests with Kustomize
        id: bake
        uses: azure/k8s-bake@v2.4
        with:
          renderEngine: 'kustomize'
          kustomizationPath: 'kustomize/overlays/\${{ steps.environment.outputs.result }}/\${{ matrix.org }}'

      - uses: azure/login@v1
        with:
          creds: "\${{ secrets[format('AKS_{0}_FINT_GITHUB', steps.environment.outputs.result)] }}"

      - uses: azure/use-kubelogin@v1.1
        with:
          kubelogin-version: 'v0.0.26'

      - name: Set the target cluster
        uses: azure/aks-set-context@v3
        with:
          cluster-name: '\${{ matrix.cluster }}'
          resource-group: '\${{ steps.resource-group.outputs.result }}'
          admin: 'true'
          use-kubelogin: 'true'

      - name: Deploy
        uses: azure/k8s-deploy@v4.9
        with:
          action: deploy
          manifests: \${{ steps.bake.outputs.manifestsBundle }}
          images: \${{ needs.build-and-push.outputs.tags }}
          namespace: \${{ matrix.org }}
`;