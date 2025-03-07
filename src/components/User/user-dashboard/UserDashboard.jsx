import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import userTopContainerImag1 from "../../../assets/userBottomContainerImage1.png";
import userTopContainerImag2 from "../../../assets/userTopContainerImag2.png";
import userTopContainerImag3 from "../../../assets/userTopContainerImag3.png";
import userTopContainerImag4 from "../../../assets/userTopContainerImag4.png";
import userBottonContainerImage7 from "../../../assets/userBottonContainerImage7.png";
import userBottonContainerImage8 from "../../../assets/userBottonContainerImage8.png";
import userBottonContainerImage9 from "../../../assets/userBottonContainerImage9.png";
import userBottomContainerImage1 from "../../../assets/userBottomContainerImage1.png";
import userBottomContainerImage2 from "../../../assets/userBottomContainerImage2.png";
import userBottomContainerImage3 from "../../../assets/userBottomContainerImage3.png";
import userBottomContainerImage4 from "../../../assets/userBottomContainerImage4.png";
import userBottomContainerImage5 from "../../../assets/userBottomContainerImage5.png";
import userBottomContainerImage6 from "../../../assets/userBottomContainerImage6.png";
import { FaRupeeSign } from "react-icons/fa";
import userProfile from "../../../assets/userProfile.jpg";
import MaintanaceForm from "./MaintenanceForm";
import FeedbackForm from "./FeedbackForm";



const UserHomePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("user");
    console.log(JSON.parse(loggedInUser));
    if(!loggedInUser){
      navigate('/log-in');
    }
    else {
      setUser(JSON.parse(loggedInUser)); 
    }
  }, []);

  return (
    <div className="bg-gray-200 p-7 md:ml-48">
      {/* top-container */}
      <div className="bg-white w-full p-7 rounded-md max-w-[1700px] m-auto h-full overflow-auto">
        <div className="flex gap-2.5 items-center">
          <h1 className="text-[#111827] font-bold text-3xl">
            Welcome back, {user.username}!
          </h1>
          <img src={user.profileImage?.url} alt="" className="w-14 h-full rounded-full" />
        </div>
        <p className="text-[#6B7280] text-sm">Room 304</p>
        <div className="mt-4 grid lg:grid-cols-12 md:grid-cols-10 sm:grid-cols-2 gap-4 ">
          
          <div className="lg:col-span-3 md:col-span-5 sm:col-span-1 flex  gap-4 bg-blue-100  p-4 rounded-md cursor-pointer"
          onClick={() => navigate("/mealplan")}
          >
            <div className="flex justify-center items-center">
              <img
                src={userTopContainerImag1}
                alt=""
                className="w-[15px] h-auto "
              />
            </div>
            <div>
              <p className="text-[#6B7280] font-semibold">Today's Meal Plan</p>
              <p className="text-[#111827] font-bold text-lg">
                Monday(22-02-25)
              </p>
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
              <p className="text-[#111827] font-bold text-lg flex items-center gap-1">
                <FaRupeeSign className="inline text-[16px]" /> 1,200.00
              </p>
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
        </div>
      </div>

      {/* bottom-container */}
      <div className="bg-gray-200 mt-7 grid grid-cols-12 grid-rows-1 max-w-[1700px] m-auto gap-7 overflow-auto">
        {/* quick actions */}
        <div className="bg-white rounded-md p-7 lg:col-span-7 col-span-12">
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
                <p className="text-[#6B7280] font-semibold">Pay Fees</p>
              </div>
            </div>

            <div className="lg:col-span-4 md:col-span-5 sm:col-span-1 flex flex-col items-center justify-center flex-wrap gap-3 bg-yellow-100  p-4 rounded-md cursor-pointer"
            onClick={() => navigate("/mealplan")}
            >
              <div className="flex justify-center items-center">
                <img
                  src={userBottomContainerImage3}
                  alt=""
                  className="w-[15px] h-auto "
                />
              </div>
              <div>
                <p className="text-[#6B7280] font-semibold">Meal Plan</p>
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
                <p className="text-[#6B7280] font-semibold">Payment History</p>
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
                  Maintenance History
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* room infromation */}
        <div className="bg-white rounded-md p-7 lg:col-span-5 col-span-12 lg:flex lg:flex-col overflow-auto h-[330px]">
          <h1 className="text-[#111827] font-bold text-xl">Room Information</h1>
          <div className="mt-4 flex flex-col gap-2">
            <span className="flex justify-between text-[#6B7280] font-semibold p-2 rounded-md bg-gray-100">
              <span className="">Room Number</span>
              <span className="text-[#111827] text-lg">304</span>
            </span>
            <span className="flex justify-between text-[#6B7280] text-md font-semibold p-2 rounded-md bg-gray-100">
              <span>Room Capacity</span>
              <span className="text-[#111827] text-lg">2 Beds</span>
            </span>
            <span className="flex justify-between text-[#6B7280] text-md font-semibold p-2 rounded-md bg-gray-100">
              <span>Roommates</span>
              <span className="text-[#111827] text-lg">Michael Brown</span>
            </span>
            <span className="flex justify-between text-[#6B7280] text-md font-semibold items-center p-2 rounded-md bg-gray-100">
              <span>A/C</span>
              <span className="text-[#111827] text-lg">No</span>
            </span>
            <span className="flex justify-between text-[#6B7280] text-md font-semibold items-center p-2 rounded-md bg-gray-100">
              <span>Fees</span>
              <span className="text-[#111827] text-lg">
                <FaRupeeSign className="text-[#111827] w-2.5 inline mb-1 mr-1" />
                4500
              </span>
            </span>
          </div>
        </div>

        {/* payment History */}
        <div className="bg-white rounded-md p-7 lg:col-span-7 col-span-12 h-[330px]">
          <h1 className="text-[#111827] font-bold text-xl">Payment History</h1>
          <div className="flex items-center justify-center h-full">
            <p className="text-[#6B7280] font-semibold text-lg">
              No Payment History
            </p>
          </div>
        </div>

        {/* Maintanace History */}
        <div className="bg-white rounded-md p-7 lg:col-span-5 col-span-12 lg:flex lg:flex-col overflow-auto h-[330px]">
          <h1 className="text-[#111827] font-bold text-xl">Maintanance History</h1>
          <div className="flex items-center justify-center h-full">
            <p className="text-[#6B7280] font-semibold text-lg">
              No Maintanance History
            </p>
          </div>
        </div>

        {/* maintainace form */}
        <div className="bg-white rounded-md p-7 lg:col-span-7 col-span-12 h-full">
          <h1 className="text-[#111827] font-bold text-xl">Maintanance Form</h1>
          <MaintanaceForm />
        </div>

        {/* Feedback from */}
        <div className="bg-white rounded-md p-7 lg:col-span-5 col-span-12 lg:flex lg:flex-col overflow-auto min-h-[330px]">
          <h1 className="text-[#111827] font-bold text-xl">Feedback Form</h1>
          <FeedbackForm />
        </div>
      </div>
    </div>
  );
};
export default UserHomePage;

// grid md:grid-cols-10 sm:grid-cols-2 gap-4
