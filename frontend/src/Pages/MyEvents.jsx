import { Link } from "react-router-dom";
import EventList from "../Components/EventList";



function MyEvents() {
  return (
    <>
    <section>

      <div className="bg-sky-800 mt-4 flex flex-col gap-4 p-6 ">

        <h2 className="text-4xl font-extrabold text-white">My Events</h2>

        <button className="text-bg-sky-800 rounded-2xl bg-white">Create Event</button>

        

      </div>

      {/*////Total Number Of Events///*/}

      <div>

        <div className="rounded-3xl border-2 m-6 flex h-44 w-44 flex-col justify-between bg-gray-200 border-zinc-400 p-5">
          <h2 className="text-gray-600 font-semibold">Total Events</h2>
          <p className="text-4xl font-extrabold text-gray-900">12</p>

        </div>


      </div>

      {/*///////////////////My Event List/////////////////*/}

      <EventList />





    








    </section>
    
    
    </>
  )
    
}

export default MyEvents;
