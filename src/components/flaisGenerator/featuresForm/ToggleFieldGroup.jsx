import React from 'react';
import { Checkbox, FormControlLabel, Paper, Typography, Divider } from '@mui/material';

const ToggleFieldGroup = ({ label, isActive, onToggle, children }) => {
    return (
        <Paper elevation={3} style={{ padding: '16px' }}>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={isActive}
                        onChange={onToggle}
                    />
                }
                label={<Typography variant="h6">{label}</Typography>}
            />
            <Divider style={{ margin: '8px 0' }} />
            {isActive && children}
        </Paper>
    );
};

export default ToggleFieldGroup;
