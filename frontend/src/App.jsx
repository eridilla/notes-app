import './App.css';
import Header from './components/Header/Header.jsx';
import { Stack } from '@mui/material';
import Notes from './components/Notes/Notes.jsx';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchNotes } from './redux/notesSlice.js';

function App() {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  return (
    <Stack direction='column' justifyContent='flex-start' alignItems='center' spacing={2}>
      <Header filter={filter} setFilter={setFilter} />
      <Notes filter={filter} setFilter={setFilter} />
    </Stack>
  );
}

export default App;
