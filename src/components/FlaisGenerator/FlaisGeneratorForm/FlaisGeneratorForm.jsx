import {initialFormData} from "./Data/FormData.ts";
import {Divider, Paper} from "@mui/material";
import React, {useState} from "react";
import FooterButtons from "./FooterButtons/FooterButtons";
import OverlayForm from "./OverlayForm/OverlayForm";
import {flaisYamlString} from "./Data/FlaisData";
import FlaisGeneratorFields from "./Fields/FlaisGeneratorFields";


const FlaisGeneratorForm = () => {
    const [form, setForm] = useState(initialFormData);
    const [yaml, setYaml] = useState(flaisYamlString)
    const [selectedOrganizations, setSelectedOrganizations] = useState([])
    const [selectedEnvironments, setSelectedEnvironments] = useState(['Beta']);

    return (
        <div className="grid grid-cols-7 w-full h-screen">
            <div className="col-span-5">
                <div className="relative flex flex-col items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-center my-4 mx-2">Deployment Generator</h1>
                    </div>
                    <div className="grid grid-cols-2 gap-4 w-[800px] mx-auto">
                        <FlaisGeneratorFields form={form} setForm={setForm} />
                    </div>
                </div>
            </div>

            <div className="col-span-2">
                <Paper elevation={3} className="top-0 right-0 w-full p-4 h-screen">
                    <OverlayForm
                        selectedEnvs={selectedEnvironments}
                        setSelectedEnvs={setSelectedEnvironments}
                        selectedOrgs={selectedOrganizations}
                        setSelectedOrgs={setSelectedOrganizations}
                    />
                    <FooterButtons
                        formData={form}
                        yaml={yaml}
                        setYaml={setYaml}
                        environments={selectedEnvironments}
                        organizations={selectedOrganizations}
                    />
                </Paper>
            </div>
        </div>
    );
};

export default FlaisGeneratorForm;
