import {initialFormData} from "./Data/FormData.ts";
import {Divider} from "@mui/material";
import {useState} from "react";
import FooterButtons from "./FooterButtons/FooterButtons";
import OverlayForm from "./OverlayForm/OverlayForm";
import {flaisYamlString} from "./Data/FlaisData";
import FlaisGeneratorFields from "./FlaisGeneratorFields";


const FlaisGeneratorForm = () => {
    const [form, setForm] = useState(initialFormData);
    const [yaml, setYaml] = useState(flaisYamlString)
    const [selectedOrganizations, setSelectedOrganizations] = useState([])
    const [selectedEnvironments, setSelectedEnvironments] = useState(['Beta']);

    return (
        <div>
            <FlaisGeneratorFields form={form} setForm={setForm}/>
            <Divider style={{margin: "24px 0"}}/>
            <OverlayForm selectedEnvs={selectedEnvironments} setSelectedEnvs={setSelectedEnvironments}
                         selectedOrgs={selectedOrganizations} setSelectedOrgs={setSelectedOrganizations}/>
            <FooterButtons formData={form} yaml={yaml} setYaml={setYaml}/>
        </div>
    );
};

export default FlaisGeneratorForm;
