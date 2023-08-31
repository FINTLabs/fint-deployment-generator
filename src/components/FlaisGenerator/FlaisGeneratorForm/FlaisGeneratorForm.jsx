import {initialFormData} from "./Data/FormData.ts";
import {
    Divider,
    Paper,
    Stack,
    Typography,
    Button
} from "@mui/material";
import {useState} from "react";
import ResourceForm from "./Forms/ResourceForm";
import BasicInfoForm from "./Forms/BasicInfoForm";
import EnvironmentVariablesForm from "./Forms/EnvironmentVariablesForm";
import FeaturesForm from "./FeaturesForm/FeaturesForm";
import SecretsForm from "./Forms/SecretReferencesForm";
import DisplayFlaisApplication from "./DisplayFlaisApplication";
import SecretReferencesForm from "./Forms/SecretReferencesForm";


const FlaisGeneratorForm = () => {
    const [form, setForm] = useState(initialFormData);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
        <div>
            <form noValidate>
                <Stack spacing={2} width={300}>
                    {renderSection("Basic Info", <BasicInfoForm form={form} handleChange={handleChange}/>)}
                    {renderSection("Resources", <ResourceForm form={form} setForm={setForm}/>)}
                    {renderSection("Environment Variables", <EnvironmentVariablesForm form={form} setForm={setForm}/>)}
                    {renderSection("Secret References", <SecretReferencesForm form={form} setForm={setForm}/>)}
                    {renderSection("Feature Toggles", <FeaturesForm form={form} setForm={setForm} handleChange={handleChange}/>)}
                </Stack>
            </form>

            <Button
                variant="contained"
                color="primary"
                onClick={handleClickOpen}
                style={{margin: '1rem 0'}}
            >
                Show Flais Application
            </Button>

            <DisplayFlaisApplication open={open} handleClose={handleClose} formData={form}/>

        </div>
    );
};

export default FlaisGeneratorForm;
