import React from 'react';
import './App.css';
import Countdown from './Countdown';

function App() {
  return (
    <div className="countdown-container">
      <Countdown date="2020-01-25" />
    </div>
  );
}

export default App;
