import EventCard from './EventCard';
import { Link } from 'react-router-dom'; // Add this import

function EventList({ events = [], onEventDeleted, loading = false }) {
    
    const handleEventDeleted = (deletedEventId) => {
        if (onEventDeleted) {
            onEventDeleted(deletedEventId);
        }
    };
    
    return (
        <>
            <div className="border-gray-300 border-2 m-6 rounded-xl p-4">
                <h2 className="font-bold text-3xl mb-4">My Event List</h2>
                
                {loading ? (
                    <div className="flex justify-center items-center p-8">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sky-600"></div>
                        <span className="ml-2 text-gray-500">Loading events...</span>
                    </div>
                ) : (
                    <div className='m-6'>
                        {events.length === 0 ? (
                            <div className="text-center py-8">
                                <p className="text-gray-500 mb-4">
                                    No events found. Create your first event!
                                </p>
                                <Link to="/create-event">
                                    <button className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg">
                                        Create Event
                                    </button>
                                </Link>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {events.map((event) => (
                                    <EventCard
                                        key={event.id || event._id}
                                        event={event}
                                        onEventDeleted={handleEventDeleted}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}

export default EventList;