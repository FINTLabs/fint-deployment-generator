import {initialFormData} from "./Data/FormData.ts";
import {
    Divider,
    Paper,
    Typography
} from "@mui/material";
import {useState} from "react";
import ResourceForm from "./Forms/ResourceForm";
import BasicInfoForm from "./Forms/BasicInfoForm";
import EnvironmentVariablesForm from "./Forms/EnvironmentVariablesForm";
import FeaturesForm from "./FeaturesForm/FeaturesForm";
import SecretReferencesForm from "./Forms/SecretReferencesForm";
import FooterButtons from "./FooterButtons/FooterButtons";
import OverlayForm from "./OverlayForm/OverlayForm";
import {flaisYamlString} from "./Data/FlaisData";


const FlaisGeneratorForm = () => {
    const [form, setForm] = useState(initialFormData);
    const [yaml, setYaml] = useState(flaisYamlString)
    const [selectedOrganizations, setSelectedOrganizations] = useState([])
    const [selectedEnvironments, setSelectedEnvironments] = useState(['Beta']);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setForm(prevForm => ({...prevForm, [name]: value}));
    };

    const renderSection = (title, component, className = "") => (
        <Paper elevation={3} className={`w-full ${className}`}>
            <Typography align="center" variant="h6">{title}</Typography>
            <Divider style={{margin: "8px 0"}}/>
            {component}
        </Paper>
    );

    return (
        <div>
            <form noValidate>
                <div className="grid grid-cols-2 gap-4 justify-items-center w-[800px] mx-auto">
                    {renderSection("Basic Info", <BasicInfoForm form={form} handleChange={handleChange}/>, "self-start")}
                    {renderSection("Resources", <ResourceForm form={form} setForm={setForm}/>, "self-start")}
                    {renderSection("Environment Variables", <EnvironmentVariablesForm form={form} setForm={setForm}/>, "self-start")}
                    {renderSection("Secret References", <SecretReferencesForm form={form} setForm={setForm}/>, "self-start")}
                    {renderSection("Feature Toggles", <FeaturesForm form={form} setForm={setForm}/>, "self-start col-span-2")}
                </div>
            </form>
            <Divider style={{margin: "24px 0"}}/>
            <OverlayForm selectedEnvs={selectedEnvironments} setSelectedEnvs={setSelectedEnvironments}
                         selectedOrgs={selectedOrganizations} setSelectedOrgs={setSelectedOrganizations}/>
            <FooterButtons formData={form} yaml={yaml} setYaml={setYaml}/>
        </div>
    );
};

export default FlaisGeneratorForm;
