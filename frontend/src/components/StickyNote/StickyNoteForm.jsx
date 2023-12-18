import React from 'react';
import { TextField } from '@mui/material';

const StickyNoteForm = ({ props, textDark, setNoteProps }) => {
  return (
    <>
      <TextField
        fullWidth
        id='title-textarea'
        label='Title - Max characters: 16'
        variant='outlined'
        size='small'
        value={props.title}
        onChange={(event) => {
          setNoteProps({ ...props, title: event.target.value });
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor:
                props.title.length > 16
                  ? 'rgba(255, 0, 0, 0.23)'
                  : textDark
                    ? 'rgba(0, 0, 0, 0.23)'
                    : 'rgba(255, 255, 255, 0.23)',
            },
            '&:hover fieldset': {
              borderColor:
                props.title.length > 16
                  ? 'rgba(255, 0, 0, 0.5)'
                  : textDark
                    ? 'rgba(0, 0, 0, 0.5)'
                    : 'rgba(255, 255, 255, 0.5)',
            },
          },
          '& .MuiInputBase-input': {
            color:
              props.title.length > 16
                ? 'rgba(255, 0, 0, 0.87)'
                : textDark
                  ? 'rgba(0, 0, 0, 0.87)'
                  : 'rgba(255, 255, 255, 0.87)',
          },
          '& .MuiInputLabel-root': {
            color:
              props.title.length > 16
                ? 'rgba(255, 0, 0, 0.6)'
                : textDark
                  ? 'rgba(0, 0, 0, 0.6)'
                  : 'rgba(255, 255, 255, 0.6)',
          },
        }}
      />
      <TextField
        fullWidth
        multiline
        rows={6}
        id='content-textarea'
        label='Content'
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
          '& .MuiInputLabel-root': {
            color: textDark ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.6)',
          },
        }}
      />
    </>
  );
};

export default StickyNoteForm;
