// GoogleAuth.js
import React from 'react';
import axios from 'axios';

const GoogleAuth = () => {
  const handleLogin = async () => {
    try {
      // const response = await fetch('http://localhost:3001/auth/google')
      
      // console.log("here is the response",response)
      // window.location.href = response.data.redirectUrl;
      window.open(
        `http://localhost:3001/auth/google/callback`,
        "_self"
      );
    } catch (error) {
      console.error('Google OAuth error:', error);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
};

export default GoogleAuth;
