import React, { useState, useEffect } from 'react';
import { Button, TextField, IconButton, Stack } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const SecretReferencesForm = ({ form, setForm }) => {
    const [keyValPairs, setKeyValPairs] = useState(form.secretReferences || []);

    useEffect(() => {
        setForm(prevForm => ({ ...prevForm, secretReferences: keyValPairs }));
    }, [keyValPairs, setForm]);

    const addPair = () => {
        setKeyValPairs([...keyValPairs, { name: '' }]);
    };

    const removePair = (index) => {
        const newPairs = [...keyValPairs];
        newPairs.splice(index, 1);
        setKeyValPairs(newPairs);
    };

    const handleChange = (e, index) => {
        const newPairs = [...keyValPairs];
        newPairs[index].name = e.target.value;
        setKeyValPairs(newPairs);
    };

    return (
        <Stack spacing={2}>
            {keyValPairs.map((pair, index) => (
                <Stack direction="row" spacing={1} key={index}>
                    <TextField
                        label="Name"
                        value={pair.name}
                        onChange={(e) => handleChange(e, index)}
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

export default SecretReferencesForm;
