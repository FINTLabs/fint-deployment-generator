import React from 'react';
import {Stack, TextField} from '@mui/material';

const PrometheusFields = ({ form, handleChange }) => {
    return (
        <Stack spacing={2}>
            <TextField
                name="port"
                label="Port"
                value={form.prometheus.port}
                onChange={handleChange('prometheus', 'port')}
            />
            <TextField
                name="path"
                label="Path"
                value={form.prometheus.path}
                onChange={handleChange('prometheus', 'path')}
            />
        </Stack>
    );
};

export default PrometheusFields;