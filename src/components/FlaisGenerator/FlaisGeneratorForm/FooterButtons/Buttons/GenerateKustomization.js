import {Button} from "@mui/material";
import React from "react";

const GenerateKustomization = ( yaml, environments, organizations ) => {
    return (
        <>
            <Button
                variant="contained"
                color="primary"
            >
                Generate Kustomization
            </Button>
        </>
    );
}

export default GenerateKustomization;