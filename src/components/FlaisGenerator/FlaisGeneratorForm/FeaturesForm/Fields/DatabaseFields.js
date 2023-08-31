import React from 'react';
import {Stack, TextField} from '@mui/material';

const DatabaseFields = ({ form, handleChange }) => {
    return (
        <Stack spacing={2}>
            <TextField
                name="name"
                label="Name"
                value={form.database.name}
                onChange={handleChange('database', 'name')}
            />
        </Stack>
    );
};

export default DatabaseFields;