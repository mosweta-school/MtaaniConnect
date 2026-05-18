import React from "react";
import { Link } from "react-router-dom";
import API from "../Services/api";

function EventCard({ event, onEventDeleted }) {
    
    const handleDelete = async () => {
        const confirmDelete = window.confirm(
            `Are you sure you want to delete "${event.title}"?`
        );
        
        if (!confirmDelete) return;
        
        try {
            const token = localStorage.getItem("token");
            
            await API.delete(`/events/${event.id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            
            alert('Event deleted successfully');
            
            if (onEventDeleted) {
                onEventDeleted(event.id);
            }
        } catch (error) {
            console.error('Error deleting event:', error);
            alert(error.response?.data?.message || 'Failed to delete event');
        }
    };
    
    return (
        <section className="shadow-gray-300 border-2 border-gray-200 rounded-3xl m-6">
            <div className="m-6">
                <h2 className="text-sm font-bold text-blue-400">
                    {event.category?.toUpperCase() || "MUSIC"}
                </h2>
                <h2 className="font-bold text-2xl">{event.title}</h2>
                <p className="text-gray-600">{event.description}</p>
            </div>

            <div className="flex m-6 flex-row gap-4">
                <div className="rounded-2xl p-3 border-gray-300 bg-gray-200 flex-1">
                    <h2 className="text-gray-400 text-sm">DATE</h2>
                    <p className="font-bold">{event.date}</p>
                    <p className="text-sm">{event.time}</p>
                </div>

                <div className="bg-gray-200 p-3 border-gray-300 rounded-2xl flex-1">
                    <h2 className="text-gray-400 text-sm">VENUE</h2>
                    <p className="font-bold">{event.locationName || event.location}</p>
                </div>
            </div>

            <div className="rounded-2xl flex flex-row m-3 bg-gray-200 justify-end p-2">
                <Link to={`/edit-event/${event.id}`}>
                    <button className="bg-zinc-300 px-4 py-2 rounded-xl m-1 hover:bg-gray-400">
                        Edit
                    </button>
                </Link>

                <button 
                    className="bg-sky-800 hover:bg-sky-600 rounded-xl m-1 px-4 py-2 text-white"
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </div>
        </section>
    );
}

export default EventCard;