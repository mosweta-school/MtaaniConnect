import React from 'react';

function Login(){
    return(
        <>

        <section className='mt-8 items-center '>
                <div className='place-items-center'>

                    <h1 className='font-extrabold text-3xl'>MtaaniConnect</h1>
                    <h2 className='text-blue-300 '>Discover events near you</h2>

                </div>



                <form className='flex-col mt-5 flex'>

                    <input
                    required
                    type='email'
                    className='border-2 border-zinc-400 px-4 py-2 rounded-xl mr-20 ml-20'
                    placeholder='Enter your email'></input>

                    <input 
                    required
                    type='password'
                    className='rounded-xl border-zinc-400  px-4 py-2 border-2 mr-20 ml-20 mt-5'
                    placeholder='Enter your password'></input>

                <button className='text-white hover:bg-sky-800 rounded-2xl mt-6 ml-30 mr-30 py-2 bg-sky-600'>LOG IN </button>

            </form>





        </section>





        </>

    )

}
export default Login;