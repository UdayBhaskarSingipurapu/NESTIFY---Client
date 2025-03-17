import React from "react";
import { Link } from "react-router-dom";
import Hostel from "../../assets/Hostel.png";
import mealPlan from "../../assets/mealPlan.png";
import feedback from "../../assets/feedBack.png";
import documentManagement from "../../assets/documentManagement.png";
import smartNotifications from "../../assets/smartNotification.png";
import hostels from "../../data/hostelsData";



function Home() {
  
  return (
    <div className="bg-gray-100">
      <div className="max-w-[1700px] m-auto">
        {/* first section */}
        <div className="flex pt-5 flex-col md:flex-row items-center gap-8 px-4 md:px-6 py-12 md:py-16 bg-white rounded-sm">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="font-bold text-4xl md:text-6xl">
              Smart Hostel Management System
            </h1>
            <div className="text-gray-500">
              <p>
                Streamline your hostel operations with our comprehensive
                management system. From room allocation to maintenance tracking,
                we've got you covered.
              </p>
            </div>
            <div>
              <Link
                to="#"
                className=" nav-link inline-block bg-black text-white border-2 border-black px-5 py-2 text-lg md:text-xl  hover:bg-gray-100 hover:text-black transition rounded-md"
              >
                Get Started
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <img
              src={Hostel}
              alt="Hostel Management"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Available Hostels Section */}
        <div className="py-10 bg-gray-100">
          <div className="font-bold text-center text-4xl">
            Available Hostels
          </div>
          <div className="text-center text-gray-700 py-3">
            <p>Find the perfect accommodation that suits your needs</p>
          </div>

          {/* Card Grid Section*/}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 p-8">
        {hostels.map((hostel, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              src={hostel.image}
              alt={hostel.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-3">{hostel.name}</h3>
            <p className="text-gray-600">{hostel.description}</p>
            <p className="text-gray-600 font-semibold">{hostel.roomsAvailable} rooms available</p>
            <Link
              to="/sign-up/user"
              state={{hostel}}
              className="block bg-black text-white mt-3 px-4 py-2 text-center rounded-md hover:bg-gray-700"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>

        {/* features */}

        <div className="py-10 bg-white px-4 md:px-6 rounded-sm">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-bold text-center text-3xl md:text-4xl">
              Key Features
            </h2>
            <p className="text-center text-gray-700 py-3">
              Everything you need to manage your hostel efficiently
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      src={mealPlan}
                      alt="Meal Plan"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Meal Plan Management
                    </h3>
                    <p className="text-gray-700 mt-1">
                      Flexible meal plans with dietary preferences and
                      scheduling options
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      src={smartNotifications}
                      alt="Smart Notifications"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Smart Notifications
                    </h3>
                    <p className="text-gray-700 mt-1">
                      Stay updated with personalized alerts and reminders
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      src={feedback}
                      alt="Feedback System"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Feedback System
                    </h3>
                    <p className="text-gray-700 mt-1">
                      Real-time feedback and rating system for continuous
                      improvement
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      src={documentManagement}
                      alt="Document Management"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Document Management
                    </h3>
                    <p className="text-gray-700 mt-1">
                      Secure storage and easy access to important documents
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;