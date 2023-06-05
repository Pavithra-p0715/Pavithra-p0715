import React, { useState } from 'react';
import Login from './Login';
import Logout from './Logout';
import ProductList from './ProductList';

const FirstLogin = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (user) => {
    setLoggedIn(true);
    setUsername(user.username);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
  };

  return (
    <>
    <div>
      {loggedIn ? (
                <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>

        <Logout onLogout={handleLogout} username={username} />
        </div>
      ) : (
        <>
   
          <Login onLogin={handleLogin} />
        </>
      )}
    </div>
   
    </>
  );
};

export default FirstLogin;
