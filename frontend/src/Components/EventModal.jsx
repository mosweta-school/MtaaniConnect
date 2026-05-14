import { X, MapPin, Calendar, Clock, Users } from "lucide-react";

function EventModal({ event, onClose, user }) {
  if (!event) return null;

  const handleDirections = () => {
    window.open(
      `https://www.google.com/maps?q=${event.latitude},${event.longitude}`,
      "_blank"
    );
  };

  const handleJoinEvent = () => {
    alert(`Joined ${event.title}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">

      {/* MODAL CARD */}
      <div className="relative w-full max-w-2xl rounded-3xl bg-white shadow-2xl overflow-hidden animate-fadeIn">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-white p-2 shadow hover:bg-gray-100"
        >
          <X size={20} />
        </button>

        {/* IMAGE */}
        <div className="h-64 bg-gray-200">
          {event.image ? (
            <img
              src={event.image}
              alt={event.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-gray-500">
              Event Image
            </div>
          )}
        </div>

        {/* CONTENT */}
        <div className="p-6">

          {/* CATEGORY */}
          <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
            {event.category}
          </span>

          {/* TITLE */}
          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            {event.title}
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-4 text-gray-600 leading-relaxed">
            {event.description}
          </p>

          {/* DETAILS */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2">

            <div className="flex items-center gap-3">
              <Calendar className="text-blue-600" size={20} />
              <span>{event.date}</span>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="text-blue-600" size={20} />
              <span>{event.time}</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-red-500" size={20} />
              <span>{event.locationName}</span>
            </div>

            <div className="flex items-center gap-3">
              <Users className="text-green-600" size={20} />
              <span>
                {event.attendees?.length || 0} attending
              </span>
            </div>

          </div>

          {/* ACTION BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4">

            <button
              onClick={handleJoinEvent}
              className="rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition"
            >
              Join Event
            </button>

            <button
              onClick={handleDirections}
              className="rounded-2xl border border-blue-600 px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition"
            >
              Get Directions
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default EventModal;