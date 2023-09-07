import React, { useState, useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import {organizationData} from "../Data/OrganizationData";

const OrganizationForm = () => {
    const [orgData, setOrgData] = useState(organizationData);
    const [orgNames, setOrgNames] = useState([]);
    const [selectedOrgs, setSelectedOrgs] = useState([]);

    useEffect(() => {
        const names = Object.keys(orgData).map(key => orgData[key].name);
        setOrgNames(names);

        const activeOrgs = names.filter(name => {
            const key = Object.keys(orgData).find(k => orgData[k].name === name);
            return orgData[key].active;
        });
        setSelectedOrgs(activeOrgs);
    }, [orgData]);

    const handleChange = (event, value) => {
        setSelectedOrgs(value);

        let newOrgData = { ...orgData };
        Object.keys(newOrgData).forEach(key => {
            newOrgData[key].active = value.includes(newOrgData[key].name);
        });
        setOrgData(newOrgData);
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <Autocomplete
                    multiple
                    id="checkboxes-tags-demo"
                    options={orgNames}
                    disableCloseOnSelect
                    value={selectedOrgs}
                    onChange={handleChange}
                    getOptionLabel={(option) => option}
                    isOptionEqualToValue={(option, value) => option === value}
                    renderOption={(props, option, { selected }) => (
                        <li {...props}>
                            <Checkbox
                                style={{ marginRight: 8 }}
                                checked={selected}
                            />
                            {option}
                        </li>
                    )}
                    renderInput={(params) => (
                        <TextField {...params} variant="outlined" label="Organizations" />
                    )}
                />
            </FormControl>
        </div>
    );
};

export default OrganizationForm;
