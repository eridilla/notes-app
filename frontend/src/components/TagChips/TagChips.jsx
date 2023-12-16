import React from 'react';
import { Chip, Stack } from '@mui/material';
import './TagChips.css';

const TagChips = ({ tags, color }) => {
  return (
    <Stack
      className={'tags-container-' + color.split('.')[1]}
      direction='row'
      spacing={1}
      sx={{ width: '100%', overflowX: 'auto', pb: '3px' }}
    >
      {tags.map((tag) => (
        <Chip label={tag} />
      ))}
      {tags.map((tag) => (
        <Chip label={tag} />
      ))}
      {tags.map((tag) => (
        <Chip label={tag} />
      ))}
    </Stack>
  );
};

export default TagChips;
