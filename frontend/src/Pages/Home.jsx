import React from 'react';
import EventList from '../Components/EventList';

function Home(){
    return(
        <>

    <section>

         <div className='place-items-center'>

                    <h1 className='font-extrabold text-3xl'>MtaaniConnect</h1>
                    <h2 className='text-blue-300 '>Discover events near you</h2>

        </div>


{/*////////////////////////////////////////////Navigation Panel////////////////////////////////////////////////////////*/}
      
        <nav className='bg-sky-800  flex gap-100 flex-row py-6'>

            <h2 className=' text-white hover:underline m-1 font-bold'>Home</h2>

            <h2 className='font-bold hover:underline text-white '>Create Event</h2>

            <h2 className='font-bold hover:underline text-white'>Profile</h2>


        </nav>

{/*//////////////////////////////////////////////////Search Bar////////////////////////////////////////////////*/}
        <div>
            <form>

                <div>


                    <input
                    placeholder='Search'
                    type='search'
                    className='border-2 px-100 mb-10 shadow-2xl  border-zinc-400 rounded-xl'>
                    
                    </input>

                    <button className='bg-sky-600 py-1 px-2 rounded-xl text-white hover:bg-sky-800 m-4'>Search</button>

                </div>

            </form>

        </div>


        <div>


        </div>
{/*////////////////////////////////////////Category Panel//////////////////////////////////////////////////////*/}

        <div className='flex  gap-50 flex-cols'>

            <button className=' text-white bg-sky-600 rounded-xl py-1 px-3 hover:bg-sky-800 '>All</button>
            <button className=' text-white bg-sky-600 py-1 px-3 hover:bg-sky-800 rounded-xl'>Tech</button>
            <button className='text-white rounded-xl py-1 px-1 hover:bg-sky-800 bg-sky-600'>Sports</button>
            <button className=' text-white rounded-xl py-1 px-3 hover:bg-sky-800 bg-sky-600'>Music</button>
            <button className='text-white rounded-xl py-1 px-3 hover:bg-sky-800 bg-sky-600'>Fashion</button>



        </div>

{/*/////////////////////////////////////////////////Event Cards//////////////////////////////////////////////*/}

        <div className='border-bg-zinc border-2 py-46 m-6 overflow-auto rounded-xl shadow-2xl '>
            
            <h2 className='text-xl font-bold'>Events</h2>

        </div>

/



    </section>
        
        
        
        
        </>
        
    )

}
export default Home;