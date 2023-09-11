import React, {useState} from 'react';
import {Dialog, DialogTitle, DialogContent, DialogActions, Button} from '@mui/material';
import {updateFlaisApplication} from "../../Utils/UpdateFlaisApplication";

const DisplayFlaisApplication = ({ formData, yaml, setYaml}) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setYaml(updateFlaisApplication(formData))
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const downloadYaml = () => {
        const blob = new Blob([yaml], {type: 'text/yaml'});
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'flais.yaml';
        link.click();
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(yaml).then(() => {
            console.log('YAML data copied to clipboard');
        }).catch(() => {
            console.error('Failed to copy YAML data to clipboard');
        });
    };

    return (
        <>
            <Button
                variant="contained"
                color="primary"
                onClick={handleClickOpen}
            >
                Show Flais Application
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll='paper'
                PaperProps={{style: {maxWidth: '600px', width: '90%'}}}
            >
                <DialogTitle>Form YAML Data</DialogTitle>
                <DialogContent dividers={true} style={{fontSize: '1rem'}}>
                    <pre>{yaml}</pre>
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
        </>
    );
};

export default DisplayFlaisApplication;
