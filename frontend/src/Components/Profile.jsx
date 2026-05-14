import { useState, useEffect, useRef, useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { Calendar, PlusCircle, LogOut, ChevronDown, User } from "lucide-react";
export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate()
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

  // Close dropdown when clicking outside of the component
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className={`relative inline-block text-left w-10 h-10 rounded-full  items-center justify-center text-white font-bold ${getAvatarColor(firstLetter) }z-[9999]`} >
      {/* Profile Button (User Initial) */}
      <button
      
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className={`flex h-10 w-10 items-center justify-center rounded-full font-bold text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors ${getAvatarColor(firstLetter)}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {firstLetter}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
          role="menu"
          aria-orientation="vertical"
        >
          <a
            
            className="flex gap-6 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
            onClick={() => navigate("/my-events")}
          >
            <Calendar className="h-5 w-5 text-gray-700"/>
            My Events
          </a>
          <a
            href="/create-event"
            className=" flex block px-4 gap-6 py-2 text-sm text-gray-700 hover:bg-gray-100 "
            role="menuitem"
            onClick={() => setIsOpen(false)}
          >
            <PlusCircle className="h-5 w-5  text-gray-700" />
            Create Event
          </a>
          <hr className="my-1 border-gray-200" />
          <a
            href="#logout"
            className=" gap-6 block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
            role="menuitem"
            onClick={logout}
          >
            <LogOut className="h-5 w-5 text-red-500"/>
            Sign out
          </a>
        </div>
      )}
    </div>
  );
}
