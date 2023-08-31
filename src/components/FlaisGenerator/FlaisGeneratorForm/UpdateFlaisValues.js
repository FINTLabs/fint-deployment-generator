import jsYaml from "js-yaml";
import {flaisYamlString} from "./Data/FlaisData.js";

export function updateFlaisApplication(formData) {
    const flaisApplication = jsYaml.load(flaisYamlString)

    flaisApplication.metadata.name = formData.name;
    flaisApplication.metadata.labels["app.kubernetes.io/name"] = formData.name;
    flaisApplication.metadata.labels["app.kubernetes.io/instance"] = `${formData.name}_fintlabs_no`;
    flaisApplication.metadata.labels["app.kubernetes.io/component"] = formData.component;
    flaisApplication.metadata.labels["app.kubernetes.io/part-of"] = formData.partOf;
    flaisApplication.metadata.labels["fintlabs.no/team"] = formData.team;
    flaisApplication.spec.port = formData.port;

    flaisApplication.spec.resources.limits.memory = formData.resources.limits.memory;
    flaisApplication.spec.resources.limits.cpu = formData.resources.limits.cpu;
    flaisApplication.spec.resources.requests.memory = formData.resources.requests.memory;
    flaisApplication.spec.resources.requests.cpu = formData.resources.requests.cpu;

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
        flaisApplication.spec.kafka.acls[0].topic = formData.kafka.acls.topic;
        flaisApplication.spec.kafka.acls[0].permission = formData.kafka.acls.permission;
    } else {
        delete flaisApplication.spec.kafka;
    }

    if (formData.database.active) {
        flaisApplication.spec.database.enabled = true;
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
        flaisApplication.spec.ingress.middlewares[0] = formData.ingress.middleware;
    } else {
        delete flaisApplication.spec.ingress;
    }

    return jsYaml.dump(flaisApplication);
}