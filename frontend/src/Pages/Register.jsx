import React from 'react';
import { Link } from 'react-router-dom';

function Register(){
    return(
        <>

        <section className='mt-8 items-center '>

            
                <div className='place-items-center'>

                    <h1 className='font-extrabold text-3xl'>MtaaniConnect</h1>
                    <h2 className='text-blue-300 '>Discover events near you</h2>

                </div>



                <form className='flex-col mt-5 flex'>

                    <div className='flex flex-col mb-4'>

                        <label className='ml-20 mr-20 text-sm font-medium text-zinc-600 '>Name</label>

                         <input 
                          required
                          type='name'
                          className='rounded-xl border-zinc-400 m-  px-4 py-2 border-2 mr-20 ml-20 mt-5'
                          placeholder='Enter your Full Name'></input>

                    </div>

                    <div className='flex flex-col mb-4'>

                        <label className='text-sm font-medium mr-20 ml-20 text-zinc-600 '>Email</label>
                         <input
                          required
                          type='email'
                          className='border-2 border-zinc-400 px-4 py-2 rounded-xl mt-5 r-20 ml-20 mr-20'
                          placeholder='Enter your email'></input>

                    </div>

                    <div className='flex flex-col mb-4'>
                        <label className='text-sm font-medium mr-20 ml-20 text-zinc-600 '>Password</label>

                         <input 
                          required
                         type='password'
                         className='rounded-xl border-zinc-400  px-4 py-2 border-2 mr-20 ml-20 mt-5'
                         placeholder='Enter your password'></input>

                    </div>

                    <div className='flex-col flex mb-4'>

                        <label className='text-sm mr-20 ml-20 font-medium text-zinc-600 '>Confrim your password</label>

                        <input 
                        required
                        type='password'
                        className='rounded-xl border-zinc-400  px-4 py-2 border-2 mr-20 ml-20 mt-5'
                        placeholder='Confrim your password'></input>

                    </div>



                
                
                <button className='text-white hover:bg-sky-800 rounded-2xl mt-6 ml-30 mr-30 py-2 bg-sky-600'>CREATE ACCOUNT </button>

                <p className='text-zinc-400 text-center mt-4'>
                    Already have an account?{' '}
                    <Link to='/login' className='text-sky-600 font-medium hover:underline'>
                        Log in
                    </Link>
                </p>

            </form>





        </section>





        </>

    )

}
export default Register;
