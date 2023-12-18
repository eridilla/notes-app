import React from 'react';
import { IconButton, Stack, TextField, Typography } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch } from 'react-redux';
import { filterNotes, reset } from '../../redux/notesSlice.js';

const Filter = ({ filter, setFilter }) => {
  const dispatch = useDispatch();

  const submitFilter = (event) => {
    if (event.key === 'Enter') {
      if (!event.target.value) resetFilter();
      else {
        dispatch(reset());
        dispatch(filterNotes(event.target.value.split(', ')));
      }
    }
  };

  const resetFilter = () => {
    setFilter('');
    dispatch(reset());
  };

  return (
    <Stack
      direction='row'
      spacing={2}
      alignItems='center'
      sx={{ position: 'absolute', left: '1rem' }}
    >
      <Typography>Filter by tags: </Typography>
      <TextField
        variant='outlined'
        sx={{ width: '25rem' }}
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        onKeyDown={submitFilter}
      />
      <IconButton sx={{ right: '4rem' }} onClick={resetFilter}>
        <ClearIcon />
      </IconButton>
    </Stack>
  );
};

export default Filter;
