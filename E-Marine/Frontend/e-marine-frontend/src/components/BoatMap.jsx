import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

export default function BoatMap({ boats }) {
  return (
    <MapContainer center={[45.0, 28.0]} zoom={6} style={{ height: "400px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {boats.map((boat, index) => (
        <Marker key={index} position={[boat.latitude, boat.longitude]}>
          <Popup>
            <strong>{boat.name}</strong><br />
            Type: {boat.type}<br />
            Status: {boat.status}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
