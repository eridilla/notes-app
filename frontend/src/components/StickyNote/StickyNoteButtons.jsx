import React from 'react';
import { Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const StickyNoteButtons = () => {
  return (
    <Box sx={{ width: '1.5rem' }}>
      <IconButton aria-label='delete' size='small'>
        <EditIcon />
      </IconButton>
      <IconButton aria-label='delete' size='small'>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default StickyNoteButtons;
