import {Stack, TextField} from "@mui/material";
import React from "react";

const OnePasswordFields = ({ form, handleChange }) => {
    return (
        <Stack spacing={2}>
            <TextField
                name="path"
                label="Path"
                value={form.onePassword.path}
                onChange={handleChange}
            />
        </Stack>
    );
};

export default OnePasswordFields;