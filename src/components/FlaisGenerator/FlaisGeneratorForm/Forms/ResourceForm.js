import React from 'react';
import {TextField, Typography, Stack} from '@mui/material';

const ResourceForm = ({form, setForm}) => {

    const handleResourceChange = (type, resource) => (event) => {
        const {value} = event.target;
        setForm((prevForm) => ({
            ...prevForm,
            resources: {
                ...prevForm.resources,
                [type]: {
                    ...prevForm.resources[type],
                    [resource]: value,
                },
            },
        }));
    };

    return (
        <Stack spacing={2} className="m-4">
            <Typography variant="subtitle1" >Limits</Typography>
            <TextField
                label="Memory"
                name="memory"
                value={form.resources.limits.memory}
                onChange={handleResourceChange('limits', 'memory')}
            />
            <TextField
                label="CPU"
                name="cpu"
                value={form.resources.limits.cpu}
                onChange={handleResourceChange('limits', 'cpu')}
            />

            <Typography variant="subtitle1">Requests</Typography>
            <TextField
                label="Memory"
                name="memory"
                value={form.resources.requests.memory}
                onChange={handleResourceChange('requests', 'memory')}
            />
            <TextField
                label="CPU"
                name="cpu"
                value={form.resources.requests.cpu}
                onChange={handleResourceChange('requests', 'cpu')}
            />
        </Stack>
    );
};

export default ResourceForm;
