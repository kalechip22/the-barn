// Signin.js
import React, { useState } from 'react';
// import AggieHouseLogo from './images/AH-logo.png'
import FBLogo from './images/fb-txt.png'
import InstagramLogo from './images/instagram-txt.png'
import LinkedLogo from './images/linked-logo.png'
import TikLogo from './images/tik-logo.png'

import './Signin.css';
function Signin({ AggieHouseLogo }) {
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
    <div style = {{backgroundColor: '#5C7E6C'}}>
        <img src={AggieHouseLogo} className="aggie-house-logo" alt="AH logo" />
    <div class = "logos">
        <a href="https://www.facebook.com/aggiehouseatucdavis/" target="_blank" rel="noopener noreferrer">
        <img src={FBLogo} className="FB-logo" alt="FB logo" />
        </a>

        <a href="https://www.instagram.com/aggiehouseatucdavis/?hl=en" target="_blank" rel="noopener noreferrer">
        <img src={InstagramLogo} className="Instagram-logo" alt="Instagram logo" />
        </a>

        <a href="https://www.linkedin.com/company/aggie-house-at-uc-davis/about/" target="_blank" rel="noopener noreferrer">
        <img src={LinkedLogo} className="Linked-logo" alt="Linked logo" />
        </a>

        <a href="https://www.tiktok.com/@aggie_house?_t=8jOBwvyuG8E&_r=1" target="_blank" rel="noopener noreferrer">
        <img src={TikLogo} className="Tik-logo" alt="Tik logo" />
        </a>

    </div>

    <div id="sign-up-box"> 
      <h2>Welcome Back!</h2>
      <form onSubmit={handleSignin}>
        <label>
          Email
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <p> Don't have an account? </p>
        <p> Sign Up </p>
        </div>

        <button type="submit" style = {{backgroundColor: "#DACCBE"}}id="login-btn"> LOGIN</button>
      </form>
      </div>
    </div>
  );
}

export default Signin;
