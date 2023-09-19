import BasicInfoField from "./BasicInfoField";
import ResourceField from "./ResourceField";
import EnvironmentVariablesForm from "./EnvironmentVariablesForm";
import SecretReferencesForm from "./SecretReferencesForm";
import FeaturesForm from "../FeaturesForm/FeaturesForm";
import {Divider, Paper, Typography} from "@mui/material";


const FlaisGeneratorFields = ({form, setForm}) => {
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
        <>
            {renderSection("Basic Info", <BasicInfoField form={form} handleChange={handleChange}/>, "self-start")}
            {renderSection("Resources", <ResourceField form={form} setForm={setForm}/>, "self-start")}
            {renderSection("Environment Variables", <EnvironmentVariablesForm form={form} setForm={setForm}/>, "self-start")}
            {renderSection("Secret References", <SecretReferencesForm form={form} setForm={setForm}/>, "self-start")}
            {renderSection("Feature Toggles", <FeaturesForm form={form} setForm={setForm}/>, "self-start col-span-2")}
        </>
    );
}

export default FlaisGeneratorFields;