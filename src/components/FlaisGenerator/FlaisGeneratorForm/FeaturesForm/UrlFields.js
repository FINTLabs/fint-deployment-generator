import React from 'react';
import {Stack, TextField} from '@mui/material';

const UrlFields = ({ form, handleChange }) => {
    return (
        <Stack spacing={2}>
            <TextField
                name="hostname"
                label="Hostname"
                value={form.url.hostname}
                onChange={handleChange}
            />
            <TextField
                name="basepath"
                label="Basepath"
                value={form.url.basePath}
                onChange={handleChange}
            />
        </Stack>
    );
};

export default UrlFields;