import React, {useState} from 'react';
import {InputLabel, MenuItem, Select, Stack, TextField, FormControl} from '@mui/material';

const KafkaFields = ({ form, handleChange }) => {


    return (
        <Stack spacing={2}>
            <TextField
                name="kafkatopic"
                label="Topic"
                value={form.kafka.acl.topic}
                onChange={handleChange}
            />
            <FormControl>
                <InputLabel id="kafkapermission-select-label">Permission</InputLabel>

                <Select
                    labelId={"kafkapermission-select-label"}
                    name="kafkapermission"
                    label="Permission"
                    value={form.kafka.acl.permission}
                >
                    <MenuItem value={"admin"}>admin</MenuItem>
                    <MenuItem value={"read"}>read</MenuItem>
                </Select>
            </FormControl>
        </Stack>
    );
};

export default KafkaFields;