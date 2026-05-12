import React from 'react';

function CreateEvent(){
    return(
        <>
        <section>

            <div>
                <h2 className='text-2xl text-center '>Create Event</h2>

            </div>

            <form>

                <div className='flex-col m-4 flex'>

                    <label>Event Title</label>

                    <input 
                    placeholder='Whats the event called?'
                    required
                    className='border-2 text-sm py-3 border-zinc-400 rounded-xl'></input>

                </div>

                <div className='flex-col m-4 flex'>

                    <label>Category</label>
                    <select
                    required
                    defaultValue=""
                    className='border-2 border-zinc-400 rounded-xl p-2'
                    >
                        <option value="" disabled>Select a category</option>
                        <option value="music">Music</option>
                        <option value="sports">Sports</option>
                        <option value="tech">Tech</option>
                        <option value="fashion">Fashion</option>
                        <option value="art">Art</option>
                    </select>


                </div>

                <div className='flex m-4 flex-col'>
                    <label>Description</label>
                    
                    <textarea 
                    placeholder='Tell people what to expect....'
                    required
                    className='border-2 text-sm py-3 border-zinc-400 rounded-xl'></textarea>

                </div>

                <div className='gap-6 flex m-4 flex-row'>
                    <div className='flex flex-col'>

                        <label>Date</label>

                        <div>

                        <input
                        required
                        className='border-2 py-3 rounded-xl border-zinc-400'
                        type='date'></input>


                        </div>

                    </div>

                    <div className='flex-col flex'>

                         <label>Time</label>

                        <div>

                        <input 
                        className=' py-3 border-2 rounded-xl border-zinc-400'
                        type='time'>
                        </input>

                         </div>



                    </div>


                </div>

                <div className='flex m-4 flex-col'>
                    <label>Location</label>

                    <input className='rounded-xl py-3 border-2 border-zinc-400'></input>

                </div>

                <div className='flex m-4 flex-col'>

                    <label>Max Attendees(Optional)</label>
                    <input 
                    placeholder='Leave blank for unlimited'
                    className='rounded-xl py-3 text-sm border-2 border-zinc-400'></input>


                </div>

                <div className='flex justify-center mt-2'>
                    <button className='bg-sky-600 hover:bg-sky-800 text-white py-3 px-6 rounded-xl font-medium text-sm'>
                        Publish Event
                    </button>
                </div>











            </form>










            
        </section>
        
        
        
        
        
        
        
        
        
        
        </>
    )

}
export default CreateEvent;
