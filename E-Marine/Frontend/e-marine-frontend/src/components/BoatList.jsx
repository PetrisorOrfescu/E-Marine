import React from 'react';

export default function BoatList({ boats, onEdit, onDelete }) {
  console.log('Boats passed to BoatList:', boats); // Debug line

  return (
    <div>
      <h2>Boat List</h2>
      <ul>
        {boats.map((boat) => (
          <li key={boat.id} style={{ marginBottom: '0.5rem' }}>
            <span>
              <b>{boat.name}</b> ({boat.type}) - {boat.status} | Lat: {boat.latitude}, Lng: {boat.longitude} | {boat.timestamp}
            </span>
            <button onClick={() => onEdit(boat)} style={{ marginLeft: '1rem' }}>Edit</button>
            <button onClick={() => onDelete(boat.id)} style={{ marginLeft: '0.5rem' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
