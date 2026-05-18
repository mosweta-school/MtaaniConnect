import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EventList from "../Components/EventList";
import API from "../Services/api";

function MyEvents() {
    const [myEvents, setMyEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchMyEvents();
    }, []);

    const fetchMyEvents = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem("token");
            
            if (!token) {
                setError("Please login to view your events");
                return;
            }

            const res = await API.get("/events/my-events", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const data = res.data?.events || [];
            setMyEvents(data);
        } catch (err) {
            console.error("Fetch error:", err);
            setError(
                err.response?.data?.message ||
                err.message ||
                "Failed to load your events"
            );
        } finally {
            setLoading(false);
        }
    };

    const handleEventDeleted = (deletedEventId) => {
        setMyEvents(prevEvents => 
            prevEvents.filter(event => event.id !== deletedEventId)
        );
    };

    return (
        <section>
            <div className="bg-sky-800 mt-4 flex flex-col gap-4 p-6">
                <h2 className="text-4xl font-extrabold text-white">My Events</h2>
                
                <Link to="/create-event">
                    <button className="text-xl hover:bg-blue-50 rounded-2xl bg-white px-6 py-2">
                        + Create Event
                    </button>
                </Link>
            </div>

            <div>
                <div className="rounded-3xl border-2 m-6 flex h-44 w-44 hover:bg-gray-300 flex-col justify-between bg-gray-200 border-zinc-400 p-5">
                    <h2 className="text-gray-600 font-semibold">Total Events</h2>
                    <p className="text-4xl font-extrabold text-gray-900">
                        {loading ? "..." : myEvents.length}
                    </p>
                </div>

                {error && (
                    <p className="m-6 text-sm text-red-500">{error}</p>
                )}
            </div>

            <EventList 
                events={myEvents} 
                onEventDeleted={handleEventDeleted}
                loading={loading}
            />
        </section>
    );
}

export default MyEvents;