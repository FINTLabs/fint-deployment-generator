import React, {useState} from 'react';
import {InputLabel, MenuItem, Select, Stack, TextField, FormControl} from '@mui/material';

const UrlFields = ({ form, handleChange }) => {

    const [values, setValues] = useState([]);

    const handleChangeHold = (e, index, field) => {
        //const newValue = [...values];
        // newPairs[index][field] = e.target.value;
        // setKeyValPairs(newPairs);
        //
        // const newPairObj = {};
        // newPairs.forEach(pair => {
        //     if (pair.key && pair.value) {
        //         newPairObj[pair.key] = pair.value;
        //     }
        // });

        //setForm(prevForm => ({ ...prevForm, newValue}));
    };

    return (
        <Stack spacing={2}>
            <FormControl>
                <InputLabel id="kafkapermission-select-label">Permission</InputLabel>

                <Select
                    labelId={"kafkapermission-select-label"}
                    name="kafkapermission"
                    label="Permission"
                    value={"Read"}
                >
                    <MenuItem value={"Admin"}>Admin</MenuItem>
                    <MenuItem value={"Read"}>Read</MenuItem>
                </Select>
            </FormControl>
            <TextField
                name="kafkatopic"
                label="Topic"
                value={form.kafka.acls}
                onChange={handleChange}
            />

        </Stack>
    );
};

export default UrlFields;