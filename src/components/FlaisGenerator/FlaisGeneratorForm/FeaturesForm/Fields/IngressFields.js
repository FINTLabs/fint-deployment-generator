import React from 'react';
import {Stack, TextField} from '@mui/material';

const IngressFields = ({ form, handleChange }) => {
    return (
        <Stack spacing={2}>
            <TextField
                name="basepath"
                label="Basepath"
                value={form.ingress.basePath}
                onChange={handleChange('ingress', 'basePath')}
            />
            <TextField
                name="middleware"
                label="Middleware"
                value={form.ingress.middlewares}
                onChange={handleChange('ingress', 'middleware')}
            />
        </Stack>
    );
};

export default IngressFields;