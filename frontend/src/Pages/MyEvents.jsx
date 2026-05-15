import { useEffect, useState } from "react";
import EventList from "../Components/EventList";
import { Link } from "react-router-dom";
import API from "../Services/api";
import { Events } from "leaflet";



function MyEvents() {

  const [myEvents, setMyEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMyEvents = async () => {
      try {
        const res = await API.get("/events/my-events");

        const data = Array.isArray(res.data)
          ? res.data
          : res.data?.events || [];

        setMyEvents(data);
      } catch (err) {
        setError(err.response?.data?.message || err.message || "Failed to load your events");
      } finally {
        setLoading(false);
      }
    };

    fetchMyEvents();
  }, []);

  const visibleEvents = myEvents.length > 0 ? myEvents : [];
  return (
    <>
    <section>

      <div className="bg-sky-800 mt-4 flex flex-col gap-4 p-6 ">

        <h2 className="text-4xl font-extrabold text-white">My Events</h2>

      <Link to={"/create-event"}>
        <button className="text-xl hover:bg-blue-50 rounded-2xl bg-white" >
          Create Event
        </button>
      </Link>
      </div>

      {/*////Total Number Of Events///*/}

      <div>

        <div className="rounded-3xl border-2 m-6 flex h-44 w-44 hover:bg-gray-300 flex-col justify-between bg-gray-200 border-zinc-400 p-5">
          <h2 className="text-gray-600 font-semibold">Total Events</h2>
          <p className="text-4xl font-extrabold text-gray-900">
            {loading ? "..." : visibleEvents.length}
          </p>

        </div>

        {error && (
          <p className="m-6 text-sm text-red-500">
            {error}
          </p>
        )}


      </div>

      {/*///////////////////My Event List/////////////////*/}
      {/* ✘✘✘✘✘✘✘✘✘✘✘✘✘✘✘✘✘✘✘✘✘✘✘✘✘✘✘✘✘✘✘✘✘✘✘✘✘✘✘✘✘✘✘✘✘✘✘*/}
      <EventList events={myEvents} />

    </section>
    
    
    </>
  )
    
}

export default MyEvents;
