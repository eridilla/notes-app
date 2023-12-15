import React from 'react';
import './SitckyNote.css';
import { Card, CardContent, Typography } from '@mui/material';

const StickyNote = ({ id, color }) => {
  return (
    <Card sx={{ height: '15rem', width: '15rem', bgcolor: color }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          ID: {id}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant='h5' component='div'>
          benevolent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          adjective
        </Typography>
        <Typography variant='body2'>
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StickyNote;
