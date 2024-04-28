import React, { useState } from 'react';
import './App.css';
import Signin from './Signin';
import AggieHouseLogo from './images/AH-logo.png';
import GroupImage from './images/group.png';
import HouseTextImage from './images/house-txt.png';

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
            <img src={GroupImage} className="group-image" alt="group image" />
          </>
        )}

        {showSignin && <Signin AggieHouseLogo={AggieHouseLogo} />}
      </header>
    </div>
  );
}

export default App;
