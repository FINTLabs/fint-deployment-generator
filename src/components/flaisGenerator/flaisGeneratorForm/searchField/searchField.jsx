import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

function SearchField() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleImportClick = () => {
        console.log("Import button clicked with search term:", searchTerm);
    };

    return (
        <div className="flex justify-center items-center m-10">
            <div className="flex gap-2.5 items-center">
                <TextField
                    label="Repository Name"
                    variant="outlined"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    style={{width: "300px"}}
                />
                <Button variant="contained" color="primary" onClick={handleImportClick}>
                    Import
                </Button>
            </div>
        </div>
    );
}

export default SearchField;
