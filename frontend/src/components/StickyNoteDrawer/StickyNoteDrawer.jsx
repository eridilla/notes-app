import React, { useState } from 'react';
import { Button, Drawer, Paper, Stack, TextField, Typography } from '@mui/material';
import './StickyNoteDrawer.css';
import StickyNote from '../StickyNote/StickyNote.jsx';
import { useDispatch, useSelector } from 'react-redux';
import ColorSelect from './ColorSelect.jsx';
import { add, edit } from '../../redux/notesSlice.js';

const StickyNoteDrawer = ({ props }) => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const handleOpen = () => {
    let newId = Math.max(...notes.notes.map((i) => i.id)) + 1;
    newId = newId < 0 ? 0 : newId;

    props.setNoteProps({
      title: '',
      content: '',
      tags: [],
      created: undefined,
      id: newId,
      color: 'stickynote.yellow',
    });

    props.setEdit(false);
    props.setSelectedColor('stickynote.yellow');
    props.setOpen(true);
  };

  const handleColorChange = (color) => {
    props.setSelectedColor(color);
    props.setNoteProps({ ...props.noteProps, color });
  };

  const handleSubmit = () => {
    if (props.edit) {
      dispatch(edit(props.noteProps));
    } else {
      let newId = Math.max(...notes.notes.map((i) => i.id)) + 1;
      newId = newId < 0 ? 0 : newId;

      dispatch(
        add({
          ...props.noteProps,
          id: newId,
          created: Date.now(),
        }),
      );
    }

    props.setOpen(false);
  };

  const handleAddTag = (event) => {
    if (event.key === 'Enter') {
      const newTags = event.target.value.split(', ');
      props.setNoteProps({
        ...props.noteProps,
        tags: [...props.noteProps.tags, ...newTags],
      });

      event.target.value = '';
    }
  };

  return (
    <>
      <Button onClick={handleOpen}>Open</Button>
      <Drawer anchor='bottom' open={props.open} onClose={() => props.setOpen(false)}>
        <Paper
          square
          elevation={7}
          sx={{
            width: '30rem',
            height: '40vw',
            bgcolor: '#fff5c5',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            pointerEvents: 'all',
            p: '1rem',
          }}
        >
          <Stack direction='column' justifyContent='flex-start' alignItems='center' spacing={2}>
            <Typography sx={{ fontSize: '1.5rem' }}>
              {props.edit ? `Edit note (ID: ${props.noteProps.id})` : 'Write new note'}
            </Typography>
            <Stack direction='row' spacing={2}>
              <ColorSelect
                selectedColor={props.noteProps.color}
                handleColorChange={handleColorChange}
              />
              <StickyNote props={props.noteProps} editing setNoteProps={props.setNoteProps} />
            </Stack>
            <TextField fullWidth variant='outlined' label='Add tags' onKeyDown={handleAddTag} />
            <Button onClick={handleSubmit}>Submit</Button>
          </Stack>
        </Paper>
      </Drawer>
    </>
  );
};

export default StickyNoteDrawer;
