import { useEffect, useState } from 'react';
import { getBoats, deleteBoat, updateBoat } from '../services/BoatService';

export default function BoatList() {
  const [boats, setBoats] = useState([]);

  const fetchData = async () => {
    const res = await getBoats();
    setBoats(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Boat List</h2>
      <ul>
        {boats.map((boat) => (
          <li
            key={boat.id}
            className="flex justify-between items-center border-b py-1"
          >
            <span>
              {boat.name} ({boat.type}) - {boat.status}
            </span>
            <button onClick={() => {deleteBoat(boat.id).then(fetchData);}}className="text-red-500">Delete</button>
            <button onClick={() => {updateBoat(boat.id, boat).then(fetchData);}}className="text-red-500">Update</button>
            
          </li>
        ))}
      </ul>
    </div>
  );
}
