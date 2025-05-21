import { useState, useEffect } from 'react';

export default function BoatForm({ onSubmit, initialData, onCancel }) {
  const [formData, setFormData] = useState({
    id: null,
    name: '',
    type: '',
    status: '',
    latitude: '',
    longitude: '',
    timestamp: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ id: null, name: '', type: '', status: '', latitude: '', longitude: '', timestamp: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input name="type" placeholder="Type" value={formData.type} onChange={handleChange} required />
      <input name="status" placeholder="Status" value={formData.status} onChange={handleChange} required />
      <input name="latitude" type="number" placeholder="Latitude" value={formData.latitude} onChange={handleChange} required />
      <input name="longitude" type="number" placeholder="Longitude" value={formData.longitude} onChange={handleChange} required />
      <input name="timestamp" type="datetime-local" value={formData.timestamp} onChange={handleChange} required />
      <button type="submit">{formData.id ? 'Update' : 'Create'} Boat</button>
      {onCancel && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
}
