import { useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../Services/authService";
import Mtaani from "../assets/Mtaan6.PNG";


function Register() {
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
      
      return;
    }

    try {
      const data = await registerUser(formData);
      setMessage(data.message);

      console.log(data);
        
        setTimeout(() => {
            navigate("/login");
            }, 2000);
                        
    } catch (error) {
      setMessage(error.response?.data?.message || "Registration failed");
      
    }
  };

  return (
    <section className="mt-8 items-center">
    
      <div className="place-items-center">

                <Link className="flex" >
                <img
                  onClick={navigate("/")}
                    src={Mtaani}
                    alt="MtaaniConnect"
                    className="w-44 md:w-56 object-contain place-items-center"
                  />
                </Link>
                  
                          
                  
        <h2 className="text-blue-300">Discover events near you</h2>
      </div>

      <form className="flex-col mt-5 flex" onSubmit={handleSubmit}>
        <div className="flex flex-col mb-4">
          <label className="ml-20 mr-20 text-sm font-medium text-zinc-600">
            Name
          </label>
          <input
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="rounded-xl border-zinc-400 px-4 py-2 border-2 mr-20 ml-20 mt-5"
            placeholder="Enter your Full Name"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label className="text-sm font-medium mr-20 ml-20 text-zinc-600">
            Email
          </label>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border-2 border-zinc-400 px-4 py-2 rounded-xl mt-5 ml-20 mr-20"
            placeholder="Enter your email"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label className="text-sm font-medium mr-20 ml-20 text-zinc-600">
            Password
          </label>
          <input
            required
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="rounded-xl border-zinc-400 px-4 py-2 border-2 mr-20 ml-20 mt-5"
            placeholder="Enter your password"
          />
        </div>

        <div className="flex-col flex mb-4">
          <label className="text-sm mr-20 ml-20 font-medium text-zinc-600">
            Confirm your password
          </label>
          <input
            required
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="rounded-xl border-zinc-400 px-4 py-2 border-2 mr-20 ml-20 mt-5"
            placeholder="Confirm your password"
          />
        </div>

        <button className="text-white hover:bg-sky-800 rounded-2xl mt-6 ml-30 mr-30 py-2 bg-sky-600">
          CREATE ACCOUNT
        </button>

        <p className="text-zinc-400 text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-sky-600 font-medium hover:underline">
            Log in
          </Link>
        </p>

        {message && <p className="text-center text-sm mt-4 text-zinc-600">{message}</p>}
      </form>
    </section>
  );
}

export default Register;
