import React from 'react';
import { Chip, Stack } from '@mui/material';
import './TagChips.css';

const TagChips = ({ props, textDark, editing, setNoteProps }) => {
  const handleDeleteTag = (index) => {
    setNoteProps({ ...props, tags: props.tags.filter((tag, tagIndex) => tagIndex !== index) });
  };

  return (
    <Stack
      className='tags-container'
      direction='row'
      spacing={1}
      sx={{
        width: '100%',
        overflowX: 'auto',
        pb: '3px',
      }}
    >
      {props.tags &&
        props.tags.map((tag, index) => {
          return editing ? (
            <Chip
              key={index}
              onDelete={() => (editing ? handleDeleteTag(index) : null)}
              label={tag}
              sx={{
                bgcolor: textDark ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.08)',
                color: textDark ? 'rgba(0, 0, 0, 0.87)' : 'rgba(255, 255, 255, 0.87)',
              }}
            />
          ) : (
            <Chip
              label={tag}
              sx={{
                bgcolor: textDark ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.08)',
                color: textDark ? 'rgba(0, 0, 0, 0.87)' : 'rgba(255, 255, 255, 0.87)',
              }}
            />
          );
        })}
    </Stack>
  );
};

export default TagChips;
