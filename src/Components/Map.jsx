import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

const Map = ({ userLocation, events }) => {
  return (
    <div className="h-[500px] w-full rounded-2xl overflow-hidden shadow-lg">
      <MapContainer
        center={[
          userLocation.lat,
          userLocation.lng,
        ]}
        zoom={13}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <TileLayer
          attribution="OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          position={[
            userLocation.lat,
            userLocation.lng,
          ]}
        >
          <Popup>You are here</Popup>
        </Marker>

        {events.map((event) => (
          <Marker
            key={event._id}
            position={[
              event.latitude,
              event.longitude,
            ]}
          >
            <Popup>
              <div>
                <h2 className="font-bold">
                  {event.title}
                </h2>

                <p>{event.location}</p>

                <p>
                  {event.distance.toFixed(2)} km
                  away
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;