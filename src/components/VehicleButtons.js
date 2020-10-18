import React from 'react';

function VehicleButtons(props) {
  return (
      <div>
        <label>Add: </label>
        <button onClick={() => props.vehiclesObj.add({name: "Rivian R1T"})}>Rivian R1T</button>
        <button onClick={() => props.vehiclesObj.add({name: "Alta Redshift"})}>Alta Redshift</button>
        <button onClick={() => props.vehiclesObj.add({name: "KTM Freeride E-XC"})}>KTM Freeride E-XC</button>
        <button onClick={() => props.vehiclesObj.add({name: "Pininfarina Battista"})}>Pininfarina Battista</button>
        <button onClick={() => props.vehiclesObj.add({name: "Lotus Evija"})}>Lotus Evija</button>
        <button onClick={() => props.vehiclesObj.add({name: "Rimac C_Two"})}>Rimac C_Two</button>
        <button onClick={() => props.vehiclesObj.add({name: "Tesla Roadster"})}>Tesla Roadster</button>
        <button onClick={() => props.vehiclesObj.add({name: "Aspark Owl"})}>Aspark Owl</button>
      </div>
  );
}

export default VehicleButtons;
