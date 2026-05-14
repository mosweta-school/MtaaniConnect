
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AuthContext } from "../context/authContext";
import Mtaani from "../assets/Mtaan6.PNG";
import ProfileDropdown from "./Profile";


function Navbar() {
  const { user, logout } = useContext(AuthContext);

  const [menuOpen, setMenuOpen] = useState(false);

  // Generate avatar color from first letter
  const getAvatarColor = (letter) => {
    const colors = [
      "bg-red-500",
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-indigo-500",
      "bg-teal-500",
    ];

    const index = letter.charCodeAt(0) % colors.length;

    return colors[index];
  };

  const firstLetter = user?.name?.charAt(0).toUpperCase();

  return (
    <nav className="bg-sky-800 justify-between flex py-3 flex-row shadow-md   ">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
{/*////////////////////////////////////////////Navigation Panel////////////////////////////////////////////////////////*/}


        

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">

          

          {/* NOT LOGGED IN */}
          {!user && (
            <>
            <Link
            to="/"
            className="font-semibold  text-xl text-gray-200 hover:text-blue-500 transition hover:underline"
          >
            Home
          </Link>

          
              <Link
                to="/register"
                className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-xl transition"
              >
                Register
              </Link>

              <Link
                to="/login"
                className="border border-blue-500 text-blue-500 hover:bg-blue-50 px-5 py-2 rounded-xl transition"
              >
                Login
              </Link>
            </>
          )}

          {/* USER */}
          {user && user.role === "user" && (
            <>
              
<div className="ml-10" >
<h1 className="text-xl text-gray-200 font-bold">Welcome {user.name || null}👋</h1>
      </div>
          <Link
            to="/"
            className="font-semibold  text-xl text-gray-200 hover:text-blue-500 transition hover:underline"
          >
            Home
          </Link>
              
            </>
          )}

          {/* ADMIN */}
          {user && user.role === "admin" && (
            <Link
              to="/dashboard"
              className=" text-xl text-blue-400 hover:text-blue-500 font-medium"
            >
              Dashboard
            </Link>
          )}

          {/* PROFILE */}
          {user && (
            <div className="flex items-center gap-3">
             <ProfileDropdown/>
              
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4 bg-white shadow-lg">

          <Link to="/">Home</Link>

          {!user && (
            <>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </>
          )}

          {user && user.role === "user" && (
            <>
              <Link to="/events">Events</Link>
              <Link to="/my-events">My Events</Link>
              <Link to="/create-event">Create Event</Link>
            </>
          )}

          {user && user.role === "admin" && (
            <Link to="/dashboard">Dashboard</Link>
          )}

          {user && (
            <button
              onClick={logout}
              className="text-left text-red-500"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;

