import React, { useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../Services/authService";
import toast,{Toaster} from "react-hot-toast";

function Register(){
      const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.password !== formData.confirmPassword
    ) {
      setMessage("Passwords do not match");
      toast.error("Passwords do not match");
      return;
    }

    try {
      const data = await registerUser(formData);

      setMessage(data.message);

      console.log(data);
        toast.success(data.message);
        setTimeout(() => {
            navigate("/login");
            }, 2000);
                        
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          "Registration failed"
      );
      toast.error(error.response?.data?.message || "Registration failed");
    }
  };

    return(
        <>
        <Toaster position="top-right" reverseOrder={false} />

        <section className='mt-8 items-center '>

            
                <div className='place-items-center'>

                    <h1 className='font-extrabold text-3xl'>MtaaniConnect</h1>
                    <h2 className='text-blue-300 '>Discover events near you</h2>

                </div>



                <form onSubmit={handleSubmit} className='flex-col mt-5 flex'>
                    
                    <div className='flex flex-col mb-4'>
                        
                    <label className='text-sm font-medium mr-20 ml-20 text-zinc-600 '>Name</label>
                    <input 
                    required
                    
                    type="text"
                    name="name"
          
                    onChange={handleChange}
                    className='rounded-xl border-zinc-400 m-  px-4 py-2 border-2 mr-20 ml-20 mt-5'
                    placeholder='Enter your Full Name'/>
                    </div>

                    <div className='flex flex-col mb-4'>
                        
                    <label className='text-sm font-medium mr-20 ml-20 text-zinc-600 '>Email</label>
                    <input
                    required
                    type='email'
                    name="email"
                    onChange={handleChange}
                    className='border-2 border-zinc-400 px-4 py-2 rounded-xl mt-5 r-20 ml-20 mr-20'
                    placeholder='Enter your email'/>
                    </div>

                    <div className='flex flex-col mb-4'>
                        
                    <label className='text-sm font-medium mr-20 ml-20 text-zinc-600 '>Password</label>
                    <input 
                    required
                    type='password'
                    name="password"
                    onChange={handleChange}
                    className='rounded-xl border-zinc-400  px-4 py-2 border-2 mr-20 ml-20 mt-5'
                    placeholder='Enter your password'/>
                    </div>

                    <div className='flex flex-col mb-4'>
                    <label className='text-sm font-medium mr-20 ml-20 text-zinc-600 '>Confirm Password</label>
                    <input 
                    required
                    type="password"
                    name='confirmPassword'
          
                    onChange={handleChange}
                    className='rounded-xl border-zinc-400  px-4 py-2 border-2 mr-20 ml-20 mt-5'
                    placeholder='Confrim your password'/>

                    </div>



                
                
                <button className='text-white hover:bg-sky-800 rounded-2xl mt-6 ml-30 mr-30 py-2 bg-sky-600'>CREATE ACCOUNT </button>
                <p className='text-center text-sm mt-4'>
                                    Already have an account?{' '}
                                    <Link to='/login' className='text-sky-600 font-medium hover:underline'>
                                        Login
                                    </Link>
                
                                </p>
            </form>





        </section>





        </>

    )
}
export default Register;
