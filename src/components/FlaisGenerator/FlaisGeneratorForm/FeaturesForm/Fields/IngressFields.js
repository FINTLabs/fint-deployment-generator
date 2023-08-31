import React, { useState, useEffect } from 'react';
import {Stack, TextField, Button, IconButton} from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";

const IngressFields = ({ form, handleChange }) => {
    const [localMiddlewares, setLocalMiddlewares] = useState(form.ingress.middlewares || []);

    // Step 2: Type Check During Runtime
    useEffect(() => {
        console.log("Setting local middlewares to: ", form.ingress.middlewares);  // Debugging log
        if (Array.isArray(form.ingress.middlewares)) {  // Type-checking before setting
            setLocalMiddlewares(form.ingress.middlewares);
        } else {
            console.error("Expected form.ingress.middlewares to be an array, got ", form.ingress.middlewares);  // Debugging log
        }
    }, [form.ingress.middlewares]);

    const handleLocalChange = (index) => (event) => {
        const newMiddlewares = [...localMiddlewares];
        newMiddlewares[index] = event.target.value;
        setLocalMiddlewares(newMiddlewares);

        handleChange('ingress', 'middlewares')(event, newMiddlewares);
    };

    const handleAddMiddleware = () => {
        const newMiddlewares = [...localMiddlewares, ''];
        setLocalMiddlewares(newMiddlewares);
        handleChange('ingress', 'middlewares')(null, newMiddlewares);
    };

    const handleRemoveMiddleware = (index) => {
        const newMiddlewares = [...localMiddlewares];
        newMiddlewares.splice(index, 1);
        setLocalMiddlewares(newMiddlewares);

        handleChange('ingress', 'middlewares')(null, newMiddlewares);
    };

    return (
        <Stack spacing={2}>
            <TextField
                name="basepath"
                label="Basepath"
                value={form.ingress.basePath}
                onChange={handleChange('ingress', 'basePath')}
            />
            {/* Step 4: Type Check Before .map */}
            {Array.isArray(localMiddlewares) && localMiddlewares.map((middleware, index) => (
                <Stack direction="row" spacing={1} key={index}>
                    <TextField
                        name={`middleware-${index}`}
                        label={`Middleware ${index + 1}`}
                        value={middleware}
                        onChange={handleLocalChange(index)}
                    />
                    <IconButton onClick={() => handleRemoveMiddleware(index)}>
                        <DeleteIcon />
                    </IconButton>
                </Stack>
            ))}
            <Button variant="contained" onClick={handleAddMiddleware}>
                Add Middleware
            </Button>
        </Stack>
    );
};

export default IngressFields;
