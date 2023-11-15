// GoogleAuth.js
import React from 'react';
import axios from 'axios';

const GoogleAuth = () => {
  const handleLogin = async () => {
    try {
      const response = await axios.get('http://localhost:3001/auth/google');
      window.location.href = response.data.redirectUrl;
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
