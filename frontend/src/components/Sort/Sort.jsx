import React, { useState } from 'react';
import { IconButton, Stack, Typography } from '@mui/material';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import { useDispatch } from 'react-redux';
import { fetchNotes, sort } from '../../redux/notesSlice.js';

const Sort = () => {
  const [descending, setDescending] = useState(true);
  const dispatch = useDispatch();

  const handleSort = () => {
    setDescending(!descending);
    dispatch(sort());
    dispatch(fetchNotes());
  };

  return (
    <Stack direction='row' spacing={1} alignItems='center'>
      <Typography>Sort by date</Typography>
      <IconButton onClick={handleSort}>
        {descending ? <ExpandMoreRoundedIcon /> : <ExpandLessRoundedIcon />}
      </IconButton>
    </Stack>
  );
};

export default Sort;
