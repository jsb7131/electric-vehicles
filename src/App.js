import React, { useRef, useEffect } from 'react';
import logo from './logo.svg';
import VehiclesDisplay from './components/VehiclesDisplay';
import VehicleButtons from './components/VehicleButtons';
import useVehicles from './hooks/useVehicles';
import useTitle from './hooks/useTitle';
import './App.css';

function App() {

  const title = useTitle();
  const vehicles = useVehicles();
  const targetRef = useRef(null);

  // Update the title at the top of the page
  useEffect(() => {
    targetRef.current.innerHTML = title.current;
  }, [title]);

  return (
    <div className="App">
      <header className="App-header">
        <p style={{fontWeight: "bold", margin: 0}} ref={targetRef}></p>
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{fontSize: "11px"}}>Click on an item in the list to remove it</p>
        <VehiclesDisplay vehiclesObj={vehicles}></VehiclesDisplay>
        <VehicleButtons vehiclesObj={vehicles}></VehicleButtons>
        <label>Title: <input value={title.current} style={{marginTop: "8px"}} onChange={evt => title.update(evt.target.value)}></input></label>
        <button onClick={() => vehicles.add({name: title.current})}>Add title to list</button>
        <button style={{marginTop: "8px"}} onClick={() => vehicles.clear()}>Clear list</button>
      </header>
    </div>
  );
}

export default App;
