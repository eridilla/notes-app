import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import './Header.css';
import Filter from '../Filter/Filter.jsx';
import Sort from '../Sort/Sort.jsx';

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
      <Stack
        direction='row'
        spacing={2}
        alignItems='center'
        sx={{ position: 'absolute', left: '1rem' }}
      >
        <Filter filter={filter} setFilter={setFilter} />
        <Sort />
      </Stack>
    </>
  );
};

export default Header;
