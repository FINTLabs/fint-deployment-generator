import jsYaml from "js-yaml";
import {flaisYamlString} from "../Data/FlaisData.js";

function updateFlaisMetadata(yaml: jsYaml, formData) {
    yaml.metadata.name = formData.name;
    yaml.metadata.labels["app.kubernetes.io/name"] = formData.name;
    yaml.metadata.labels["app.kubernetes.io/instance"] = `${formData.name}_fintlabs_no`;
    yaml.metadata.labels["app.kubernetes.io/component"] = formData.component;
    yaml.metadata.labels["app.kubernetes.io/part-of"] = formData.partOf;
    yaml.metadata.labels["fintlabs.no/team"] = formData.team;
}

export function updateFlaisApplication(formData) {
    const flaisApplication = jsYaml.load(flaisYamlString)

    updateFlaisMetadata(flaisApplication, formData)
    flaisApplication.spec.port = formData.port;

    flaisApplication.spec.resources.limits.memory = formData.resources.limits.memory;
    flaisApplication.spec.resources.limits.cpu = formData.resources.limits.cpu;
    flaisApplication.spec.resources.requests.memory = formData.resources.requests.memory;
    flaisApplication.spec.resources.requests.cpu = formData.resources.requests.cpu;

    if (formData.environmentVariables.length > 0) {
        flaisApplication.spec.env = formData.environmentVariables.map((envVar) => ({
            name: envVar.name,
            value: envVar.value
        }));
    } else {
        delete flaisApplication.spec.env;
    }

    if (formData.secretReferences.length > 0) {
        flaisApplication.spec.envFrom = formData.secretReferences.map((secretRef) => ({
            secretRef: {
                name: secretRef.name
            }
        }));
    } else {
        delete flaisApplication.spec.envFrom;
    }

    if (formData.prometheus.active) {
        flaisApplication.spec.prometheus.enabled = true;
        flaisApplication.spec.prometheus.port = formData.prometheus.port;
        flaisApplication.spec.prometheus.path = formData.prometheus.path;
    } else {
        delete flaisApplication.spec.prometheus;
    }

    if (formData.onePassword.active) {
        flaisApplication.spec.onePassword.itemPath = formData.onePassword.path;
    } else {
        delete flaisApplication.spec.onePassword;
    }

    if (formData.kafka.active) {
        flaisApplication.spec.kafka.enabled = true;

        flaisApplication.spec.kafka.acls = formData.kafka.acls.map(acl => ({
            topic: acl.topic,
            permission: acl.permission,
        }));
    } else {
        delete flaisApplication.spec.kafka;
    }


    if (formData.database.active) {
        flaisApplication.spec.database.database = formData.database.name;
    } else {
        delete flaisApplication.spec.database;
    }

    if (formData.url.active) {
        flaisApplication.spec.url.hostname = formData.url.hostname;
        flaisApplication.spec.url.basePath = formData.url.basePath;
    } else {
        delete flaisApplication.spec.url;
    }

    if (formData.ingress.active) {
        flaisApplication.spec.ingress.enabled = true;
        flaisApplication.spec.ingress.basePath = formData.ingress.basePath;
        if (formData.ingress.middlewares.length === 0) {
            delete flaisApplication.spec.ingress.middlewares;
        } else {
            flaisApplication.spec.ingress.middlewares = formData.ingress.middlewares;
        }
    } else {
        delete flaisApplication.spec.ingress;
    }

    return jsYaml.dump(flaisApplication);
}