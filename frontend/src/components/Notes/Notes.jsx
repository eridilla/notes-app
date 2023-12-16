import React, { useState } from 'react';
import './Notes.css';
import { Box, Button, Stack } from '@mui/material';
import StickyNote from '../StickyNote/StickyNote.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from '../../redux/notesSlice.js';

const Notes = () => {
  const notesRedux = useSelector((state) => state.notes);
  const dispatch = useDispatch();

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
            <StickyNote key={note.id} props={note} />
          ))}
        </Stack>
      );
    });
  };

  const newNote = () => {
    let newId = Math.max(...notesRedux.notes.map((i) => i.id)) + 1;
    newId = newId < 0 ? 0 : newId;

    dispatch(
      addNote({
        id: newId,
        title: `New note ${newId}`,
        content: '*content goes here*',
        tags: ['tag1', 'tag2', 'tag3'],
        color: randColor(),
        created: Date.now(),
      }),
    );
  };

  return (
    <Box>
      {/*<Button variant='contained' onClick={addNote}>*/}
      {/*  Add Note*/}
      {/*</Button>*/}
      <Button variant='contained' onClick={newNote}>
        Add Note
      </Button>
      <Stack direction='column' justifyContent='flex-start' alignItems='flex-start' spacing={2}>
        {chunks(notesRedux.notes)}
      </Stack>
    </Box>
  );
};

export default Notes;
