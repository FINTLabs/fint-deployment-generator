import React from "react";
import { Button } from "@mui/material";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import {baseKustomization} from "../../Data/KustomizationFiles";
import {createKustomizeOverlay} from "../../Utils/UpdateFlaisApplication";
import {ciBackend} from "../../Data/WorkflowData";
import {createCDForBackend} from "../../Utils/WorkflowUtils";

const GenerateKustomization = ({ formData, yaml, environments, organizations }) => {
    const generateFiles = () => {
        const zip = new JSZip();

        const baseFolder = zip.folder("kustomize/base");
        const workflowFolder = zip.folder(".github/workflows")

        baseFolder.file("flais.yaml", yaml);
        baseFolder.file("kustomization.yaml", baseKustomization);

        workflowFolder.file("CI.yaml", ciBackend)
        workflowFolder.file("CD.yaml", createCDForBackend(environments, organizations))

        const overlaysFolder = zip.folder("kustomize/overlays");

        environments.forEach((env) => {
            const envFolder = overlaysFolder.folder(env.toLowerCase());

            organizations.forEach((org) => {
                const orgFolderName = org.key.replace(/\./g, "-");
                const orgFolder = envFolder.folder(orgFolderName);

                orgFolder.file("kustomization.yaml", createKustomizeOverlay(formData, org.key));
            });
        });

        zip.generateAsync({ type: "blob" }).then((blob) => {
            saveAs(blob, "deployment.zip");
        });
    };

    return (
        <>
            <Button
                variant="contained"
                color="primary"
                onClick={generateFiles}
            >
                Generate Kustomization
            </Button>
        </>
    );
};

export default GenerateKustomization;
