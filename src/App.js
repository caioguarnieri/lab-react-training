import React from 'react';
import logo from './logo.svg';
import './App.css';
import Random from './data/Random'; 
import IdCard from './data/IdCard'


function App() {
  return (
    <div className="App">
    <IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  img="https://randomuser.me/api/portraits/men/44.jpg"
/>
      <Random min={10} max={50}></Random>
      <Random min={1} max={100}></Random>
      
    </div>
  );
}

export default App;
