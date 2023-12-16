import React, { useState } from 'react';
import './SitckyNote.css';
import { Box, Card, CardContent, containerClasses, Slide, Stack, Typography } from '@mui/material';
import TagChips from '../TagChips/TagChips.jsx';
import StickyNoteButtons from './StickyNoteButtons.jsx';

const StickyNote = ({ props }) => {
  const formatDate = (date) => {
    const dateObj = new Date(date);

    const day = dateObj.getDate() < 10 ? `0${dateObj.getDate()}` : dateObj.getDate();
    const month = dateObj.getMonth() < 10 ? `0${dateObj.getMonth()}` : dateObj.getMonth();
    const hours = dateObj.getHours() < 10 ? `0${dateObj.getHours()}` : dateObj.getHours();
    const minutes = dateObj.getMinutes() < 10 ? `0${dateObj.getMinutes()}` : dateObj.getMinutes();

    return `${day}.${month}.${dateObj.getFullYear()} ${hours}:${minutes}`;
  };

  const [showButtons, setShowButtons] = useState(false);

  return (
    <Card
      sx={{ height: '20rem', width: '20rem', bgcolor: props.color }}
      onMouseOver={() => setShowButtons(true)}
      onMouseOut={() => setShowButtons(false)}
    >
      <CardContent className='sticky-note-content'>
        <Stack
          direction='column'
          justifyContent='space-between'
          alignItems='flex-start'
          sx={{ height: '100%' }}
        >
          <Box sx={{ width: '100%' }}>
            <Stack direction='row' justifyContent='space-between'>
              <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
                ID: {props.id}
              </Typography>
              <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
                {formatDate(props.created)}
              </Typography>
            </Stack>
            <Stack direction='row' justifyContent='space-between'>
              <Box>
                <Typography variant='h5' component='div'>
                  {props.title}
                </Typography>
                <Typography variant='body2'>{props.content}</Typography>
              </Box>
              {showButtons && <StickyNoteButtons />}
            </Stack>
          </Box>
          <TagChips tags={props.tags} color={props.color} />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default StickyNote;
