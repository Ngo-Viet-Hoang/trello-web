import { Button, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import {
  useColorScheme
} from '@mui/material/styles'

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
