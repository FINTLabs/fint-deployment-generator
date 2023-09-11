import React from "react";
import { Button } from "@mui/material";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import {baseKustomization} from "../../Data/KustomizationFiles";

const GenerateKustomization = ({ yaml, environments, organizations }) => {
    const generateFiles = () => {
        const zip = new JSZip();

        // Create base directory
        const baseFolder = zip.folder("kustomization/base");

        // Create flais.yaml and kustomization.yaml in the base directory
        baseFolder.file("flais.yaml", yaml);
        baseFolder.file("kustomization.yaml", baseKustomization); // Replace with actual content

        // Create overlays directory
        const overlaysFolder = zip.folder("kustomization/overlays");

        // Iterate through each environment
        environments.forEach((env) => {
            const envFolder = overlaysFolder.folder(env);

            // Iterate through each organization within the environment
            organizations.forEach((org) => {
                const orgFolder = envFolder.folder(org);

                // Create kustomization.yaml inside the organization directory
                orgFolder.file("kustomization.yaml", "some content"); // Replace with actual content
            });
        });

        // Generate the ZIP file and trigger the download
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
