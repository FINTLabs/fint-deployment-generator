export interface FormData {
    name: string;
    component: string;
    partOf: string;
    team: string;
    port: string;
    image: string;
    resources: {
        limits: {
            memory: string;
            cpu: string;
        };
        requests: {
            memory: string;
            cpu: string;
        };
    };
    xmx: string;
    environmentVariables: Record<string, string>;
    secretReferences: Record<string, string>;
    prometheus: {
        active: boolean;
        port: string;
        path: string;
    };
    onePassword: {
        active: boolean;
        path: string;
    };
    kafka: {
        active: boolean;
        acl: {
            topic: string;
            permission: string;
        };
    };
    database: {
        active: boolean;
        name: string;
    };
    url: {
        active: boolean;
        hostname: string;
        basePath: string;
    };
    ingress: {
        active: boolean;
        basePath: string;
        middleware: string;
    };
    restartPolicy: string;
    replicas: number;
    strategy: {
        type: string;
        rollingUpdate: {
            maxSurge: number;
            maxUnavailable: number;
        };
    };
}

export const initialFormData: FormData = {
    name: "",
    component: "backend",
    partOf: "fint-core",
    team: "core",
    port: "8080",
    image: "",
    resources: {
        limits: {
            memory: "512Mi",
            cpu: "500m"
        },
        requests: {
            memory: "256Mi",
            cpu: "250m"
        }
    },
    xmx: "358Mi",
    environmentVariables: {},
    secretReferences: {},
    prometheus: {
        active: true,
        port: "8080",
        path: "/actuator/prometheus"
    },
    onePassword: {
        active: false,
        path: ""
    },
    kafka: {
        active: false,
        acl:
            {
                topic: "",
                permission: "read"
            }
    },
    database: {
        active: false,
        name: ""
    },
    url: {
        active: false,
        hostname: "",
        basePath: ""
    },
    ingress: {
        active: false,
        basePath: "",
        middleware: ""
    },
    restartPolicy: "always",
    replicas: 1,
    strategy: {
        type: "RollingUpdate",
        rollingUpdate: {
            maxSurge: 1,
            maxUnavailable: 0
        }
    }
}