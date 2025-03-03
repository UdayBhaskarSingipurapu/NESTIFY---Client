import React from "react";
import { Link } from "react-router-dom";
import { LayoutDashboard, User, Settings, LogOut } from "lucide-react";


const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-[710px] w-48 bg-gray-900 text-white z-50 flex flex-col p-4 rounded-md m-2">
      <div className="text-lg font-bold mb-8">Logo</div>
      <nav className="flex flex-col space-y-4">
        <Link
          to="/user-dashboard"
          className="nav-link flex items-center gap-2 p-2 hover:bg-gray-300 hover:text-black rounded-md"
        >
          <LayoutDashboard className="h-5 w-5" />
          Dashboard
        </Link>
        <Link
          to="/profile"
          className="nav-link flex items-center gap-2 p-2 hover:bg-gray-300 hover:text-black rounded-md"
        >
          <User className="h-5 w-5" />
          Profile
        </Link>
        <Link
          to="/settings"
          className="nav-link flex items-center gap-2 p-2 hover:bg-gray-300 hover:text-black rounded-md"
        >
          <Settings className="h-5 w-5" />
          Settings
        </Link>
        <Link
          to="/logout"
          className="nav-link flex items-center gap-2 p-2 hover:bg-gray-300 hover:text-black rounded-md"
        >
          <LogOut className="h-5 w-5" />
          Logout
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;