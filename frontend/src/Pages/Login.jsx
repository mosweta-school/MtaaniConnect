import React, { useState,useContext} from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../Services/authService";
import { AuthContext } from "../context/AuthContext";
import toast,{Toaster} from "react-hot-toast";


function Login(){
    const { login } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
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
    
        try {
          const data = await loginUser(formData);
          setMessage(data.message);
          login(data);
          console.log(data);
          toast.success(data.message)
            
            setTimeout(() => {
                navigate("/");
                }, 2000);
                            
        } catch (error) {
          setMessage(error.response?.data?.message || "Login failed");
          toast.error(error.response?.data?.message)
          
        }
      };
    return(
        <>
<Toaster />
        <section className='mt-8 items-center '>
                <div className='place-items-center'>

                    <h1 className='font-extrabold text-3xl'>MtaaniConnect</h1>
                    <h2 className='text-blue-300 '>Discover events near you</h2>

                </div>



                <form onSubmit={handleSubmit} className='flex-col mt-5 flex'>

                    <div className='flex flex-col mb-4'>

                        <label className='text-sm font-medium mr-20 ml-20 text-zinc-600 '>Email</label>
                         <input
                          required
                          type='email'
                          name="email"
                          onChange={handleChange}
                          className='border-2 border-zinc-400 px-4 py-2 rounded-xl mt-5 r-20 ml-20 mr-20'
                          placeholder='Enter your email'></input>

                    </div>

                    <div className='flex flex-col mb-4'>
                        <label className='text-sm font-medium mr-20 ml-20 text-zinc-600 '>Password</label>

                         <input 
                          required
                         type='password'
                         name="password"
                         onChange={handleChange}
                         className='rounded-xl border-zinc-400  px-4 py-2 border-2 mr-20 ml-20 mt-5'
                         placeholder='Enter your password'></input>

                    </div>

                       {message && <p className="text-center text-sm mt-4 text-zinc-600">{message}</p>}
                <button className='text-white hover:bg-sky-800 rounded-2xl mt-6 ml-30 mr-30 py-2 bg-sky-600'>LOG IN </button>

                <p className='text-center text-sm mt-4'>
                    Dont have an account?{' '}
                    <Link to='/register' className='text-sky-600 font-medium hover:underline'>
                        Register
                    </Link>

                </p>
            </form>





        </section>





        </>

    )

}
export default Login;
