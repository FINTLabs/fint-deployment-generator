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
        <div className="space-y-4 flex flex-col">
            {form.kafka.acls.map((acl, index) => (
                <div key={index} className="flex flex-col space-y-4">
                    <TextField
                        name="kafkatopic"
                        label="Topic"
                        value={acl.topic}
                        onChange={handleAclChange(index, "topic")}
                        className="w-full" // 100% width
                    />
                    <div className="flex space-x-4">
                        <FormControl className="w-1/2"> {/* 50% width */}
                            <InputLabel id={`kafkapermission-select-label-${index}`}>Permission</InputLabel>
                            <Select
                                labelId={`kafkapermission-select-label-${index}`}
                                name="kafkapermission"
                                label="Permission"
                                value={acl.permission}
                                onChange={handleAclChange(index, "permission")}
                                fullWidth
                            >
                                <MenuItem value={"admin"}>admin</MenuItem>
                                <MenuItem value={"read"}>read</MenuItem>
                            </Select>
                        </FormControl>
                        <IconButton onClick={() => removeAcl(index)} className="w-1/6">
                            <DeleteIcon />
                        </IconButton>
                    </div>
                </div>
            ))}
            <Button
                variant="contained"
                color="primary"
                onClick={addNewAcl}
                className="text-primary border-primary"
            >
                Add New ACL
            </Button>
        </div>
    );

};

export default KafkaFields;
