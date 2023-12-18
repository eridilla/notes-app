import React, { useState } from 'react';
import './Notes.css';
import { Box, Stack, Typography } from '@mui/material';
import StickyNote from '../StickyNote/StickyNote.jsx';
import { useSelector } from 'react-redux';
import StickyNoteDrawer from '../StickyNoteDrawer/StickyNoteDrawer.jsx';
import SouthEastIcon from '@mui/icons-material/SouthEast';

const Notes = ({ filter }) => {
  const notes = useSelector((state) => state.notes);

  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [selectedColor, setSelectedColor] = useState('stickynote.yellow');
  const [noteProps, setNoteProps] = useState({
    title: '',
    content: '',
    tags: [],
    color: selectedColor,
    created: undefined,
  });

  const handleEdit = (props) => {
    setNoteProps(props);
    setEdit(true);
    setOpen(true);
  };

  const chunkSize = 4;

  const chunks = (arr) => {
    if (arr.length === 0) {
      return notes.filtered ? (
        <Typography sx={{ fontSize: '2.5rem', color: 'rgba(0,0,0,0.3)' }}>
          No notes found using filter...
        </Typography>
      ) : (
        <Stack direction='column' alignItems='center'>
          <Typography sx={{ fontSize: '2.5rem', color: 'rgba(0,0,0,0.3)' }}>
            No notes yet...
          </Typography>
          <Typography sx={{ fontSize: '2.5rem', color: 'rgba(0,0,0,0.3)' }}>
            Write a new note by clicking the +
          </Typography>
          <SouthEastIcon sx={{ fontSize: '5rem', color: 'rgba(0,0,0,0.3)' }} />
        </Stack>
      );
    }

    let chunks = [];

    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }

    return chunks.map((chunk) => {
      return (
        <Stack direction='row' spacing={2}>
          {chunk.map((note) => (
            <StickyNote key={note.id} props={note} handleEdit={handleEdit} />
          ))}
        </Stack>
      );
    });
  };

  return (
    <Box>
      <StickyNoteDrawer
        props={{
          open,
          setOpen,
          selectedColor,
          setSelectedColor,
          noteProps,
          setNoteProps,
          edit,
          setEdit,
          filter,
        }}
      />
      <Stack direction='column' justifyContent='flex-start' alignItems='flex-start' spacing={2}>
        {chunks(notes.notes)}
      </Stack>
    </Box>
  );
};

export default Notes;
