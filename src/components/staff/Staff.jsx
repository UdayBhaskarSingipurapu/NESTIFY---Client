import React from "react";
import { Link } from "react-router-dom";
import hostels from "../../data/hostelsData";

const StudentHome = () => {
  return (
    <div className="p-8 bg-gray-100 ">
   
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
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

          
            <p className="text-gray-600 mt-2">
              <span className="font-semibold">Owner:</span> {hostel.ownerName}
            </p>

          
            <p className="text-gray-600">
              <span className="font-semibold">Contact:</span> {hostel.ownerContact}
            </p>

          
            <p className="text-gray-600 font-semibold">
              {hostel.roomsAvailable} rooms available
            </p>

          
            <Link
              to="/samplehostel"
              state={{ hostel }}
              className="block bg-black text-white mt-3 px-4 py-2 text-center rounded-md hover:bg-gray-700"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentHome;