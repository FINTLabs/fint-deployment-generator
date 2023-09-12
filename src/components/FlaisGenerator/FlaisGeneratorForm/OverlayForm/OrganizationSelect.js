import React, { useState, useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { organizationData } from '../Data/OrganizationData';

const OrganizationSelect = ({ selectedOrgs, setSelectedOrgs }) => {
    const [orgData, setOrgData] = useState(organizationData);
    const [orgNames, setOrgNames] = useState([]);

    useEffect(() => {
        const names = Object.keys(orgData).map((key) => orgData[key].name);
        setOrgNames(names);

        const activeOrgs = names.filter((name) => {
            const key = Object.keys(orgData).find((k) => orgData[k].name === name);
            return orgData[key].active;
        });

        const selectedOrgObjects = activeOrgs.map((name) => {
            const key = Object.keys(orgData).find((k) => orgData[k].name === name);
            return { key, name };
        });

        setSelectedOrgs(selectedOrgObjects);
    }, [orgData, setSelectedOrgs]);

    const handleChange = (event, value) => {
        setSelectedOrgs(
            value.map((name) => {
                const key = Object.keys(orgData).find((k) => orgData[k].name === name);
                return { key, name };
            })
        );

        let newOrgData = { ...orgData };
        Object.keys(newOrgData).forEach((key) => {
            newOrgData[key].active = value.includes(newOrgData[key].name);
        });
        setOrgData(newOrgData);
    };

    const filterOptions = (options, { inputValue }) => {
        const matchFromName = options.filter((option) =>
            option.toLowerCase().includes(inputValue.toLowerCase())
        );

        const matchFromKey = Object.keys(orgData)
            .filter((key) => key.toLowerCase().includes(inputValue.toLowerCase()))
            .map((key) => orgData[key].name);

        return [...new Set([...matchFromName, ...matchFromKey])];
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <Autocomplete
                    multiple
                    id="checkboxes-tags-demo"
                    options={orgNames}
                    disableCloseOnSelect
                    value={selectedOrgs.map((org) => org.name)}
                    onChange={handleChange}
                    filterOptions={filterOptions}
                    getOptionLabel={(option) => option}
                    isOptionEqualToValue={(option, value) => option === value}
                    renderOption={(props, option, { selected }) => (
                        <li {...props}>
                            <Checkbox style={{ marginRight: 8 }} checked={selected} />
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

export default OrganizationSelect;
