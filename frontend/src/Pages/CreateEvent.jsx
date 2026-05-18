import { useState, useRef } from 'react';

import {
  MapContainer,
  TileLayer,
} from "react-leaflet";

import LocationPicker from "../Components/LocationPicker";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../context/authContext";




function CreateEvent(){
    const { user, token } = useContext(AuthContext);
    console.log(token)
    
    const[title, setTitle] = useState('');
    const[category, setCategory] = useState('');
    const[description, setDescription] = useState('');
    const[date, setDate] = useState('');
    const[time, setTime] = useState('');
    const[location, setLocation] = useState('');
    const [selectedPosition, setSelectedPosition] = useState(null);
    const[maxAttendees, setMaxAttendees] = useState(0);
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate()
const timeoutRef = useRef(null);
  const searchLocation = async (query) => {
  const token = import.meta.env.VITE_MAPBOX_TOKEN;

  const res = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
      query
    )}.json?access_token=${token}&autocomplete=true&limit=5&country=ke`
  );

  const data = await res.json();
  return data.features;
};

                
    const handleSubmit = async(e)=>{
        // Prevents reload of page on form submission
    e.preventDefault();

    // Validate that all required fields are filled out
    if(!title || !category || !description || !date || !time || !location || !selectedPosition){
        alert('Please fill out all required fields');
        return;
    }
    
    // Validate datatypes
    if(isNaN(maxAttendees)){
        alert('Max Attendees must be a number');
        return;
    }
    
    
    // Stores the table data in an object to be sent to the backend
const eventData = { 
    title, 
    category, 
    description, 
    date, 
    time, 
    locationName: location,
    createdBy: loggedInUser?.id, organizerName: loggedInUser?.name, 
    latitude: selectedPosition?.lat, 
    longitude: selectedPosition?.lng, 
    maxAttendees, 
};
    // Logs the event data to the console for debugging purposes
    console.log(eventData);

    // Sends the event data to the backend to be stored in the database
    await fetch('https://mtaaniconnectbackend-1.onrender.com/api/events', {
        method: 'POST',
        
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(eventData)
    });
    
    alert('Event created successfully!');
setTimeout(() => {
                navigate("/");
                }, 2000);
    setTitle('');
    setCategory('');
    setDescription('');
    setDate('');
    setTime('');
    setLocation('');
    setMaxAttendees(0);
    


    }

  
    return(
        <>
        <section>

            <div className='bg-sky-800'>
                <h2 className=' text-white text-3xl text-center '>Create Event</h2>

            </div>

            <form onSubmit={handleSubmit}>
{/*/////////////////////////////////////title input///////////*/}

                <div className='flex-col m-4 flex'>

                    <label>Event Title</label>

                    <input 
                    placeholder='Whats the event called?'
                    required
                    className='border-2 text-sm py-3 focus:bg-blue-50 border-zinc-400 rounded-xl'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    type='text'
                    ></input>
                </div>

                <div className='flex-col m-4 flex'>

{/*/////////////////////Event Category Selection/////////////////// */}
                    <label>Category</label>
                    <select
                        required
                        className='border-2 border-zinc-400 rounded-xl p-2'
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                        >
                        <option value="" disabled>Select a category</option>
                        <option value="music" >Music</option>
                        <option value="sports">Sports</option>
                        <option value="tech">Tech</option>
                        <option value="fashion">Fashion</option>
                        <option value="art">Art</option>
                    </select>


                </div>
{/*/////////////////////////////////////description input///////////*/}

                <div className='flex m-4 flex-col'>
                    <label>Description</label>
                    
                    <textarea 
                    placeholder='Tell people what to expect....'
                    required
                    className='border-2 focus:bg-blue-50 text-sm py-3 border-zinc-400 rounded-xl'
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    type='text'
                    ></textarea>

                </div>
{/*/////////////////////////////////////date input///////////*/}


                <div className='gap-6 flex m-4 flex-row'>
                    <div className='flex flex-col'>

                        <label>Date</label>

                        <div>

                        <input
                        required
                        className='border focus:bg-blue-50 -2 py-3 rounded-xl border-zinc-400'
                        type='date'
                        onChange={(e) => setDate(e.target.value)}
                        value={date}
                        ></input>


                        </div>

                    </div>

{/*/////////////////////////////////////time input///////////*/}
                    <div className='flex-col flex'>

                         <label>Time</label>

                        <div>

                        <input 
                        className=' py-3  focus:bg-blue-50 border-2 rounded-xl border-zinc-400'
                        type='time'
                        onChange={(e) => setTime(e.target.value)}
                        value={time}
                        >
                        </input>

                         </div>



                    </div>


                </div>

{/*/////////////////////////////////////location input///////////////////////////////*/}
                

                    <div className="flex m-4 flex-col">
                        <label>Search Location</label>

                        <input
  className="focus:bg-blue-50 rounded-xl py-3 border-2 border-zinc-400"
  value={searchQuery}
  onChange={(e) => {
    const value = e.target.value;
    setSearchQuery(value);

    // clear previous timer
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // if too short → reset suggestions
    if (value.length < 3) {
      setSuggestions([]);
      return;
    }

    // debounce API call
    timeoutRef.current = setTimeout(async () => {
      const results = await searchLocation(value);
      setSuggestions(results);
    }, 400);
  }}
  placeholder="Search for a place..."
/>
                        {suggestions.length > 0 && (
                        <div className="bg-white border rounded-xl shadow-md max-h-48 overflow-auto">
                            {suggestions.map((place) => (
  <div
    key={place.id}
    className="p-2 hover:bg-gray-100 cursor-pointer"
    onClick={() => {
      const [lng, lat] = place.center;

      setSelectedPosition({ lat, lng });
      setLocation(place.place_name);
      setSearchQuery(place.place_name);
      setSuggestions([]);
    }}
  >
    {place.place_name}
  </div>
))}
                        </div>
                        )}


                </div>
                
                <div className="m-4">

                <label className="mb-2 block">
                    Select Event Location on Map
                </label>

                <div className="h-[300px] overflow-hidden rounded-2xl">

                    <MapContainer
                        className="h-full w-full"
                        center={
                            selectedPosition
                            ? [selectedPosition.lat, selectedPosition.lng]
                            : [-1.286389, 36.817223]
                        }
                        zoom={13}
                        >

                    <TileLayer
                        attribution="&copy; OpenStreetMap contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    <LocationPicker
                        selectedPosition={selectedPosition}
                        setSelectedPosition={setSelectedPosition}
                    />

                    </MapContainer>
                </div>

                {selectedPosition && (
                    <p className="mt-2 text-sm text-gray-600">
                    Selected Coordinates:
                    {" "}
                    {selectedPosition.lat.toFixed(5)},
                    {" "}
                    {selectedPosition.lng.toFixed(5)}
                    </p>
                )}
                </div>

{/*///////////////////////////attendees input/////////////*/}

                <div className='flex m-4 flex-col'>

                    <label>Max Attendees(Optional)</label>
                    <input 
                    placeholder='Leave blank for unlimited'
                    className='rounded-xl focus:bg-blue-50 py-3 text-sm border-2 border-zinc-400'
                    type='number'     
                    onChange={(e) => setMaxAttendees(e.target.value)}
                    value={maxAttendees}
                    ></input>


                </div>

                {/*////////////////////button submission///////////////*/}

                <div className='flex justify-center mt-2'>
                    <button type='submit' className='bg-sky-600 hover:bg-sky-800 text-white py-3 px-6 rounded-xl font-medium text-sm'
                     
                    >
                        Publish Event
                    </button>
                </div>





                </form>









            
        </section>
        
        
        
        
        
        
        
        
        
        
        </>
    )

}
export default CreateEvent;
