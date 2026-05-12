import React, { useState } from "react";
import { registerUser } from "../Services/authService";

function Register(){
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
                    type='name'
                    className='rounded-xl border-zinc-400 m-  px-4 py-2 border-2 mr-20 ml-20 mt-5'
                    placeholder='Enter your Full Name'></input>


                    <input
                    required
                    type='email'
                    className='border-2 border-zinc-400 px-4 py-2 rounded-xl mt-5 r-20 ml-20 mr-20'
                    placeholder='Enter your email'></input>

                    <input 
                    required
                    type='password'
                    className='rounded-xl border-zinc-400  px-4 py-2 border-2 mr-20 ml-20 mt-5'
                    placeholder='Enter your password'></input>

                    <input 
                    required
                    type='password'
                    className='rounded-xl border-zinc-400  px-4 py-2 border-2 mr-20 ml-20 mt-5'
                    placeholder='Confrim your password'></input>


                <button className='text-white hover:bg-sky-800 rounded-2xl mt-6 ml-30 mr-30 py-2 bg-sky-600'>CREATE ACCOUNT </button>

            </form>





        </section>





        </>

    )
function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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
      return;
    }

    try {
      const data = await registerUser(formData);

      setMessage(data.message);

      console.log(data);
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          "Registration failed"
      );
    }
  };

  return (
    <div>
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
        />

        <button type="submit">
          Register
        </button>
      </form>

      <p>{message}</p>
    </div>
  );
}

export default Register;