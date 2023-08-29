import React from 'react';
import {Stack, TextField} from '@mui/material';

const PrometheusFields = ({ form, setForm }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            Prometheus: {
                ...prevForm.Prometheus,
                [name]: value,
            },
        }));
    };

    return (
        <Stack spacing={2}>
            <TextField
                name="port"
                label="Port"
                value={form.Prometheus.port}
                onChange={handleChange}
            />
            <TextField
                name="path"
                label="Path"
                value={form.Prometheus.path}
                onChange={handleChange}
            />
        </Stack>
    );
};

export default PrometheusFields;