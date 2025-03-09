import React, { useContext, useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LayoutDashboard, User, Settings, LogOut, Home, Menu,X } from "lucide-react";
import { userLoginContext } from "../../../contexts/userLoginContext";
import Slogo from "../../../assets/Slogo.png"

const Sidebar = () => {
  const { logout } = useContext(userLoginContext);
  const navigate = useNavigate();
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <>

      <button
        onClick={toggleSidebar}
        className="fixed z-50 p-2 bg-gray-900 text-white rounded-md md:hidden  "
      >
       {isSidebarVisible ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" /> 
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-48 bg-gray-900 text-white z-40 flex flex-col p-4 transition-transform duration-300 ease-in-out ${
          isSidebarVisible ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
      <img src={Slogo} alt="logo" className="w-15 h-15 mb-0 mt-10 "/>

       
        <nav className="flex flex-col space-y-4 mt-3">
          <Link
            to="/student-home"
            className="nav-link flex items-center gap-2 p-2 hover:bg-gray-300 hover:text-black rounded-md"
            onClick={() => setSidebarVisible(false)}
          >
            <Home className="h-5 w-5" />
            Home
          </Link>
          <Link
            to="/user-dashboard"
            className="nav-link flex items-center gap-2 p-2 hover:bg-gray-300 hover:text-black rounded-md"
            onClick={() => setSidebarVisible(false)}
          >
            <LayoutDashboard className="h-5 w-5" />
            Dashboard
          </Link>
          <Link
            to="/user-room-details"
            className="nav-link flex items-center gap-2 p-2 hover:bg-gray-300 hover:text-black rounded-md"
            onClick={() => setSidebarVisible(false)}
          >
            <User className="h-5 w-5" />
            Room Details
          </Link>
          <Link
            to="/settings"
            className="nav-link flex items-center gap-2 p-2 hover:bg-gray-300 hover:text-black rounded-md"
            onClick={() => setSidebarVisible(false)}
          >
            <Settings className="h-5 w-5" />
            Settings
          </Link>
          <button
            onClick={handleLogout}
            className="nav-link flex items-center gap-2 p-2 hover:bg-gray-300 hover:text-black rounded-md"
          >
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;