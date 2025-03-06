import { useState } from "react";
import Hostel1 from "../../assets/Hostel1.png";

const Samplehostel = () => {
  const hostel = {
    hostelname: "Green Valley Hostel",
    addressLine: {
      doorNo: "12A",
      street: "Main Street",
      city: "Springfield",
      state: "California",
    },
    hostelimage: {
      url: Hostel1,
      filename: "image1.png",
    },
    rooms: ["Room 101", "Room 102", "Room 103"],
    owner: "John Doe",
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-800">{hostel.hostelname}</h2>
      <p className="text-gray-600">
        {hostel.addressLine.doorNo}, {hostel.addressLine.street}, {hostel.addressLine.city}, {hostel.addressLine.state}
      </p>
      {hostel.hostelimage?.url && (
        <img
          src={hostel.hostelimage.url}
          alt="Hostel"
          className="mt-4 w-full h-64 object-cover rounded-lg"
        />
      )}
      <h3 className="text-lg font-semibold mt-4">Rooms:</h3>
      <ul className="list-disc pl-5">
        {hostel.rooms.map((room, index) => (
          <li key={index}>{room}</li>
        ))}
      </ul>
      <h3 className="text-lg font-semibold mt-4">Owner:</h3>
      <p className="text-gray-700">{hostel.owner}</p>
    </div>
  );
};

export default Samplehostel;
