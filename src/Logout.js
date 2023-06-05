import React from 'react';
import { Button } from '@mui/material';
import ProductList from './ProductList';

const Logout = ({ onLogout }) => {
    
  const handleLogout = () => {
    onLogout();
  };

  return (
    <div>
 

      <Button variant="contained" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Logout;
