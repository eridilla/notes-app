import React, { useState } from 'react';
import { IconButton, Paper, Popover, Radio, Stack } from '@mui/material';
import { ColorPicker } from 'primereact/colorpicker';

const ColorSelect = ({ selectedColor, handleColorChange }) => {
  const colors = [
    'stickynote.yellow',
    'stickynote.green',
    'stickynote.cyan',
    'stickynote.pink',
    'stickynote.purple',
  ];

  const handleRadioClick = (event) => {
    handleColorChange(event.target.value);
  };

  const radioProps = (item) => ({
    checked: selectedColor === item,
    onChange: handleRadioClick,
    value: item,
    name: 'color-radio-button',
    inputProps: { 'aria-label': item },
    size: 'large',
  });

  const [color, setColor] = useState(selectedColor);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Paper elevation={0} sx={{ bgcolor: '#2e2e2e' }}>
      <Stack
        direction='column'
        justifyContent='space-evenly'
        alignItems='center'
        sx={{ height: '100%' }}
      >
        {colors.map((color) => (
          <Radio
            {...radioProps(color)}
            sx={{
              color: color,
              '&.Mui-checked': {
                color: color,
              },
            }}
          />
        ))}
        <IconButton
          onClick={handleClick}
          sx={{
            mb: '0.5rem',
            mt: '0.5rem',
            border: 1,
            borderColor: 'white',
            bgcolor: color,
            '&:hover': { bgcolor: color },
          }}
          size='large'
        />
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
          <ColorPicker
            inline
            format='hex'
            value={color}
            onChange={(e) => {
              setColor(`#${e.value}`);
              handleColorChange(`#${e.value}`);
            }}
          />
        </Popover>
      </Stack>
    </Paper>
  );
};

export default ColorSelect;
