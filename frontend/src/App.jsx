import './App.css';
import Header from './components/Header/Header.jsx';
import { Stack } from '@mui/material';
import Notes from './components/Notes/Notes.jsx';

function App() {
  return (
    <Stack direction='column' justifyContent='flex-start' alignItems='center' spacing={2}>
      <Header />
      <Notes />
    </Stack>
  );
}

export default App;
