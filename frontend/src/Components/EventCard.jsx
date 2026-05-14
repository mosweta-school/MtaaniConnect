function EventCard(){
    return(

    <section className="shadow-gray-300 border-2 border-gray-200 rounded-3xl m-6">

            <div className="m-6">
                <h2 className="text-sm font-bold text-blue-400">MUSIC</h2>
                <h2 className="font-bold text-2xl">Deos Day</h2>
                <p className="text-gray-600">Sherehe Bila Hasira</p>

            </div>

             {/*////////////venue and time////////////////////////////*/}
            <div className="flex m-6 flex-row">

                <div className=" rounded-2xl m-3 py-3 border-gray-300 bg-gray-200">
                    <h2 className="text-gray-400 text-sm">DATE</h2>

                    <p className="font-bold">12th December 2026</p>
                    <p className="text-sm">6:00</p>

                </div>

                <div className="bg-gray-200 m-3 py-3 border-gray-300  rounded-2xl">
                    <h2 className="text-gray-400 text-sm">VENUE</h2>
                    <p className="font-bold">Museum</p>
                </div>

            </div>

   {/*////////////////Edit and Delete//////////////////////*/}         


                <div className="rounded-2xl flex  flex-row m-3 bg-gray-200 justify-end">

                    <button className= "bg-zinc-300 flex-2 rounded-xl m-1 border-zinc-400">Edit</button>

                    <button className="bg-blue-400 rounded-xl m-1 py-2 text-white">Delete</button>


                </div>




        </section>





    )

}
export default EventCard;
