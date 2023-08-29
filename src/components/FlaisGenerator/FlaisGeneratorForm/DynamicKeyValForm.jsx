import React, { useState } from 'react';
import { Button, TextField, IconButton, Stack } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const DynamicKeyValForm = ({ form, setForm, fieldKey }) => {
    const [keyValPairs, setKeyValPairs] = useState([{ key: '', value: '' }]);

    const addPair = () => {
        setKeyValPairs([...keyValPairs, { key: '', value: '' }]);
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

        const newPairObj = {};
        newPairs.forEach(pair => {
            if (pair.key && pair.value) {
                newPairObj[pair.key] = pair.value;
            }
        });

        setForm(prevForm => ({ ...prevForm, [fieldKey]: newPairObj }));
    };

    return (
        <Stack spacing={2}>
            {keyValPairs.map((pair, index) => (
                <Stack direction="row" spacing={1} key={index}>
                    <TextField
                        label="Key"
                        value={pair.key}
                        onChange={(e) => handleChange(e, index, 'key')}
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

export default DynamicKeyValForm;
