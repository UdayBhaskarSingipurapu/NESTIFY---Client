import React from "react";
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

const UserHomePage = () => {
  return (
    <div className="bg-gray-200 p-7">
      {/* top-container */}
      <div className="bg-white w-full p-7 rounded-md max-w-[1700px] m-auto overflow-y-auto h-[260px] sm:overflow-visible sm:h-full">
        <h1 className="text-[#111827] font-bold text-2xl">
          Welcome back, john!
        </h1>
        <p className="text-[#6B7280] text-sm">Room 304, Block B</p>
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
              <p className="text-[#6B7280] font-semibold">Meal Plan Balance</p>
              <p className="text-[#111827] font-bold text-lg">$245.50</p>
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
              <p className="text-[#6B7280] font-semibold">Pending Fees</p>
              <p className="text-[#111827] font-bold text-lg">$1,200.00</p>
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
              <p className="text-[#6B7280] font-semibold">
                Maintenance Requests
              </p>
              <p className="text-[#111827] font-bold text-lg">2 Active</p>
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
              <p className="text-[#6B7280] font-semibold">Days Left in Term</p>
              <p className="text-[#111827] font-bold text-lg">45 Days</p>
            </div>
          </div>
        </div>
      </div>

      {/* bottom-container */}
      <div className="bg-gray-200 mt-7 grid grid-cols-12 grid-rows-2 max-w-[1700px] m-auto gap-7 overflow-y-auto">
        {/* quick actions */}
        <div className="bg-white rounded-md p-7 lg:col-span-8 col-span-12 overflow-y-auto h-[300px]">
          <h1 className="text-[#111827] font-bold text-xl">Quick Actions</h1>
          <div className="mt-4 grid lg:grid-cols-12 md:grid-cols-10 sm:grid-cols-2 grid-cols-1 gap-4">
            <div className="lg:col-span-4 md:col-span-5 sm:col-span-1 flex flex-col items-center justify-center flex-wrap gap-3 bg-blue-100  p-4 rounded-md">
              <div className="flex justify-center items-center">
                <img
                  src={userBottomContainerImage1}
                  alt=""
                  className="w-[15px] h-auto "
                />
              </div>
              <div>
                <p className="text-[#6B7280] font-semibold">
                  Maintenance Request
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 md:col-span-5 sm:col-span-1 flex flex-col items-center justify-center flex-wrap gap-3 bg-green-100  p-4 rounded-md">
              <div className="flex justify-center items-center">
                <img
                  src={userBottomContainerImage2}
                  alt=""
                  className="w-[15px] h-auto "
                />
              </div>
              <div>
                <p className="text-[#6B7280] font-semibold">
                  Documents
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 md:col-span-5 sm:col-span-1 flex flex-col items-center justify-center flex-wrap gap-3 bg-yellow-100  p-4 rounded-md">
              <div className="flex justify-center items-center">
                <img
                  src={userBottomContainerImage3}
                  alt=""
                  className="w-[15px] h-auto "
                />
              </div>
              <div>
                <p className="text-[#6B7280] font-semibold">
                  Meal Plan
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 md:col-span-5 sm:col-span-1 flex flex-col items-center justify-center flex-wrap gap-3 bg-pink-100  p-4 rounded-md">
              <div className="flex justify-center items-center">
                <img
                  src={userBottomContainerImage4}
                  alt=""
                  className="w-[15px] h-auto "
                />
              </div>
              <div>
                <p className="text-[#6B7280] font-semibold">Feedback</p>
              </div>
            </div>

            <div className="lg:col-span-4 md:col-span-5 sm:col-span-1 flex flex-col items-center justify-center flex-wrap gap-3 bg-violet-100  p-4 rounded-md">
              <div className="flex justify-center items-center">
                <img
                  src={userBottomContainerImage5}
                  alt=""
                  className="w-[15px] h-auto "
                />
              </div>
              <div>
                <p className="text-[#6B7280] font-semibold">
                  Payment History
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 md:col-span-5 sm:col-span-1 flex flex-col items-center justify-center flex-wrap gap-3 bg-orange-100  p-4 rounded-md">
              <div className="flex justify-center items-center">
                <img
                  src={userBottomContainerImage6}
                  alt=""
                  className="w-[15px] h-auto "
                />
              </div>
              <div>
                <p className="text-[#6B7280] font-semibold">
                  Room Change
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* room infromation */} 
        <div className="bg-white rounded-md p-7 hidden lg:col-span-4 lg:flex lg:flex-col overflow-y-auto h-[300px]">
          <h1 className="text-[#111827] font-bold text-xl">Room Information</h1>
          <div className="mt-4 flex flex-col gap-6">
            <span className="flex justify-between text-[#6B7280] font-semibold">
              <span className="">Room Number</span>
              <span className="text-[#111827] text-lg">304</span>
            </span>
            <span className="flex justify-between text-[#6B7280] text-md font-semibold">
              <span>Floor</span>
              <span className="text-[#111827] text-lg">3rd Floor</span>
            </span>
            <span className="flex justify-between text-[#6B7280] text-md font-semibold">
              <span>Room Type</span>
              <span className="text-[#111827] text-lg">Double Sharing</span>
            </span>
            <span className="flex justify-between text-[#6B7280] text-md font-semibold">
              <span>Roommate</span>
              <span className="text-[#111827] text-lg">Michael Brown</span>
            </span>
            <span className="flex justify-between text-[#6B7280] text-md font-semibold">
              <span>Last Meter Reading</span>
              <span className="text-[#111827] text-lg">234 kWh</span>
            </span>
          </div>
        </div>

        {/* Activity timeline */}
        <div className="bg-white rounded-md p-7 lg:col-span-8 col-span-12 overflow-y-auto h-[300px]">
          <h1 className="text-[#111827] font-bold text-xl">
            Activity Timeline
          </h1>
          <div className="mt-4 flex flex-col gap-6">
            <div className="flex justify-between text-[#6B7280] font-semibold sm:flex-row flex-col sm:gap-0 gap-2">
              <div className="flex gap-2 items-center">
                <img src={userBottonContainerImage7} alt="" />
                <p>
                  visitor{" "}
                  <span className="font-semibold text-[#111827] text-lg">
                    sarah Johnson
                  </span>{" "}
                  checked in
                </p>
              </div>
              <p className="sm:pl-0 pl-3">1 hour ago</p>
            </div>
            <div className="flex justify-between text-[#6B7280] font-semibold sm:flex-row flex-col sm:gap-0 gap-2">
              <div className="flex gap-2 items-center">
                <img src={userBottonContainerImage8} alt="" />
                <p>
                  Maintenance request{" "}
                  <span className="font-semibold text-[#111827] text-lg">
                    #1234
                  </span>{" "}
                  completed
                </p>
              </div>
              <p className="sm:pl-0 pl-3">1 hour ago</p>
            </div>
            <div className="flex justify-between text-[#6B7280] font-semibold sm:flex-row flex-col sm:gap-0 gap-2">
              <div className="flex gap-2 items-center">
                <img src={userBottonContainerImage9} alt="" />
                <p>
                  Payment of{" "}
                  <span className="font-semibold text-[#111827] text-lg">
                    $500
                  </span>{" "}
                  received
                </p>
              </div>
              <p className="sm:pl-0 pl-3">1 hour ago</p>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-md p-7 hidden lg:col-span-4 lg:flex lg:flex-col overflow-y-auto h-[300px]  ">
          <h1 className="text-[#111827] font-bold text-xl">Notifications</h1>
          <div className="mt-4 flex flex-col gap-8">
            <div>
              <p className="font-semibold text-[#111827] text-lg">
                Fee Payment Reminder{" "}
              </p>
              <p className="text-[#6B7280] text-md font-semibold mt-1">
                Your next fee installment of $1,200 is due on February 1st,
                2024.
              </p>
            </div>
            <div className="h-[1px] bg-[#d8d8d8] w-full"></div>
            <div>
              <p className="font-semibold text-[#111827] text-lg ">
                Maintenance Update{" "}
              </p>
              <p className="text-[#6B7280] text-md font-semibold mt-1">
                Your maintenance request for AC repair has been scheduled for
                tomorrow.
              </p>
            </div>
            <div className="h-[1px] bg-[#d8d8d8] w-full"></div>
            <div>
              <p className="font-semibold text-[#111827] text-lg">
                Hostel Announcement{" "}
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
export default UserHomePage;

// grid md:grid-cols-10 sm:grid-cols-2 gap-4
