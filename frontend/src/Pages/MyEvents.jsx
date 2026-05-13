function MyEvents(){
    return(
        <>
        <section>

            <div className=''>

                <h2 className='font-bold text-3xl'>My Events</h2>

            </div>

{/*//////////////////////////////////////////////Event Cards/////////////////////////////////////////////*/}

            <div className='shadow-2xl  border-2 m-4 rounded-2xl border-zinc-400 ' >

                <h1 className='text-3xl'>Title</h1>
                
                <div>


                <h2 className='font-bold'>Description</h2>
                <p>Hi my name is David Kamau </p>


                </div>

                

                <div flex flex-row>

                    <button className='rounded-xl py-1 mr-5 hover:bg-sky-800 bg-sky-600 text-white'>Delete</button>
                    <button className='rounded-xl py-1 hover:bg-sky-800 bg-sky-600 text-white'>Update</button>


                </div>

            </div>








        </section>


        
        
        
        
        
        
         </>
        
    )

}
export default MyEvents;
