import React from 'react';
import {Stack, TextField} from '@mui/material';

const IngressFields = ({ form, handleChange }) => {
    return (
        <Stack spacing={2}>
            <TextField
                name="basepath"
                label="Basepath"
                value={form.ingress.basepath}
                onChange={handleChange}
            />
            <TextField
                name="middleware"
                label="Middleware"
                value={form.ingress.middleware}
                onChange={handleChange}
            />
        </Stack>
    );
};

export default IngressFields;