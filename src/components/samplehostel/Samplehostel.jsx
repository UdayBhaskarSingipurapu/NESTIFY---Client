import React from "react";
import { useLocation } from "react-router-dom";

const Samplehostel = () => {
  const location = useLocation();
  const hostel = location.state?.hostel;

  if (!hostel) {
    return <div>No hostel data available</div>;
  }

  return (
    <div className="min-h-screen bg-gray-200 p-6 md:ml-48">
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8 mb-8 ">
      {/* Hostel Name and Description */}
      <h2 className="text-2xl font-bold text-gray-800">{hostel.name}</h2>
      <p className="text-gray-600">{hostel.description}</p>

      {/* Hostel Image */}
      {hostel.image && (
        <img
          src={hostel.image}
          alt="Hostel"
          className="mt-4 w-full h-64 object-cover rounded-lg"
        />
      )}

      {/* Hostel Information */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">
          Hostel Information
        </h3>
        <div className="mt-4 space-y-3 text-gray-700">
          <p>
            <span className="font-semibold">Address:</span> {hostel.address}
          </p>
          <p>
            <span className="font-semibold">Owner's Name:</span> {hostel.ownerName}
          </p>
          <p>
            <span className="font-semibold">Owner's Contact:</span> {hostel.ownerContact}
          </p>
          <p>
            <span className="font-semibold">Laundry Service:</span>{" "}
            <span className={hostel.laundryService ? "text-green-600" : "text-red-600"}>
              {hostel.laundryService ? "Yes" : "No"}
            </span>
          </p>
          <p>
            <span className="font-semibold">Rooms Available:</span> {hostel.roomsAvailable}
          </p>
          <p>
            <span className="font-semibold">Price:</span> ₹{hostel.price}/month
          </p>
        </div>
      </div>

      {/* Room Information */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">
          Room Information
        </h3>
        <div className="mt-4 space-y-4">
          {hostel.rooms.map((room, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <p>
                <span className="font-semibold">Room Number:</span> {room.roomNumber}
              </p>
              <p>
                <span className="font-semibold">Floor:</span> {room.floor}
              </p>
              <p>
                <span className="font-semibold">Room Type:</span> {room.roomType}
              </p>
              <p>
                <span className="font-semibold">Roommate:</span> {room.roommate}
              </p>
              <p>
                <span className="font-semibold">A/C:</span>{" "}
                <span className={room.ac ? "text-green-600" : "text-red-600"}>
                  {room.ac ? "Yes" : "No"}
                </span>
              </p>
              <p>
                <span className="font-semibold">Fee Per Month:</span>{" "}
                <span className="text-blue-600">₹{room.feePerMonth}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Book Now Button */}
      <button
        onClick={() => alert(`Booking ${hostel.name}`)}
        className="w-full bg-black text-white px-4 py-2 mt-6 rounded-md hover:bg-gray-700 transition-colors"
      >
        Book Now
      </button>
      </div>
      </div>
  );
};

export default Samplehostel;