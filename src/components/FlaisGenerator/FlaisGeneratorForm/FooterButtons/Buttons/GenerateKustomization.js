import React from "react";
import { Button } from "@mui/material";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { baseKustomization } from "../../Data/KustomizationFiles";

const GenerateKustomization = ({ yaml, environments, organizations }) => {
    const generateFiles = () => {
        const zip = new JSZip();

        const baseFolder = zip.folder("kustomization/base");

        baseFolder.file("flais.yaml", yaml);
        baseFolder.file("kustomization.yaml", baseKustomization);

        const overlaysFolder = zip.folder("kustomization/overlays");

        environments.forEach((env) => {
            const envFolder = overlaysFolder.folder(env);

            organizations.forEach((org) => {
                const orgFolderName = org.key.replace(/\./g, "-");
                const orgFolder = envFolder.folder(orgFolderName);

                orgFolder.file("kustomization.yaml", "some content");
            });
        });

        zip.generateAsync({ type: "blob" }).then((blob) => {
            saveAs(blob, "kustomization.zip");
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
