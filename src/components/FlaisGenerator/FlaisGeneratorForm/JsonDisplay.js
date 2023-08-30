import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import * as jsyaml from 'js-yaml';

const JsonDisplay = ({ open, handleClose, jsonData }) => {
    const downloadYaml = () => {
        const yamlText = jsyaml.dump(jsonData);
        const blob = new Blob([yamlText], { type: 'text/yaml' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'flais.yaml';
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            scroll='paper'
            PaperProps={{ style: { maxWidth: '600px', width: '90%' } }}
        >
            <DialogTitle>Form JSON Data</DialogTitle>
            <DialogContent dividers={true} style={{ fontSize: '1rem' }}>
                <pre>{JSON.stringify(jsonData, null, 2)}</pre>
            </DialogContent>
            <DialogActions>
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

export default JsonDisplay;
