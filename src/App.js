import React from 'react';
import './App.css';
import Countdown from './Countdown';

function App() {
  return (
    <div className="countdown-container">
      <Countdown date="2020-01-25 15:00:00" text={'Quanto tempo falta pra tattoo? 👽'}/>
    </div>
  );
}

export default App;
