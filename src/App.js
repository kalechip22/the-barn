import React, { useState } from 'react';
import './App.css';
// import Signin from './Signin';
import Calendar from './Calendar';
import AggieHouseLogo from './images/AH-logo.png';
import GroupImage from './images/group.png';
import HouseTextImage from './images/house-txt.png';
import FBLogo from './images/fb-txt.png'
import InstagramLogo from './images/instagram-txt.png'
import LinkedLogo from './images/linked-logo.png'
import TikLogo from './images/tik-logo.png'

function App() {
  const [showSignin, setShowSignin] = useState(false);

  const handleSigninClick = () => {
    setShowSignin(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        {!showSignin && (
          <>
          <img src={AggieHouseLogo} className="aggie-house-logo" alt="AH logo" />
          <div className="logos" style={{position: 'absolute', top: '30px', right: '80px'}}>
          <a href="https://www.facebook.com/aggiehouseatucdavis/" target="_blank" rel="noopener noreferrer">
            <img src={FBLogo} className="FB-logo" style={{marginRight: '20px', height: '20px'}} alt="FB logo" />
          </a>

          <a href="https://www.instagram.com/aggiehouseatucdavis/?hl=en" target="_blank" rel="noopener noreferrer">
            <img src={InstagramLogo} className="Instagram-logo" style={{marginRight: '20px', height: '20px'}} alt="Instagram logo" />
          </a>

          <a href="https://www.linkedin.com/company/aggie-house-at-uc-davis/about/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedLogo} className="Linked-logo" style={{marginRight: '20px', height: '20px'}} alt="Linked logo" />
          </a>

          <a href="https://www.tiktok.com/@aggie_house?_t=8jOBwvyuG8E&_r=1" target="_blank" rel="noopener noreferrer">
            <img src={TikLogo} className="Tik-logo" style={{marginRight: '20px', height: '20px'}} alt="Tik logo" />
          </a>
        </div>

            <div id="homepage-text"> 
            <p id="part-txt">
              Be a part of the
            </p>
            <div id="aggie-house-txt">
            <p id="aggie-txt"> AGGIE </p>
            <img src={HouseTextImage} className="house-logo" alt="AH logo" />
            </div>
            <p id="mission-txt">Volunteer and join the community to fight housing insecurity</p>
            </div>
            <button id="login-btn"onClick={handleSigninClick}>LOGIN</button>
            <img src={GroupImage} className="group-image" alt="group png" />
            <div className="calendar">
        </div>
          </>
          
        )}

        {/* {showSignin && <Calendar AggieHouseLogo={AggieHouseLogo} />} */}
        {/* {showSignin && <Calendar AggieHouseLogo={AggieHouseLogo} />} */}
        {showSignin && <Calendar/>}

      </header>
    </div>
  );
}

export default App;
