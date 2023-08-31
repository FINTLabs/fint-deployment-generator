export const flaisYamlString = `
apiVersion: fintlabs.no/v1alpha1
kind: Application
metadata:
  name: flais-test-application
  namespace: fintlabs-no
  labels:
    app.kubernetes.io/name: flais-test-application
    app.kubernetes.io/instance: flais-test-application_fintlabs_no
    app.kubernetes.io/version: latest
    app.kubernetes.io/component: test-application
    app.kubernetes.io/part-of: flais
    fintlabs.no/team: flais
    fintlabs.no/org-id: fintlabs.no
spec:
  port: 80
  orgId: fintlabs.no
  image: docker/getting-started
  imagePullPolicy: Always
  prometheus:
    enabled: true
    port: "80"
    path: /prometheus
  env:
    - name: ENV1
      value: test
    - name: ENV2
      value: test
    - name: ENV3
      value: test
  envFrom:
    - secretRef:
        name: flais-test-application-secret
  onePassword:
    itemPath: "vaults/aks-alpha-vault/items/azurerator"
  kafka:
    enabled: true
    acls:
      - topic: '*.test.topic'
        permission: read
      - topic: '*.test2.topic'
        permission: admin
  database:
    enabled: true # deprecated
    database: fint-kontroll
  url:
    hostname: test.flais.io
    basePath: /alpha/fintlabs-no
  ingress:
    enabled: true
    basePath: /alpha/fintlabs-no/api/users
    middlewares:
      - fint-kontroll-sso
  resources:
    limits:
      memory: "1024Mi"
      cpu: "100m"
    requests:
      memory: "128Mi"
      cpu: "100m"
  restartPolicy: Always
  replicas: 2
  strategy:
    type: RollingUpdate
    rollingUpdate: { maxSurge: 1, maxUnavailable: 0 }
`;