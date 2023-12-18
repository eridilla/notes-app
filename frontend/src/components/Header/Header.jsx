import React from 'react';
import { Box, Typography } from '@mui/material';
import './Header.css';
import Filter from '../Filter/Filter.jsx';

const Header = ({ filter, setFilter }) => {
  return (
    <>
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
      <Filter filter={filter} setFilter={setFilter} />
    </>
  );
};

export default Header;
