import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import L from "leaflet";

// FIX leaflet default icon issue
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const Map = ({ userLocation, events = [] }) => {
  if (!userLocation) {
    return (
      <div className="h-[500px] flex items-center justify-center bg-gray-100 rounded-2xl">
        Loading map...
      </div>
    );
  }

  return (
    <div className="h-[500px] w-full rounded-2xl overflow-hidden shadow-lg">
      <MapContainer
        center={[userLocation.lat, userLocation.lng]}
        zoom={13}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <TileLayer
          attribution="OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* USER MARKER */}
        <Marker position={[userLocation.lat, userLocation.lng]}>
          <Popup>You are here</Popup>
        </Marker>

        {/* EVENT MARKERS */}
        {events.map((event) => (
          <Marker
            key={event._id}
            position={[event.latitude, event.longitude]}
          >
            <Popup>
              <div>
                <h2 className="font-bold">{event.title}</h2>
                <p>{event.location}</p>
                <p>{event.distance?.toFixed(2)} km away</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;