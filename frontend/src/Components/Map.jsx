import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

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
      <div className="flex h-[500px] items-center justify-center rounded-2xl bg-gray-100">
        Loading map...
      </div>
    );
  }

  return (
    <div className="h-[500px] w-full overflow-hidden rounded-2xl shadow-lg">
      <MapContainer
        center={[userLocation.lat, userLocation.lng]}
        className="h-full w-full"
        scrollWheelZoom
        zoom={13}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[userLocation.lat, userLocation.lng]}>
          <Popup>You are here</Popup>
        </Marker>

        {events.map((event) => (
          <Marker
            key={event._id || `${event.latitude}-${event.longitude}`}
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
