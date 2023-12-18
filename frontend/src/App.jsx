import './App.css';
import Header from './components/Header/Header.jsx';
import { Stack } from '@mui/material';
import Notes from './components/Notes/Notes.jsx';
import { useState } from 'react';

function App() {
  const [filter, setFilter] = useState('');

  return (
    <Stack direction='column' justifyContent='flex-start' alignItems='center' spacing={2}>
      <Header filter={filter} setFilter={setFilter} />
      <Notes filter={filter} setFilter={setFilter} />
    </Stack>
  );
}

export default App;
