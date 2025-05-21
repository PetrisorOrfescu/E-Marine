import axios from 'axios';

const API_URL = 'http://localhost:8080/api/boats';

export const getBoats = () => axios.get(API_URL);
export const getBoat = (id) => axios.get(`${API_URL}/${id}`);
export const createBoat = (boat) => axios.post(API_URL, boat);
export const updateBoat = (id, boat) => axios.put(`${API_URL}/${id}`, boat);
export const deleteBoat = (id) => axios.delete(`${API_URL}/${id}`);
