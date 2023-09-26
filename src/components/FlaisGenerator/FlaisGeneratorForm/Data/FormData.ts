export interface FormData {
    name: string;
    orgId: string
    component: string;
    partOf: string;
    team: string;
    port: number;
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
    env: {
        name: string,
        value: string
    }[];
    envFrom: {
        secretRef: {
            name: string
        }
    }[];
    prometheus: {
        enabled: boolean
        port: string;
        path: string;
    };
    onePassword: {
        itemPath: string;
    };
    kafka: {
        enabled: boolean;
        acls: {
            topic: string;
            permission: string;
        }[];
    };
    database: {
        database: string;
    };
    url: {
        hostname: string;
        basePath: string;
    };
    ingress: {
        enabled: boolean;
        basePath: string;
        middlewares: string[];
    };
}

export const initialFormData: FormData = {
    name: "",
    orgId: "",
    component: "backend",
    partOf: "fint-core",
    team: "core",
    port: 8080,
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
    env: [],
    envFrom: [],
    prometheus: {
        enabled: true,
        port: "8080",
        path: "/actuator/prometheus"
    },
    onePassword: {
        itemPath: ""
    },
    kafka: {
        enabled: false,
        acls: [{
            topic: "",
            permission: "read"
        }]
    },
    database: {
        database: ""
    },
    url: {
        hostname: "",
        basePath: ""
    },
    ingress: {
        enabled: false,
        basePath: "",
        middlewares: []
    },
};
