import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { updateFlaisApplication } from "./UpdateFlaisValues";

const DisplayFlaisApplication = ({ open, handleClose, formData }) => {
    const yamlData = updateFlaisApplication(formData);

    const downloadYaml = () => {
        const blob = new Blob([yamlData], { type: 'text/yaml' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'flais.yaml';
        link.click();
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(yamlData).then(() => {
            console.log('YAML data copied to clipboard');
        }).catch(() => {
            console.error('Failed to copy YAML data to clipboard');
        });
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            scroll='paper'
            PaperProps={{ style: { maxWidth: '600px', width: '90%' } }}
        >
            <DialogTitle>Form YAML Data</DialogTitle>
            <DialogContent dividers={true} style={{ fontSize: '1rem' }}>
                <pre>{yamlData}</pre>
            </DialogContent>
            <DialogActions>
                <Button onClick={copyToClipboard} color="primary">
                    Copy to Clipboard
                </Button>
                <Button onClick={downloadYaml} color="primary">
                    Download
                </Button>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DisplayFlaisApplication;
