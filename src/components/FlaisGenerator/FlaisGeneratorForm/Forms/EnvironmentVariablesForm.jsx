import React, { useState, useEffect } from 'react';
import { Button, TextField, IconButton, Stack } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const EnvironmentVariablesForm = ({ form, setForm }) => {
    const [keyValPairs, setKeyValPairs] = useState(form.environmentVariables || []);

    useEffect(() => {
        setForm(prevForm => ({ ...prevForm, environmentVariables: keyValPairs }));
    }, [keyValPairs, setForm]);

    const addPair = () => {
        setKeyValPairs([...keyValPairs, { name: '', value: '' }]);
    };

    const removePair = (index) => {
        const newPairs = [...keyValPairs];
        newPairs.splice(index, 1);
        setKeyValPairs(newPairs);
    };

    const handleChange = (e, index, field) => {
        const newPairs = [...keyValPairs];
        newPairs[index][field] = e.target.value;
        setKeyValPairs(newPairs);
    };

    return (
        <Stack spacing={2}>
            {keyValPairs.map((pair, index) => (
                <Stack direction="row" spacing={1} key={index}>
                    <TextField
                        label="Name"
                        value={pair.name}
                        onChange={(e) => handleChange(e, index, 'name')}
                    />
                    <TextField
                        label="Value"
                        value={pair.value}
                        onChange={(e) => handleChange(e, index, 'value')}
                    />
                    <IconButton onClick={() => removePair(index)}>
                        <DeleteIcon />
                    </IconButton>
                </Stack>
            ))}
            <Button variant="contained" color="primary" onClick={addPair}>
                Add Pair
            </Button>
        </Stack>
    );
};

export default EnvironmentVariablesForm;
