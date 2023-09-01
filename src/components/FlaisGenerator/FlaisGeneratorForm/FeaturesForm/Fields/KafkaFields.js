import {Button, FormControl, IconButton, InputLabel, MenuItem, Select, Stack, TextField} from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

const KafkaFields = ({ form, handleChange }) => {
    const addNewAcl = () => {
        const newAcl = { topic: "", permission: "" };
        handleChange("kafka", "acls")({}, [...form.kafka.acls, newAcl]);
    };

    const removeAcl = (indexToRemove) => {
        const filteredAcls = form.kafka.acls.filter((_, index) => index !== indexToRemove);
        handleChange("kafka", "acls")({}, filteredAcls);
    };

    const handleAclChange = (index, key) => (event) => {
        const newAcls = [...form.kafka.acls];
        newAcls[index][key] = event.target.value;
        handleChange("kafka", "acls")({}, newAcls);
    };

    return (
        <Stack spacing={2}>
            {form.kafka.acls.map((acl, index) => (
                <Stack key={index} direction="row" spacing={2}>
                    <TextField
                        name="kafkatopic"
                        label="Topic"
                        value={acl.topic}
                        onChange={handleAclChange(index, "topic")}
                    />
                    <FormControl>
                        <InputLabel id={`kafkapermission-select-label-${index}`}>Permission</InputLabel>
                        <Select
                            labelId={`kafkapermission-select-label-${index}`}
                            name="kafkapermission"
                            label="Permission"
                            value={acl.permission}
                            onChange={handleAclChange(index, "permission")}
                        >
                            <MenuItem value={"admin"}>admin</MenuItem>
                            <MenuItem value={"read"}>read</MenuItem>
                        </Select>
                    </FormControl>
                    <IconButton onClick={() => removeAcl(index)}>
                        <DeleteIcon />
                    </IconButton>
                </Stack>
            ))}
            <Button variant="outlined" color="primary" onClick={addNewAcl}>
                Add New ACL
            </Button>
        </Stack>
    );
};

export default KafkaFields;
