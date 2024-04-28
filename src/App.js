import React, { useState } from 'react';
import './App.css';
import Signin from './Signin';

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
          <img src="./images/AH-logo.png" className="aggie-house-logo" alt="AH logo" />

            <p>
              Be a part of the <br />Aggie House
            </p>
            <p>Volunteer and join the community to fight housing insecurity</p>
            <button onClick={handleSigninClick}>Log In</button>
          </>
        )}

        {showSignin && <Signin />}
      </header>
    </div>
  );
}

export default App;
