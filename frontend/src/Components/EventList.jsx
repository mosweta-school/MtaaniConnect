import EventCard from './EventCard';
function EventList(){
    return(
       <>

         {/*///////////////////My Event List/////////////////*/}

      <div className="border-gray-300 border-2 m-6 rounded-xl p-4">

        <h2 className="font-bold text-3xl">My Event List</h2>


        {/*///////////////search input and buttton///////*/}
        <div className="mt-4 flex flex-col gap-3 items-stretch">
          <input
          placeholder="Search your events"
          className="h-12 flex-1 rounded-2xl bg-zinc-300 border-2 px-4 border-gray-200"></input>
          <button className="rounded-xl text-white bg-sky-800">Search</button>

          
        </div>
        <div className='m-6'>
           <EventCard />

        </div>



      </div>

       
       
       
       
       
       </>
    )

}
export default EventList;
