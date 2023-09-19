import {initialFormData} from "./Data/FormData.ts";
import {Divider, Paper} from "@mui/material";
import {useState} from "react";
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
        <div className="relative">
            <div className="grid grid-cols-2 gap-4 w-[800px]">
                <FlaisGeneratorFields form={form} setForm={setForm}/>
            </div>

            <Paper elevation={3} className="absolute top-0 right-0 w-[500px] p-4 h-screen">
                <h1 className="text-2xl font-bold">Deployment Generator</h1>
                <OverlayForm selectedEnvs={selectedEnvironments} setSelectedEnvs={setSelectedEnvironments}
                             selectedOrgs={selectedOrganizations} setSelectedOrgs={setSelectedOrganizations}/>
                <FooterButtons formData={form} yaml={yaml} setYaml={setYaml} environments={selectedEnvironments}
                               organizations={selectedOrganizations}/>
            </Paper>
        </div>
    );
};

export default FlaisGeneratorForm;
