export const baseKustomization = `
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization
resources:
  - flais.yaml
`

export const overlayKustomization = `
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization
namespace: ""
resources:
  - ../../../base
commonLabels:
  app.kubernetes.io/name: ""
  app.kubernetes.io/instance: ""
  app.kubernetes.io/version: latest
  app.kubernetes.io/component: ""
  app.kubernetes.io/part-of: ""
  fintlabs.no/team: ""
  fintlabs.no/org-id: ""

patches:
  - patch: |-
      - op: replace
        path: "/metadata/labels/app.kubernetes.io~1instance"
        value: ""
      - op: replace
        path: "/spec/orgId"
        value: ""
    target:
      kind: Application
      name: ""
`