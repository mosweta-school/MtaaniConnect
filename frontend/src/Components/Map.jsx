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

const redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",

  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",

  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
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
        zoom={13}
        scrollWheelZoom
        className="h-full w-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* USER LOCATION */}
        <Marker
          position={[
            userLocation.lat,
            userLocation.lng,
          ]}
        >
          <Popup>You are here</Popup>
        </Marker>

        {/* EVENT MARKERS */}
        {events
          .filter(
            (event) =>
              event.latitude &&
              event.longitude
          )
          .map((event) => (
            <Marker
              key={event.id}
              position={[
                event.latitude,
                event.longitude,
              ]}
              icon={redIcon}
            >
              <Popup>
                <div>
                  <h2 className="font-bold">
                    {event.title}
                  </h2>

                  <p>{event.locationName}</p>

                  {event.distance && (
                    <p>
                      {event.distance.toFixed(2)} km
                      away
                    </p>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
};

export default Map;