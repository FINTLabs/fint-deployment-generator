import React, { useState, useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import {organizationData} from "../Data/OrganizationData";

const OrganizationForm = () => {
    const [orgData, setOrgData] = useState(organizationData);
    const [orgNames, setOrgNames] = useState([]);
    const [selectedOrgs, setSelectedOrgs] = useState([]);

    useEffect(() => {
        // Extract the names of the organizations from orgData
        const names = Object.keys(orgData).map(key => orgData[key].name);
        setOrgNames(names);

        // Populate selectedOrgs with names of active organizations
        const activeOrgs = names.filter(name => {
            const key = Object.keys(orgData).find(k => orgData[k].name === name);
            return orgData[key].active;
        });
        setSelectedOrgs(activeOrgs);
    }, [orgData]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setSelectedOrgs(
            typeof value === 'string' ? value.split(',') : value,
        );

        // Update the active status in orgData
        let newOrgData = { ...orgData };
        Object.keys(newOrgData).forEach(key => {
            newOrgData[key].active = value.includes(newOrgData[key].name);
        });
        setOrgData(newOrgData);
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-checkbox-label">Organizations</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={selectedOrgs}
                    onChange={handleChange}
                    input={<OutlinedInput label="Organizations" />}
                    renderValue={(selected) => selected.join(', ')}
                >
                    {orgNames.map((name) => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={selectedOrgs.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};

export default OrganizationForm;
