import {cdBackend, ciBackend, ciFrontend} from "../Data/WorkflowData";
import jsYaml from "js-yaml";

export function createCDForBackend(environments, organizations) {
    const cdWorkflow = jsYaml.load(cdBackend)

    if (cdWorkflow.jobs['deploy-to-aks'].strategy.matrix.cluster) {
        cdWorkflow.jobs['deploy-to-aks'].strategy.matrix.cluster = cdWorkflow.jobs['deploy-to-aks'].strategy.matrix.cluster.filter(cluster => {
            return environments.some(env => cluster.toLowerCase().includes(`-${env.toLowerCase()}-`));
        });
    }

    if (cdWorkflow.jobs['deploy-to-aks'].strategy.matrix.org) {
        cdWorkflow.jobs['deploy-to-aks'].strategy.matrix.org = organizations.map(s => s.key.replace(".", "-"));
    }

    return jsYaml.dump(cdWorkflow);
}

export function createCI(formData) {
    if (formData.component === "frontend") {
        return ciFrontend;
    }
    return ciBackend;
}