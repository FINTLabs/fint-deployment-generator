import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const EnvironmentSelect = ({ selectedEnvironments, setSelectedEnvironments }) => {
    const environmentNames = ['Api', 'Beta', 'Alpha', 'Pwf'];

    const handleChange = (event, value) => {
        setSelectedEnvironments(value);
    };

    const filterOptions = (options, { inputValue }) => {
        return options.filter(
            option => option.toLowerCase().includes(inputValue.toLowerCase())
        );
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <Autocomplete
                    multiple
                    id="checkboxes-tags-demo"
                    options={environmentNames}
                    disableCloseOnSelect
                    value={selectedEnvironments}
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
                        <TextField {...params} variant="outlined" label="Environments" />
                    )}
                />
            </FormControl>
        </div>
    );
};

export default EnvironmentSelect;
