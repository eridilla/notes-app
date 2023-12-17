import React from 'react';
import { Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { remove } from '../../redux/notesSlice.js';

const StickyNoteButtons = ({ props, textDark, handleEdit }) => {
  const dispatch = useDispatch();

  const removeNote = () => {
    dispatch(remove(props.id));
  };

  return (
    <Box sx={{ width: '1.5rem' }}>
      <IconButton
        aria-label='delete'
        size='small'
        onClick={() => handleEdit(props)}
        sx={{ color: textDark ? 'rgba(0, 0, 0, 0.54)' : 'rgba(255, 255, 255, 0.54)' }}
      >
        <EditIcon />
      </IconButton>
      <IconButton
        aria-label='delete'
        size='small'
        onClick={removeNote}
        sx={{ color: textDark ? 'rgba(0, 0, 0, 0.54)' : 'rgba(255, 255, 255, 0.54)' }}
      >
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default StickyNoteButtons;
