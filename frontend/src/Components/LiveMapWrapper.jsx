// components/LiveMapWrapper.jsx
import { useEffect, useState } from "react";
import { socket } from "../utils/socket";
import Map from "./Map";

const LiveMapWrapper = ({ userLocation, initialEvents }) => {
  const [events, setEvents] = useState(initialEvents || []);

  useEffect(() => {
    // listen for new events
    socket.on("new-event", (event) => {
      setEvents((prev) => [...prev, event]);
    });

    return () => {
      socket.off("new-event");
    };
  }, []);

  return (
    <Map userLocation={userLocation} events={events} />
  );
};

export default LiveMapWrapper;