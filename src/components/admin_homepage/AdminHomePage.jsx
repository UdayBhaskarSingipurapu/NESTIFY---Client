import React from "react";
import { Link, useNavigate } from "react-router-dom";
import userTopContainerImag1 from "../../assets/userTopContainerImag1.png";
import userTopContainerImag2 from "../../assets/userTopContainerImag2.png";
import userTopContainerImag3 from "../../assets/userTopContainerImag3.png";
import userTopContainerImag4 from "../../assets/userTopContainerImag4.png";
import userBottonContainerImage7 from "../../assets/userBottonContainerImage7.png";
import userBottonContainerImage8 from "../../assets/userBottonContainerImage8.png";
import userBottonContainerImage9 from "../../assets/userBottonContainerImage9.png";
import userBottomContainerImage1 from "../../assets/userBottomContainerImage1.png";
import userBottomContainerImage2 from "../../assets/userBottomContainerImage2.png";
import userBottomContainerImage3 from "../../assets/userBottomContainerImage3.png";
import userBottomContainerImage4 from "../../assets/userBottomContainerImage4.png";
import userBottomContainerImage5 from "../../assets/userBottomContainerImage5.png";
import userBottomContainerImage6 from "../../assets/userBottomContainerImage6.png";

const AdminHomePage = () => {
  return (
    <div className="bg-gray-200 p-7">
      {/* top-container */}
      <div className="bg-white w-full p-7 rounded-md max-w-[1700px] m-auto overflow-y-auto h-[260px] sm:overflow-visible sm:h-full">
        <h1 className="text-[#111827] font-bold text-2xl">Admin Dashboard</h1>
        <p className="text-[#6B7280] text-sm">Hostel Management System</p>
        <div className="mt-4 grid lg:grid-cols-12 md:grid-cols-10 sm:grid-cols-2 gap-4">
          <div className="lg:col-span-3 md:col-span-5 sm:col-span-1 flex flex-wrap gap-4 bg-blue-100  p-4 rounded-md">
            <div className="flex justify-center items-center">
              <img
                src={userTopContainerImag1}
                alt=""
                className="w-[15px] h-auto "
              />
            </div>
            <div>
              <p className="text-[#6B7280] font-semibold">Total Students</p>
              <p className="text-[#111827] font-bold text-lg">156</p>
            </div>
          </div>

          <div className="lg:col-span-3 md:col-span-5 sm:col-span-1 flex flex-wrap gap-4 bg-red-100  p-4 rounded-md">
            <div className="flex justify-center items-center">
              <img
                src={userTopContainerImag2}
                alt=""
                className="w-[15px] h-auto "
              />
            </div>
            <div>
              <p className="text-[#6B7280] font-semibold">Total Revenue</p>
              <p className="text-[#111827] font-bold text-lg">$45,600.00</p>
            </div>
          </div>

          <div className="lg:col-span-3 md:col-span-5 sm:col-span-1 flex flex-wrap gap-4 bg-green-100  p-4 rounded-md">
            <div className="flex justify-center items-center">
              <img
                src={userTopContainerImag3}
                alt=""
                className="w-[15px] h-auto "
              />
            </div>
            <div>
              <p className="text-[#6B7280] font-semibold">Pending Requests</p>
              <p className="text-[#111827] font-bold text-lg">12</p>
            </div>
          </div>

          <div className="lg:col-span-3 md:col-span-5 sm:col-span-1 flex flex-wrap gap-4 bg-violet-100  p-4 rounded-md">
            <div className="flex justify-center items-center">
              <img
                src={userTopContainerImag4}
                alt=""
                className="w-[15px] h-auto "
              />
            </div>
            <div>
              <p className="text-[#6B7280] font-semibold">Room Occupancy</p>
              <p className="text-[#111827] font-bold text-lg">85%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 mt-7 grid grid-cols-1 lg:grid-cols-3 max-w-[1700px] m-auto gap-7 overflow-y-auto">
        {/* Administrative Actions */}
        <div className="bg-white rounded-md p-7 overflow-y-auto h-[300px]">
          <h1 className="text-[#111827] font-bold text-xl">
            Administrative Actions
          </h1>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center justify-center gap-3 bg-blue-100 p-4 rounded-md">
              <img
                src={userBottomContainerImage1}
                alt="Manage Students"
                className="w-[15px] h-auto"
              />
              <p className="text-[#6B7280] font-semibold">Manage Students</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 bg-orange-100 p-4 rounded-md">
              <img
                src={userBottomContainerImage6}
                alt="Settings"
                className="w-[15px] h-auto"
              />
              <p className="text-[#6B7280] font-semibold">Settings</p>
            </div>
          </div>
        </div>

        {/* Hostel Statistics */}
        <div className="bg-white rounded-md p-7 overflow-y-auto h-[300px]">
          <h1 className="text-[#111827] font-bold text-xl">
            Hostel Statistics
          </h1>
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
              <span>Security Staff</span>
              <span className="text-[#111827] text-lg">8</span>
            </span>
            <span className="flex justify-between text-[#6B7280] font-semibold">
              <span>Monthly Revenue</span>
              <span className="text-[#111827] text-lg">$15,200</span>
            </span>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-md p-7 overflow-y-auto h-[300px]">
          <h1 className="text-[#111827] font-bold text-xl">Notifications</h1>
          <div className="mt-4 flex flex-col gap-8">
            <div>
              <p className="font-semibold text-[#111827] text-lg">
                Fee Payment Reminder
              </p>
              <p className="text-[#6B7280] text-md font-semibold mt-1">
                Your next fee installment of $1,200 is due on February 1st,
                2024.
              </p>
            </div>
            <div className="h-[1px] bg-[#d8d8d8] w-full"></div>
            <div>
              <p className="font-semibold text-[#111827] text-lg">
                Maintenance Update
              </p>
              <p className="text-[#6B7280] text-md font-semibold mt-1">
                Your maintenance request for AC repair has been scheduled for
                tomorrow.
              </p>
            </div>
            <div className="h-[1px] bg-[#d8d8d8] w-full"></div>
            <div>
              <p className="font-semibold text-[#111827] text-lg">
                Hostel Announcement
              </p>
              <p className="text-[#6B7280] text-md font-semibold mt-1">
                Weekend cleaning schedule has been updated. Please check the
                notice board.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminHomePage;

// grid md:grid-cols-10 sm:grid-cols-2 gap-4
