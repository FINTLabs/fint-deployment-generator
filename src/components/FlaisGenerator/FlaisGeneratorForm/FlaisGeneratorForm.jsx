import {initialFormData} from "./FormData.ts";
import {Divider, Paper, Stack, Typography} from "@mui/material";
import {useState} from "react";
import ResourceForm from "./ResourceForm";
import BasicInfoForm from "./BasicInfoForm";
import DynamicKeyValForm from "./DynamicKeyValForm";
import FeaturesForm from "./FeaturesForm";

const FlaisGeneratorForm = () => {
    const [form, setForm] = useState(initialFormData);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setForm(prevForm => ({...prevForm, [name]: value}));
    };

    const renderSection = (title, component) => (
        <Paper elevation={3} style={{padding: "16px"}}>
            <Typography variant="h6">{title}</Typography>
            <Divider style={{margin: "8px 0"}}/>
            {component}
        </Paper>
    );

    return (
        <form noValidate>
            <Stack spacing={2} width={300}>
                {renderSection("Basic Info", <BasicInfoForm form={form} handleChange={handleChange} />)}
                {renderSection("Resources", <ResourceForm form={form} setForm={setForm} />)}
                {renderSection("Environment Variables", <DynamicKeyValForm form={form} setForm={setForm} fieldKey="environmentVariables" />)}
                {renderSection("Secret References", <DynamicKeyValForm form={form} setForm={setForm} fieldKey="secretReferences" />)}
                {renderSection("Feature Toggles", <FeaturesForm form={form} setForm={setForm} />)}
            </Stack>
        </form>
    );
};

export default FlaisGeneratorForm;
