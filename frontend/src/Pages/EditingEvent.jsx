import { useEffect, useState } from 'react';
import {
  MapContainer,
  TileLayer,
} from "react-leaflet";
import { Link , useParams} from 'react-router-dom';

import LocationPicker from "../Components/LocationPicker";

function EditEvent(){
    const { id } = useParams();
    
    const[title, setTitle] = useState('');
    const[category, setCategory] = useState('');
    const[description, setDescription] = useState('');
    const[date, setDate] = useState('');
    const[time, setTime] = useState('');
    const[location, setLocation] = useState('');
    const[selectedPosition, setSelectedPosition] = useState(null);
    const[maxAttendees, setMaxAttendees] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:8000/events/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.json())
    .then(data => {
        setTitle(data.title);
        setCategory(data.category);
        setDescription(data.description);
        setDate(data.date);
        setTime(data.time);
        setLocation(data.locationName || data.location);
        setMaxAttendees(data.maxAttendees || 0);
        if (data.latitude && data.longitude) {
            setSelectedPosition({ lat: data.latitude, lng: data.longitude });
        }
    });
    }, [id]);
    
// console.log(id);

    const loggedInUser = JSON.parse(localStorage.getItem("user"));

    const handleSubmit = async(e)=>{
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
    
    // Prevents reload of page on form submission
    e.preventDefault();

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
    await fetch(`http://localhost:8000/events/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(eventData)
    });
    
    alert('Event updated successfully!');
    }

  
    return(
        <>
        <section>

            <div className='bg-sky-800'>
                <h2 className=' text-white text-3xl text-center '>Edit Event</h2>

            </div>

            <form>
{/*/////////////////////////////////////title input///////////*/}

                <div className='flex-col m-4 flex'>

                    <label>Event Title</label>

                    <input 
                    placeholder={title}
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

                    className='border-2  border-zinc-400 rounded-xl p-2'
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
                    placeholder={description}
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
                        placeholder={date}
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
                        placeholder={time}
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
                <div className='flex m-4 flex-col'>
                    <label>Location</label>

                    <input className='focus:bg-blue-50 rounded-xl py-3 border-2 border-zinc-400' 
                    onChange={(e) => setLocation(e.target.value)}
                    value={location}
                    type='text'
                    placeholder={location}
                    ></input>

                </div>
                
                <div className="m-4">

                <label className="mb-2 block">
                    Select Event Location on Map
                </label>

                <div className="h-[300px] overflow-hidden rounded-2xl">

                    <MapContainer
                    center={[-1.286389, 36.817223]}
                    zoom={13}
                    scrollWheelZoom
                    className="h-full w-full"
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
                    <button className='bg-sky-600 hover:bg-sky-800 text-white py-3 px-6 rounded-xl font-medium text-sm'
                    onClick={handleSubmit}
                    >
                        Update Event
                    </button>
                </div>





                </form>









            
        </section>
        
        
        
        
        
        
        
        
        
        
        </>
    )


}
export default EditEvent;
