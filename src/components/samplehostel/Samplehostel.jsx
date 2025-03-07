import React from "react";
import { useLocation } from "react-router-dom";

const Samplehostel = () => {
  const location = useLocation();
  const hostel = location.state?.hostel;

  if (!hostel) {
    return <div>No hostel data available</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-800">{hostel.name}</h2>
      <p className="text-gray-600">{hostel.description}</p>
      {hostel.image && (
        <img
          src={hostel.image}
          alt="Hostel"
          className="mt-4 w-full h-64 object-cover rounded-lg"
        />
      )}
      <h3 className="text-lg font-semibold mt-4">Rooms Available:</h3>
      <p className="text-gray-700">{hostel.roomsAvailable}</p>
      <h3 className="text-lg font-semibold mt-4">Price:</h3>
      <p className="text-gray-700">₹{hostel.price}/month</p>

      <button
        onClick={() => alert(`Booking ${hostel.name}`)}
        className="w-full bg-black text-white px-4 py-2 mt-6 rounded-md hover:bg-gray-500 transition-colors"
      >
        Book Now
      </button>
    </div>
  );
};

export default Samplehostel;