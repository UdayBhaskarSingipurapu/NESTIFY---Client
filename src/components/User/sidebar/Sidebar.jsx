import React, { useContext, useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LayoutDashboard, User, Settings, LogOut, Home, Menu } from "lucide-react";
import { userLoginContext } from "../../../contexts/userLoginContext";


const Sidebar = () => {
  const { logout } = useContext(userLoginContext);
  const navigate = useNavigate();
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  useEffect(() => {
    navigate("/student-home");
  }, [navigate]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      {/* Menu Button for Medium Screens */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 bg-gray-900 text-white rounded-md md:hidden"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-[710px] w-48 bg-gray-900 text-white z-40 flex flex-col p-4 rounded-md transition-transform duration-300 ease-in-out ${
          isSidebarVisible ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="text-lg font-bold mb-8">Logo</div>
        <nav className="flex flex-col space-y-4">
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
            to="/profile"
            className="nav-link flex items-center gap-2 p-2 hover:bg-gray-300 hover:text-black rounded-md"
            onClick={() => setSidebarVisible(false)}
          >
            <User className="h-5 w-5" />
            Profile
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