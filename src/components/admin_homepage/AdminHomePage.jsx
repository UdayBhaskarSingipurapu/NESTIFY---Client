import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import userTopContainerImag1 from "../../assets/userTopContainerImag1.png";
import userTopContainerImag2 from "../../assets/userTopContainerImag2.png";
import userTopContainerImag3 from "../../assets/userTopContainerImag3.png";
import userTopContainerImag4 from "../../assets/userTopContainerImag4.png";
import userBottomContainerImage1 from "../../assets/userBottomContainerImage1.png";
import userBottomContainerImage4 from "../../assets/userBottomContainerImage4.png";
import userBottomContainerImage6 from "../../assets/userBottomContainerImage6.png";
import { userLoginContext } from "../../contexts/userLoginContext";

const AdminHomePage = () => {
  
  const navigate = useNavigate();
  const { logout } = useContext(userLoginContext);

  const handleLogout = () => {
    sessionStorage.removeItem("currHosIdx");
    sessionStorage.removeItem("currentHostel");
    sessionStorage.removeItem("hostels");
    logout();
    navigate("/log-in");
  };

  return (
    <div className="bg-gray-200 p-7 flex flex-wrap">
      {/* Logout Button */}
      <div className="w-full flex justify-end mb-4">
        <button
          onClick={handleLogout}
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-500"
        >
          Logout
        </button>
      </div>

      {/* Top Container */}
      <div className="bg-white w-full p-7 rounded-md max-w-[1700px] m-auto overflow-y-auto h-[260px] sm:overflow-visible sm:h-full">
        <h1 className="text-[#111827] font-bold text-2xl">Admin Dashboard</h1>
        <p className="text-[#6B7280] text-sm">Hostel Management System</p>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Total Students */}
          <div className="flex items-center gap-4 bg-blue-100 p-4 rounded-md">
            <img
              src={userTopContainerImag1}
              alt=""
              className="w-[30px] h-[30px]"
            />
            <div>
              <p className="text-[#6B7280] font-semibold">Total Students</p>
              <p className="text-[#111827] font-bold text-lg">156</p>
            </div>
          </div>

          {/* Total Revenue */}
          <div className="flex items-center gap-4 bg-red-100 p-4 rounded-md">
            <img
              src={userTopContainerImag2}
              alt=""
              className="w-[30px] h-[30px]"
            />
            <div>
              <p className="text-[#6B7280] font-semibold">Total Revenue</p>
              <p className="text-[#111827] font-bold text-lg">$45,600.00</p>
            </div>
          </div>

          {/* Pending Requests */}
          <div className="flex items-center gap-4 bg-green-100 p-4 rounded-md">
            <img
              src={userTopContainerImag3}
              alt=""
              className="w-[30px] h-[30px]"
            />
            <div>
              <p className="text-[#6B7280] font-semibold">Pending Requests</p>
              <p className="text-[#111827] font-bold text-lg">12</p>
            </div>
          </div>

          {/* Room Occupancy */}
          <div className="flex items-center gap-4 bg-violet-100 p-4 rounded-md">
            <img
              src={userTopContainerImag4}
              alt=""
              className="w-[30px] h-[30px]"
            />
            <div>
              <p className="text-[#6B7280] font-semibold">Room Occupancy</p>
              <p className="text-[#111827] font-bold text-lg">85%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Container */}
      <div className="bg-gray-200 mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-[1700px] m-auto ">
        {/* Quick Actions */}
        <div className="bg-white rounded-md p-7 col-span-1 overflow-y-auto h-[300px]">
          <h1 className="text-[#111827] font-bold text-xl">Administrative Actions</h1>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 h-[30px]">
            {/* Manage Students */}
            <div className="flex flex-col items-center gap-3 bg-blue-100 p-4 rounded-md">
              <img
                src={userBottomContainerImage1}
                alt=""
                className="w-[30px] h-[30px]"
              />
              <p className="text-[#6B7280] font-semibold">Manage Students</p>
            </div>

            {/* Maintenance Request */}
            <div className="flex flex-col items-center gap-3 bg-pink-100 p-4 rounded-md">
              <img
                src={userBottomContainerImage4}
                alt=""
                className="w-[30px] h-[30px]"
              />
              <Link to="/staff">
                <p className="text-[#6B7280] font-semibold">Maintenance Request</p>
              </Link>
            </div>

            {/* Settings */}
            <div className="flex flex-col items-center gap-3 bg-orange-100 p-4 rounded-md">
              <img
                src={userBottomContainerImage6}
                alt=""
                className="w-[30px] h-[30px]"
              />
              <p className="text-[#6B7280] font-semibold">Settings</p>
            </div>
          </div>
        </div>

        {/* Hostel Statistics */}
        <div className="bg-white rounded-md p-7 col-span-1 overflow-y-auto h-[300px]">
          <h1 className="text-[#111827] font-bold text-xl">Hostel Statistics</h1>
          <div className="mt-4 flex flex-col gap-6">
            <span className="flex justify-between text-[#6B7280] font-semibold">
              <span>Total Rooms</span>
              <span className="text-[#111827] text-lg">200</span>
            </span>
            <span className="flex justify-between text-[#6B7280] font-semibold">
              <span>Vacant Rooms</span>
              <span className="text-[#111827] text-lg">30</span>
            </span>
            <span className="flex justify-between text-[#6B7280] font-semibold">
              <span>Maintenance Staff</span>
              <span className="text-[#111827] text-lg">12</span>
            </span>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-md p-7 col-span-1 overflow-y-auto h-[300px]">
          <h1 className="text-[#111827] font-bold text-xl">Notifications</h1>
          <div className="mt-4 flex flex-col gap-8">
            <div>
              <p className="font-semibold text-[#111827] text-lg">Fee Payment Reminder</p>
              <p className="text-[#6B7280] text-md mt-1">
                Your next fee installment of $1,200 is due on February 1st, 2024.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[#111827] text-lg">Maintenance Update</p>
              <p className="text-[#6B7280] text-md mt-1">
                Your maintenance request for AC repair has been scheduled for tomorrow.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[#111827] text-lg">Hostel Announcement</p>
              <p className="text-[#6B7280] text-md mt-1">
                Weekend cleaning schedule has been updated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
