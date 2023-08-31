export interface FormData {
    name: string;
    component: string;
    partOf: string;
    team: string;
    port: string;
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
}

export const initialFormData: FormData = {
    name: "",
    component: "backend",
    partOf: "fint-core",
    team: "core",
    port: "8080",
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
}