
import NearbyEvents from "../Components/NearbyEvents";
import Mtaani from "../assets/Mtaan6.PNG";
import community from "../assets/community.jpg";
import { useEffect, useState, useContext } from "react";
import API from "../Services/api";
import { AuthContext } from "../context/authContext";
import {Link} from "react-router-dom"
import EventModal from "../Components/EventModal";

function Home() {
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState("")
    const [events, setEvents] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [searchTerm, setSearchTerm] = useState("")
    const { user} = useContext(AuthContext);
    const [selectedEvent, setSelectedEvent] = useState(null);


      useEffect(() => {
        const fetchEvents = async () => {
          try {

    
            const res = await API.get("/events");
    
            const data = Array.isArray(res.data)
              ? res.data
              : res.data?.events || [];
    
            setEvents(data)
          } catch (err) {
            setError(err.message || "Failed to load events");
          } finally {
            setLoading(false);
          }
        };
    
        fetchEvents();
      }, []);
    
      if (loading) {
        return (
          <div className="text-center py-10">
            Loading nearby events...
          </div>
        );
      }
    
      if (error) {
        return (
          <div className="text-red-500 text-center">
            {error}
          </div>
        );
      }
      const filteredEvents = events.filter((event) => {

  // SEARCH FILTER
  const matchesSearch =
    event.title
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase()) ||
    event.description
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase()) ||
    event.location
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());

  // CATEGORY FILTER
  const matchesCategory =
    selectedCategory === "All" ||
    event.category?.toLowerCase() ===
      selectedCategory.toLowerCase();

  return matchesSearch && matchesCategory;
});

  return (
    <div className="min-h-screen bg-gray-50">

                  {/* NOT LOGGED IN */}
          {!user && (
            <>
{/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>

            <img
              src={Mtaani}
              alt="MtaaniConnect"
              className="w-44 md:w-56 object-contain mb-4"
            />

            <p className="text-blue-500 font-medium mb-4">
              Discover events near you
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Connecting Communities Through Local Events
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Discover concerts, hackathons, sports events,
              fashion shows, and social gatherings happening
              around your location in real time.
            </p>

            <div className="flex flex-wrap gap-4">

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-semibold shadow-md transition">
                <Link to={"/login"}>
                Explore Events
                </Link>
                
              </button>

              

            </div>
          </div>

          {/* RIGHT */}
          <div>
            <img
              src={community}
              alt="Community"
              className="rounded-3xl shadow-2xl w-full object-cover"
            />
          </div>

        </div>
      </section>
            </>
          )}


      

                {user && (
                    <>
                    
      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="mb-8">

          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Nearby Events
          </h2>

          <p className="text-gray-600">
            Discover events happening close to your location.
          </p>

        </div>

        <NearbyEvents />

      </section>

      {/* SEARCH + FILTER */}
      <section className="max-w-7xl mx-auto px-6 py-8">

        {/* SEARCH */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">

          <input
            type="search"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 border-2 border-gray-300 rounded-2xl px-5 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          <button className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-2xl font-semibold">
            Search
          </button>

        </div>

        {/* CATEGORY FILTERS */}
                <div className="flex flex-wrap gap-3">

                {[
                    "All",
                    "Tech",
                    "Sports",
                    "Music",
                    "Fashion",
                    "Art",
                ].map((category) => (

                    <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-5 py-2 rounded-2xl transition text-white

                        ${
                        selectedCategory === category
                            ? "bg-sky-800"
                            : "bg-sky-600 hover:bg-sky-700"
                        }
                    `}
                    >
                    {category}
                    </button>

                ))}

                </div>

      </section>
                    
      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-bold text-gray-900">
            Featured Events
          </h2>

          <button className="text-blue-600 font-medium hover:underline">
            View All
          </button>

        </div>

        {/* EVENT CARDS */}
        
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

  {events.length === 0 ? (

    <p className="text-gray-500">
      No matching events found
    </p>

  ) : (

    filteredEvents.map((event) => (

      <div
        key={event.id}
        className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition duration-300"
      >

        <div className="h-48 bg-gray-200"></div>

        <div className="p-6">

          <div className="flex justify-between items-center mb-3">

            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
              {event.category}
            </span>

            <span className="text-sm text-gray-500">

              {event.distance
                ? `${event.distance.toFixed(2)} km away`
                : "Nearby"}

            </span>

          </div>

          <h3 className="text-xl font-bold mb-3">
            {event.title}
          </h3>

          <p className="text-gray-600 mb-4">
            {event.description}
          </p>

          <div className="flex justify-between items-center">

            <span className="text-sm text-gray-500">
              {event.date}
            </span>

            <button
            onClick={() => setSelectedEvent(event)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm"
            >
            View Event
            </button>

          </div>

        </div>

      </div>

    ))

  )}

</div>



      </section>
        </>
            
          )}

      {/* EVENT MODAL */}
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
          user={user}
        />
      )}

    </div>
    
  );
}

export default Home;

