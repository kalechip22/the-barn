// Signin.js

import React, { useState } from 'react';

function Signin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = (e) => {
    e.preventDefault();
    // Here you can implement your authentication logic
    console.log('Username:', username);
    console.log('Password:', password);
    // You might want to make an API call here to authenticate the user
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSignin}>
        <label>
          Username/Email:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Signin;
