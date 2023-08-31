import React from 'react';
import {Stack, TextField} from '@mui/material';

const UrlFields = ({ form, handleChange }) => {
    return (
        <Stack spacing={2}>
            <TextField
                name="hostname"
                label="Hostname"
                value={form.url.hostname}
                onChange={handleChange('url', 'hostname')}
            />
            <TextField
                name="basepath"
                label="Basepath"
                value={form.url.basePath}
                onChange={handleChange('url', 'basePath')}
            />
        </Stack>
    );
};

export default UrlFields;