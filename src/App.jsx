import { Button, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'


function App() {

  return (
    <>
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
