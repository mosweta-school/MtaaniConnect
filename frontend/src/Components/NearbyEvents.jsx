import { useEffect, useState } from "react";
import API from "../Services/api";
import { getUserLocation } from "../utils/location";
import { calculateDistance } from "../utils/distance";
import Map from "./Map";
import socket from "../utils/socket";

const NearbyEvents = () => {
  const [nearbyEvents, setNearbyEvents] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ================= FETCH EVENTS =================
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const location = await getUserLocation();
        setUserLocation(location);

        const res = await API.get("/events");

        const data = Array.isArray(res.data)
          ? res.data
          : res.data?.events || [];

        const enriched = data
          .filter((event) => event.latitude && event.longitude)
          .map((event) => {
            const distance = calculateDistance(
              location.lat,
              location.lng,
              event.latitude,
              event.longitude
            );

            return { ...event, distance };
          });

        const filtered = enriched.filter(
          (event) => event.distance <= 10
        );

        setNearbyEvents(filtered);
      } catch (err) {
        setError(err.message || "Failed to load events");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // ================= SOCKET (FIXED) =================
  useEffect(() => {
    socket.on("Event-Created", (newEvent) => {
      setNearbyEvents((prev) => [...prev, newEvent]);
    });

    socket.on("Event-Updated", (updatedEvent) => {
      setNearbyEvents((prev) =>
        prev.map((event) =>
          event.id === updatedEvent.id ? updatedEvent : event
        )
      );
    });

    socket.on("Event-Deleted", (deletedId) => {
      setNearbyEvents((prev) =>
        prev.filter((event) => event.id !== deletedId)
      );
    });

    return () => {
      socket.off("Event-Created");
      socket.off("Event-Updated");
      socket.off("Event-Deleted");
    };
  }, []);

  // ================= RENDER (SAFE) =================
  if (loading) {
    return <div className="text-center py-10">Loading nearby events...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="space-y-8">
      {userLocation ? (
        <Map userLocation={userLocation} events={nearbyEvents} />
      ) : (
        <div className="text-center py-10">
          Waiting for location permission...
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {nearbyEvents.length === 0 ? (
          <p className="text-center col-span-full">
            No nearby events found
          </p>
        ) : (
          nearbyEvents.map((event) => (
            <div key={event.id} className="bg-white p-5 rounded-2xl shadow-md">
              <h2 className="text-xl font-bold">{event.title}</h2>
              <p>{event.locationName}</p>
              <p>{event.distance.toFixed(2)} km away</p>
              <p>{event.date}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NearbyEvents;