import { useState, useEffect } from 'react';
import BoatForm from '../components/BoatForm';
import BoatList from '../components/BoatList';
import BoatMap from '../components/BoatMap';
import {
  getBoats,
  createBoat,
  updateBoat,
  deleteBoat,
} from '../services/BoatService';

export default function Dashboard() {
  const [boats, setBoats] = useState([]);
  const [selectedBoat, setSelectedBoat] = useState(null);

  const fetchBoats = async () => {
    try {
      const response = await getBoats();
      setBoats(response.data);
    } catch (err) {
      console.error('Failed to fetch boats:', err);
    }
  };

  useEffect(() => {
    fetchBoats();
  }, []);

  const handleCreate = async (boat) => {
    try {
      await createBoat(boat);
      fetchBoats();
    } catch (err) {
      console.error('Error creating boat:', err);
    }
  };

  const handleUpdate = async (boat) => {
    try {
      await updateBoat(boat.id, boat);
      fetchBoats();
      setSelectedBoat(null);
    } catch (err) {
      console.error('Error updating boat:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteBoat(id);
      fetchBoats();
    } catch (err) {
      console.error('Error deleting boat:', err);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🚤 Boat Monitoring Dashboard</h1>
      <BoatForm
        onSubmit={selectedBoat ? handleUpdate : handleCreate}
        initialData={selectedBoat}
        onCancel={() => setSelectedBoat(null)}
      />
      <BoatList
        boats={boats}
        onEdit={setSelectedBoat}
        onDelete={handleDelete}
      />
      <BoatMap boats={boats} />
    </div>
  );
}
