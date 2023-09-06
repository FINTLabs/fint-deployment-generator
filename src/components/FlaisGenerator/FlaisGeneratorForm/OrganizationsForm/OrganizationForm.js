import React, { useState } from 'react';
import { Typography, Divider, FormControlLabel, Checkbox } from '@mui/material';
import {organizationData} from "../Data/OrganizationData";

const OrganizationsForm = () => {
    const [orgData, setOrgData] = useState(organizationData)

    const organizations = Object.keys(orgData);

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setOrgData((prevState) => ({
            ...prevState,
            [name]: {
                ...prevState[name],
                active: checked,
            },
        }));
    };

    return (
        <>
            <Divider style={{ margin: '16px 0' }} />
            <Typography align='center' variant='h6'>
                Organizations
            </Typography>
            <div className='flex flex-wrap justify-center'>
                {organizations.map((org, index) => (
                    <FormControlLabel
                        key={`${org}-${index}`}
                        control={
                            <Checkbox
                                checked={orgData[org].active}
                                onChange={handleCheckboxChange}
                                name={org}
                                color='primary'
                            />
                        }
                        label={orgData[org].name}
                    />
                ))}
            </div>
        </>
    );
};

export default OrganizationsForm;
