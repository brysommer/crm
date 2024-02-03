import React from 'react';
import Button from '@mui/material/Button';

const BuyButton = ({ children, color, disabled, size, sx, variant }) => {
  const buttonStyles = {
    border: '1px solid #009be5', // Blue border
    borderRadius: '10px', 
    ...sx, // Merge with additional styles provided by the parent component
  };

  return (
    <div style={{ border: '1px solid #009be5', borderRadius: '10px', display: 'inline-block' }}>
      <Button
        color={color}
        disabled={disabled}
        size={size}
        sx={buttonStyles}
        variant={variant}
      >
        {children}
      </Button>
    </div>
  );
};

export default BuyButton;
