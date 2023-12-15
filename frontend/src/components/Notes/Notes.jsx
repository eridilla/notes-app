import React, { useState } from 'react';
import './Notes.css';
import { Box, Button, Stack } from '@mui/material';
import StickyNote from '../StickyNote/StickyNote.jsx';

const Notes = () => {
  const randColor = () => {
    let color = Math.floor(Math.random() * 5) + 1;

    switch (color) {
      case 1:
        color = 'stickynote.yellow';
        break;
      case 2:
        color = 'stickynote.green';
        break;
      case 3:
        color = 'stickynote.pink';
        break;
      case 4:
        color = 'stickynote.cyan';
        break;
      case 5:
        color = 'stickynote.purple';
        break;
      default:
        color = 'stickynote.yellow';
        break;
    }

    return color;
  };

  const chunks = (arr) => {
    const chunkSize = 4;
    let chunks = [];

    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }

    return chunks.map((chunk) => {
      return (
        <Stack direction='row' spacing={2}>
          {chunk.map((note) => (
            <StickyNote id={note.id} color={note.color} />
          ))}
        </Stack>
      );
    });
  };

  // TODO: Use reduxa instead of useState
  const [notes, setNotes] = useState(
    [...Array(5).keys()].map((i) => {
      return { id: i, color: randColor() };
    }),
  );

  const addNote = () => {
    const newId = Math.max(...notes.map((i) => i.id)) + 1;

    setNotes([...notes, { id: newId, color: randColor() }]);

    console.log(notes);
  };

  return (
    <Box>
      <Button variant='contained' onClick={addNote}>
        Add Note
      </Button>
      <Stack direction='column' justifyContent='flex-start' alignItems='flex-start' spacing={2}>
        {chunks(notes)}
      </Stack>
    </Box>
  );
};

export default Notes;
