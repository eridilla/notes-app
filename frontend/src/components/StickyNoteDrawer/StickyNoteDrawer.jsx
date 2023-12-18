import React from 'react';
import { Button, Drawer, IconButton, Paper, Stack, TextField, Typography } from '@mui/material';
import './StickyNoteDrawer.css';
import StickyNote from '../StickyNote/StickyNote.jsx';
import { useDispatch, useSelector } from 'react-redux';
import ColorSelect from './ColorSelect.jsx';
import { add, edit, filterNotes, reset } from '../../redux/notesSlice.js';
import AddIcon from '@mui/icons-material/AddRounded';
import axios from 'axios';

const StickyNoteDrawer = ({ props }) => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const handleOpen = () => {
    let newId = Math.max(...notes.notes.map((i) => i.id)) + 1;
    newId = newId < 1 ? 1 : newId;

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
    if (props.noteProps.title.length > 16) {
      return;
    }

    if (props.edit) {
      axios.put(
        `https://657fb4f26ae0629a3f538905.mockapi.io/notes-app/api/notes/${props.noteProps.id}`,
        {
          ...props.noteProps,
        },
      );
      dispatch(edit(props.noteProps));
    } else {
      let newId = Math.max(...notes.notes.map((i) => i.id)) + 1;
      newId = newId < 1 ? 1 : newId;

      axios.post('https://657fb4f26ae0629a3f538905.mockapi.io/notes-app/api/notes', {
        ...props.noteProps,
        id: newId,
        created: Date.now(),
      });

      dispatch(
        add({
          ...props.noteProps,
          id: newId,
          created: Date.now(),
        }),
      );

      dispatch(reset());
      if (props.filter) dispatch(filterNotes(props.filter.split(', ')));
    }

    props.setOpen(false);
  };

  const handleAddTag = (event) => {
    if ((event.key === 'Enter' || event.type === 'click') && event.target.value) {
      const newTags = event.target.value.split(', ');

      props.setNoteProps({
        ...props.noteProps,
        tags: [...new Set([...props.noteProps.tags, ...newTags])],
      });

      event.target.value = '';
    }
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{ position: 'absolute', bottom: '1rem', right: '1rem', bgcolor: 'white' }}
      >
        <AddIcon sx={{ fontSize: '4rem', color: 'black' }} />
      </IconButton>
      <Drawer anchor='bottom' open={props.open} onClose={() => props.setOpen(false)}>
        <Paper
          square
          elevation={7}
          sx={{
            width: '30rem',
            height: '45rem',
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
            <TextField fullWidth variant='outlined' label='Add tags' on onKeyDown={handleAddTag} />
            <Button onClick={handleSubmit} variant='contained'>
              Submit
            </Button>
          </Stack>
        </Paper>
      </Drawer>
    </>
  );
};

export default StickyNoteDrawer;
