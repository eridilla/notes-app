import React from 'react';
import { IconButton, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { remove } from '../../redux/notesSlice.js';
import axios from 'axios';

const StickyNoteButtons = ({ show, props, textDark, handleEdit }) => {
  const dispatch = useDispatch();

  const removeNote = () => {
    axios.delete(`https://657fb4f26ae0629a3f538905.mockapi.io/notes-app/api/notes/${props.id}`);
    dispatch(remove(props.id));
  };

  return (
    <Stack direction='column'>
      {show && (
        <>
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
        </>
      )}
    </Stack>
  );
};

export default StickyNoteButtons;
