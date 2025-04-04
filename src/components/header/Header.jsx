import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Menu, X, LogIn, Home, Info, Mail, LogOut } from "lucide-react";
import { userLoginContext } from "../../contexts/userLoginContext";
import Nlogo from "../../assets/Nlogo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { login, logout } = useContext(userLoginContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-16 bg-white shadow-md z-50 flex items-center px-4 md:px-6">
        <div className="flex items-center justify-between w-full">
         <div className="flex items-center font-bold">
            <img src={Nlogo} alt="Logo" className="w-9 h-9" />
            <span className="ml-2">Nestify</span>
          </div>
          

          <div className="hidden md:flex gap-7">
            <Link
              to="/"
              className="nav-link flex items-center gap-2 hover:text-black hover:underline"
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link
              to="/about"
              className="nav-link flex items-center gap-2 hover:text-black hover:underline"
            >
              <Info className="h-4 w-4" />
              About
            </Link>
            <Link
              to="/contact"
              className="nav-link flex items-center gap-2 hover:text-black hover:underline"
            >
              <Mail className="h-4 w-4" />
              Contacts
            </Link>
          </div>

          <div className="hidden md:block">
            {!login ? (
              <Link
                to="/sign-up/user"
                className="nav-link bg-black text-white border-2 border-black px-4 py-2 rounded-md cursor-pointer hover:bg-gray-100 hover:text-black transition flex items-center gap-2"
              >
                <LogIn className="h-4 w-4" />
                Sign Up
              </Link>
            ) : (
              <button
                onClick={logout}
                className="nav-link bg-black text-white border-2 border-black px-4 py-2 rounded-md cursor-pointer hover:bg-gray-100 hover:text-black transition flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            )}
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-gray-100 rounded-md"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 top-16 bg-white z-40 md:hidden shadow-lg">
          <div className="flex flex-col p-4 space-y-4">
            <Link
              to="/"
              className="nav-link flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md"
              onClick={toggleMenu}
            >
              <Home className="h-5 w-5" />
              Home
            </Link>
            <Link
              to="/about"
              className="nav-link flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md"
              onClick={toggleMenu}
            >
              <Info className="h-5 w-5" />
              About
            </Link>
            <Link
              to="/contact"
              className="nav-link flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md"
              onClick={toggleMenu}
            >
              <Mail className="h-5 w-5" />
              Contact
            </Link>
            {!login ? (
              <Link
                to="/sign-up/user"
                className="nav-link flex items-center gap-2 bg-black text-white p-2 rounded-md hover:bg-gray-800 transition"
                onClick={toggleMenu}
              >
                <LogIn className="h-5 w-5" />
                Sign Up
              </Link>
            ) : (
              <button
                onClick={logout}
                className="nav-link flex items-center gap-2 bg-black text-white p-2 rounded-md hover:bg-gray-800 transition"
              >
                <LogOut className="h-5 w-5" />
                Logout
              </button>
            )}
          </div>
        </div>
      )}

      {/* Body Padding to Prevent Overlap */}
      <div className="pt-16"></div>
    </>
  );
}

export default Header;