import React from 'react';



function AdminDashboard() {
    return (
        <section className='mx-auto max-w-6xl px-4 py-8'>
            <div className='mb-8 flex flex-col gap-3'>
                <p className='text-sm font-medium  text-sky-600'>
                    Admin Panel
                </p>
                    <div>
                        <h1 className='text-3xl font-bold text-slate-900'>Admin Dashboard</h1>
                        
                    </div>
                   
            </div>

                 <div className='rounded-2xl border grid grid-cols-2  border-slate-200 bg-white p-5 shadow-sm'>

                         <div className='bg-slate-300 rounded-xl m-4 py-4'>

                           <h2 className='mt-3 text-xl font-bold text-slate-900'>Total Users</h2>
                           <p className='text-sm text-slate-500'></p>

                         </div>

                         <div className='rounded-xl bg-slate-300 m-4 py-4'>
                            <h2 className='mt-3 text-xl font-bold text-slate-900'>Total Events</h2>
                             <p className='mt-2 text-sm text-slate-600'></p>

                         </div>
                    
                    
                    </div>
               

            <div className='mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]'>
                <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
                    <div className='mb-6'>
                        <h2 className='text-xl font-semibold text-slate-900'>Events by Category</h2>
                        
                    </div>

                    <div className='space-y-5'>
                        
                            <div >
                                <div className='mb-2 flex items-center justify-between text-sm'>
                                    <span className='font-medium text-slate-700'></span>
                                </div>
                                <div className='h-3 rounded-full bg-slate-100'>
                                    <div
                                        className=' h-3 rounded-full'
                                    />
                                </div>
                            </div>
                     
                    </div>
                </div>

                
            </div>

            <div className='mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
                <div className='mb-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between'>
                    <div>
                        <h2 className='text-xl font-semibold text-slate-900'>Recent Events</h2>
                        <p className='text-sm text-slate-500'>
                            Newly created or recently updated events:
                        </p>
                    </div>
                    <button className='rounded-xl bg-sky-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-700'>
                        View All Events
                    </button>
                </div>

                <div className='overflow-x-auto'>
                    <table className='min-w-full text-left text-sm'>
                        <thead>
                            <tr className='border-b border-slate-200 text-slate-500'>
                                <th className='pb-3 font-medium'>Event</th>
                                <th className='pb-3 font-medium'>Category</th>
                                <th className='pb-3 font-medium'>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                                <tr  className='border-b border-slate-100'>
                                    <td className='py-4 font-medium text-slate-800'></td>
                                    <td className='py-4 text-slate-600'></td>
                                    <td className='py-4 text-slate-600'></td>
                                    
                                </tr>
                        
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

export default AdminDashboard;
