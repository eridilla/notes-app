import React from 'react';
import { TextField } from '@mui/material';

const StickyNoteForm = ({ props, textDark, setNoteProps }) => {
  return (
    <>
      <TextField
        fullWidth
        id='title-textarea'
        placeholder='Title'
        variant='outlined'
        size='small'
        value={props.title}
        onChange={(event) => {
          setNoteProps({ ...props, title: event.target.value });
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: textDark ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)',
            },
            '&:hover fieldset': {
              borderColor: textDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)', // Change the outline color on hover
            },
          },
          '& .MuiInputBase-input': {
            color: textDark ? 'rgba(0, 0, 0, 0.87)' : 'rgba(255, 255, 255, 0.87)',
          },
        }}
      />
      <TextField
        fullWidth
        multiline
        rows={6}
        id='content-textarea'
        placeholder='Content'
        variant='outlined'
        size='small'
        value={props.content}
        onChange={(event) => {
          setNoteProps({ ...props, content: event.target.value });
        }}
        sx={{
          mt: '0.5rem',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: textDark ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)',
            },
            '&:hover fieldset': {
              borderColor: textDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)', // Change the outline color on hover
            },
          },
          '& .MuiInputBase-input': {
            color: textDark ? 'rgba(0, 0, 0, 0.87)' : 'rgba(255, 255, 255, 0.87)',
          },
        }}
      />
    </>
  );
};

export default StickyNoteForm;
