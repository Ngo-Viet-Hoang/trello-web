import { Box, Button, FormControl, InputLabel, MenuItem, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import {
  useColorScheme
} from '@mui/material/styles'
import Select from '@mui/material/Select'
import { useState } from 'react'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()

  const handleChange = (event) => {
    setMode(event.target.value)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <Box sx={{ display:'flex', alignItems:'center', gap:'8px' }}>
            <LightModeIcon sx={{ fontSize:'small' }}/>Light</Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display:'flex', alignItems:'center', gap:1 }}>
            <DarkModeIcon/> Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display:'flex', alignItems:'center', gap:2 }}>
            <SettingsBrightnessIcon/> System</Box></MenuItem>
      </Select>
    </FormControl>
  );
}

function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}

function App() {

  return (
    <>
      <ModeToggle/>
      <ModeSelect/>
      <div>hoang ngo</div>
      <Button variant="text">Text</Button>
      <Button variant="contained" color ="success">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Typography variant="body2" color="text.secondary">Hello word</Typography>
      <DeleteIcon/>
    </>
  )
}

export default App
