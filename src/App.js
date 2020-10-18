import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import VehiclesDisplay from './components/VehiclesDisplay';
import VehicleButtons from './components/VehicleButtons';
import useVehicles from './hooks/useVehicles';
import './App.css';

function App() {

  const [title, setTitle] = useState("Electric Vehicles");

  const targetRef = useRef(null);

  const vehicles = useVehicles();

  // Update document title
  useEffect(() => {
    document.title = title;
  }, [title]);

  // Update the title on the page
  useEffect(() => {
    targetRef.current.innerHTML = title;
  }, [title]);

  return (
    <div className="App">
      <header className="App-header">
        <p style={{fontWeight: "bold", margin: 0}} ref={targetRef}></p>
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{fontSize: "11px"}}>Click on an item in the list to remove it</p>
        <VehiclesDisplay vehiclesObj={vehicles}></VehiclesDisplay>
        <VehicleButtons vehiclesObj={vehicles}></VehicleButtons>
        <label>Title: <input value={title} style={{marginTop: "8px"}} onChange={evt => setTitle(evt.target.value)}></input></label>
        <button onClick={() => vehicles.add({name: title})}>Add title to list</button>
        <button style={{marginTop: "8px"}} onClick={() => vehicles.clear()}>Clear list</button>
      </header>
    </div>
  );
}

export default App;
