import { FormControl, InputLabel, MenuItem, Select, TextField, Stack } from "@mui/material";

const BasicInfoField = ({ form, handleChange }) => {
    return (
        <Stack spacing={2} className="m-4">
            <TextField
                fullWidth
                label="Name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
            />
            <FormControl fullWidth>
                <InputLabel id="component-label">Component</InputLabel>
                <Select
                    labelId="component-label"
                    id="component-select"
                    name="component"
                    value={form.component}
                    label="Component"
                    onChange={handleChange}
                >
                    <MenuItem value="backend">backend</MenuItem>
                    <MenuItem value="frontend">frontend</MenuItem>
                    <MenuItem value="adapter">adapter</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="part-of-label">Part of</InputLabel>
                <Select
                    labelId="part-of-label"
                    id="part-of-select"
                    name="partOf"
                    value={form.partOf}
                    label="Part of"
                    onChange={handleChange}
                >
                    <MenuItem value="fint-core">fint-core</MenuItem>
                    <MenuItem value="flais">flais</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="team-label">Team</InputLabel>
                <Select
                    labelId="team-label"
                    id="team-select"
                    name="team"
                    value={form.team}
                    label="Team"
                    onChange={handleChange}
                >
                    <MenuItem value="core">core</MenuItem>
                    <MenuItem value="flais">flais</MenuItem>
                    <MenuItem value="bas">bas</MenuItem>
                </Select>
            </FormControl>
            <TextField
                fullWidth
                label="Port"
                name="port"
                type="number"
                value={form.port}
                onChange={handleChange}
            />
        </Stack>
    );
};

export default BasicInfoField;
