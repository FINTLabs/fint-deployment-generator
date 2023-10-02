import {initialFormData} from "./data/RequestForm.ts";
import {Divider} from "@mui/material";
import {useState} from "react";
import FooterButtons from "./footerButtons/FooterButtons";
import OverlayForm from "./overlayForm/OverlayForm";
import {flaisYamlString} from "./data/FlaisData";
import FlaisGeneratorFields from "./fields/FlaisGeneratorFields";
import SearchField from "./searchField/searchField";


const FlaisGeneratorForm = () => {
    const [form, setForm] = useState(initialFormData);
    const [yaml, setYaml] = useState(flaisYamlString)
    const [selectedOrganizations, setSelectedOrganizations] = useState([])
    const [selectedEnvironments, setSelectedEnvironments] = useState(['Beta']);

    return (
        <div>
            <SearchField />
            <FlaisGeneratorFields form={form} setForm={setForm}/>
            <Divider style={{margin: "24px 0"}}/>
            <OverlayForm selectedEnvs={selectedEnvironments} setSelectedEnvs={setSelectedEnvironments}
                         selectedOrgs={selectedOrganizations} setSelectedOrgs={setSelectedOrganizations}/>
            <FooterButtons formData={form} yaml={yaml} setYaml={setYaml} environments={selectedEnvironments}
                           organizations={selectedOrganizations}/>
        </div>
    );
};

export default FlaisGeneratorForm;
