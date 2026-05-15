import EventCard from './EventCard';

function EventList({ events = [] }){
    // const visibleEvents = events.length > 0 ? events : [];
    
    return(
       <>

         {/*///////////////////My Event List/////////////////*/}

      <div className="border-gray-300 border-2 m-6 rounded-xl p-4">

        <h2 className="font-bold text-3xl">My Event List</h2>

        <div className='m-6'>
          {events.length === 0 ? (
            <p className="text-center text-gray-500">
              No events found. Create your first event!
            </p>
          ) : (
            events.map((event) => (
              <EventCard
                key={event.id || event._id}
                event={event}
              />
            ))
          )}

        </div>

      </div> 
       
       </>
    )

}
export default EventList;
