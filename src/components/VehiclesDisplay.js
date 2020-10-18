import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 30%;
  height: 210px;
  background-color: black;
  overflow: auto;
`;

// Show "Loading..." on page start, return list of vehicle divs, if list is cleared manually don't display "Loading..."
function VehiclesDisplay(props) {
  return (
      <Container>
        {
          props.vehiclesObj.current.length > 0 && props.vehiclesObj.current !== ""
            ? props.vehiclesObj.current.map(vehicle => {
              return <div className="List-item" key={vehicle.id} onClick={evt => props.vehiclesObj.remove(vehicle.id)}>{vehicle.name}</div>
              })
            : props.vehiclesObj.current === ""
              ? ""
              : "Loading..."
        }
      </Container>
  );
}

export default VehiclesDisplay;
