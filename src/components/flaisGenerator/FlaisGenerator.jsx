import React, {useState} from 'react';
import {initialFormData} from "./data/RequestForm.ts";
import {flaisYamlString} from "./data/FlaisData";
import SearchField from "./searchField/searchField";
import {Divider} from "@mui/material";
import OverlayForm from "./overlayForm/OverlayForm";
import FooterButtons from "./footerButtons/FooterButtons";
import FlaisGeneratorFields from "./flaisGeneratorFields/FlaisGeneratorFields";

const FlaisGenerator = () => {
    const [form, setForm] = useState(initialFormData);
    const [yaml, setYaml] = useState(flaisYamlString)
    const [selectedOrganizations, setSelectedOrganizations] = useState([])
    const [selectedEnvironments, setSelectedEnvironments] = useState(['Beta']);

    return (
        <div className="h-screen">
            <h1 className="text-4xl font-bold text-center my-4 mx-2">Flais Generator</h1>
            <SearchField />
            <FlaisGeneratorFields form={form} setForm={setForm} />
            <Divider style={{margin: "24px 0"}}/>
            <OverlayForm selectedEnvs={selectedEnvironments} setSelectedEnvs={setSelectedEnvironments}
                         selectedOrgs={selectedOrganizations} setSelectedOrgs={setSelectedOrganizations}/>
            <FooterButtons formData={form} yaml={yaml} setYaml={setYaml} environments={selectedEnvironments}
                           organizations={selectedOrganizations}/>
        </div>
    )
}


export default FlaisGenerator;