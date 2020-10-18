import { useState, useEffect } from 'react';
import { uniqueId } from 'lodash';

// Seeded vehicles
const initialVehicles = [
  {id: uniqueId(), name: "Rivian R1T"},
  {id: uniqueId(), name: "Alta Redshift"},
  {id: uniqueId(), name: "KTM Freeride E-XC"}
];

const useVehicles = () => {

  const [vehicles, setVehicles] = useState([]);

  // Emulate fetching of real data; add seeded vehicles to list
  useEffect(() => {
    setTimeout(() => {
      setVehicles(initialVehicles);
    }, 2000);
  }, []);

  // Add a vehicle to the list
  const addVehicle = (vehicle) => {
    setVehicles([...vehicles, {
      ...vehicle,
      id: uniqueId(),
    }]);
  };

  // Remove a vehicle from the list
  const removeVehicle = (vehicleId) => {
    vehicles.length > 1 ? setVehicles(vehicles.filter(vehicle => vehicle.id !== vehicleId)) : setVehicles("");
  };

  // Remove all items in the list
  // Give it an empty string instead to act as the switch for not displaying "Loading..."
  const clearVehicles = () => setVehicles("");

  return {
    current: vehicles,
    add: addVehicle,
    remove: removeVehicle,
    clear: clearVehicles
  };
};

export default useVehicles;
