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
