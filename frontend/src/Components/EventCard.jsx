function EventCard({ event }){
    function handleEdit(){
        // Implement edit functionality here
        console.log("Edit event:", event.id);
        
    }
    
    function handleDelete(){
        // Implement delete functionality here
        console.log("Delete event:", event.id);
    }

    return(

    <section className="shadow-gray-300 border-2 border-gray-200 rounded-3xl m-6">

            <div className="m-6">
                <h2 className="text-sm font-bold text-blue-400">
                    {event.category?.toUpperCase() || "MUSIC"}
                </h2>
                <h2 className="font-bold text-2xl">{event.title}</h2>
                <p className="text-gray-600">{event.description}</p>

            </div>

             {/*////////////venue and time////////////////////////////*/}
            <div className="flex m-6 flex-row">

                <div className=" rounded-2xl m-3 py-3 border-gray-300 bg-gray-200">
                    <h2 className="text-gray-400 text-sm">DATE</h2>

                    <p className="font-bold">{event.date}</p>
                    <p className="text-sm">{event.time}</p>

                </div>

                <div className="bg-gray-200 m-3 py-3 border-gray-300  rounded-2xl">
                    <h2 className="text-gray-400 text-sm">VENUE</h2>
                    <p className="font-bold">{event.locationName || event.location}</p>
                </div>

            </div>

   {/*////////////////Edit and Delete//////////////////////*/}         


                <div className="rounded-2xl flex  flex-row m-3 bg-gray-200 justify-end">

                    <button className= "bg-zinc-300 flex-2 rounded-xl m-1 hover:bg-gray-400 border-zinc-400"
                    onClick={handleEdit}
                    >Edit</button>

                    <button className="bg-sky-800 hover:bg-sky-600 rounded-xl m-1 py-2 text-white"
                    onClick={handleDelete}
                    >Delete</button>


                </div>




        </section>





    )

}
export default EventCard;
