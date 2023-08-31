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
    - name: 
      value: 
  envFrom:
    - secretRef:
        name: 
  onePassword:
    itemPath: 
  kafka:
    enabled: true
    acls:
      - topic: 
        permission: 
  database:
    database: 
  url:
    hostname: 
    basePath: 
  ingress:
    enabled: true
    basePath: 
    middlewares: 
  resources:
    limits:
      memory: "1024Mi"
      cpu: "100m"
    requests:
      memory: "128Mi"
      cpu: "100m"
  restartPolicy: Always
  replicas: 1
  strategy:
    type: RollingUpdate
    rollingUpdate: { maxSurge: 1, maxUnavailable: 0 }
`;