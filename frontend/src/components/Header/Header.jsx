import React from 'react';
import { Box, Typography } from '@mui/material';
import './Header.css';

const Header = () => {
  return (
    <Box
      className='header-box'
      sx={{
        bgcolor: 'stickynote.yellow',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        boxShadow: 5,
      }}
    >
      <Typography sx={{ fontSize: '3rem' }}>Noted!</Typography>
    </Box>
  );
};

export default Header;
