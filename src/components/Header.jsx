import { useState } from "react";
import { Link, useNavigate } from "react-router"; // useRouter si sax ah
import { useAuth } from "../context/AuthContext";
import { signOut } from "../lib/Auth";
import { useUser } from "../context/UserContext";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { user } = useAuth();
  const { user: LoginUser, username } = useUser();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    await signOut();
    navigate("/signin");
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          StationaryMS 📘
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-gray-700">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Nav Links (Desktop) */}
        <div className="hidden md:flex space-x-6 text-gray-700">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          {user && (
            <Link to="/Dashboard" className="hover:text-blue-600">
              Dashboard
            </Link>
          )}
        </div>

        {/* Profile and Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              <div className="flex items-center space-x-2">
                <FaUserCircle className="text-2xl text-gray-700" />
                <span className="text-sm font-medium text-gray-700">
                  {username || "User"}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/signin"
                className="text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <Link to="/" className="block text-gray-700 hover:text-blue-600" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="block text-gray-700 hover:text-blue-600" onClick={toggleMenu}>About</Link>
          <Link to="/contact" className="block text-gray-700 hover:text-blue-600" onClick={toggleMenu}>Contact</Link>
          {user && (
            <Link to="/Dashboard" className="block text-gray-700 hover:text-blue-600" onClick={toggleMenu}>Dashboard</Link>
          )}

          <div className="border-t pt-4">
            {user ? (
              <>
                <div className="flex items-center gap-2 mb-3">
                  <FaUserCircle className="text-xl text-gray-700" />
                  <span className="text-sm">{username || "User"}</span>
                </div>
                <button
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                  className="w-full bg-red-500 text-white py-2 rounded text-sm hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/signin"
                  className="block text-sm font-medium text-gray-700 hover:text-blue-600"
                  onClick={toggleMenu}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block bg-blue-600 text-white px-3 py-2 rounded text-center text-sm hover:bg-blue-700 mt-2"
                  onClick={toggleMenu}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
