import React, { useEffect, useMemo, useState } from 'react';
import './SitckyNote.css';
import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import TagChips from '../TagChips/TagChips.jsx';
import StickyNoteButtons from './StickyNoteButtons.jsx';
import StickyNoteForm from './StickyNoteForm.jsx';

const StickyNote = ({ props, editing = false, setNoteProps, handleEdit }) => {
  const date = useMemo(() => {
    if (!props.created) return '';
    const dateObj = new Date(props.created);

    const day = dateObj.getDate() < 10 ? `0${dateObj.getDate()}` : dateObj.getDate();
    const month =
      dateObj.getMonth() + 1 < 10 ? `0${dateObj.getMonth() + 1}` : dateObj.getMonth() + 1;
    const hours = dateObj.getHours() < 10 ? `0${dateObj.getHours()}` : dateObj.getHours();
    const minutes = dateObj.getMinutes() < 10 ? `0${dateObj.getMinutes()}` : dateObj.getMinutes();

    return `${day}.${month}.${dateObj.getFullYear()} ${hours}:${minutes}`;
  }, [props.created]);

  const [showButtons, setShowButtons] = useState(false);
  const [textDark, setTextDark] = useState(true);

  useEffect(() => {
    if (!props.color.includes('#')) {
      setTextDark(true);
      return;
    }

    let r = parseInt(props.color.slice(1, 3), 16);
    let g = parseInt(props.color.slice(3, 5), 16);
    let b = parseInt(props.color.slice(5, 7), 16);

    let luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    luminance > 0.35 ? setTextDark(true) : setTextDark(false);
  }, [props.color]);

  return (
    <Card
      sx={{ height: '20rem', width: '20rem', bgcolor: props.color }}
      onMouseOver={() => setShowButtons(true)}
      onMouseOut={() => setShowButtons(false)}
    >
      <CardContent
        className='sticky-note-content'
        sx={{ color: textDark ? 'rgba(0, 0, 0, 0.87)' : 'rgba(255, 255, 255, 0.87)' }}
      >
        <Stack
          direction='column'
          justifyContent='space-between'
          alignItems='flex-start'
          sx={{ height: '100%' }}
        >
          <Box sx={{ width: '100%' }}>
            <Stack direction='row' justifyContent='space-between'>
              <Typography
                sx={{ fontSize: 14 }}
                color={textDark ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.6)'}
                gutterBottom
              >
                ID: {props.id}
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color={textDark ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.6)'}
                gutterBottom
              >
                {date}
              </Typography>
            </Stack>
            <Stack direction='row' justifyContent='space-between'>
              <Box>
                {editing ? (
                  <StickyNoteForm props={props} textDark={textDark} setNoteProps={setNoteProps} />
                ) : (
                  <>
                    <Typography variant='h5' component='div'>
                      {props.title}
                    </Typography>
                    <Typography variant='body2'>{props.content}</Typography>
                  </>
                )}
              </Box>
              {showButtons && !editing && (
                <StickyNoteButtons props={props} textDark={textDark} handleEdit={handleEdit} />
              )}
            </Stack>
          </Box>
          <TagChips
            props={props}
            textDark={textDark}
            editing={editing}
            setNoteProps={setNoteProps}
          />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default StickyNote;
