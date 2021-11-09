import React from 'react';
import logo from './logo.svg';
import './App.css';
import Random from './data/Random'; 

function App() {
  return (
    <div className="App">
      <Random min={10} max={50}></Random>
      <Random min={1} max={100}></Random>
      
    </div>
  );
}

export default App;
