import { div } from "framer-motion/client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const UserRoomDetails = () => {
  const [currentHostel, setCurrentHostel] = useState(null);
  const [currentRoom, setCurrentRoom] = useState(null);
  const [user, setUser] = useState(null);

  function updateDetails() {
    setCurrentHostel(JSON.parse(sessionStorage.getItem("currentHostel")));
    setCurrentRoom(JSON.parse(sessionStorage.getItem("currentRoom")));
    setUser(JSON.parse(sessionStorage.getItem("user")));
  }

  useEffect(() => {
    updateDetails();
  }, []);
  

  return (
    <div className="min-h-screen bg-gray-200 p-6 md:ml-48">
      {currentHostel === null || currentRoom === null ? (
        <div className="flex items-center justify-center h-screen flex-col gap-7">
          <p className="text-2xl">
            you must be in a hostel to view this room details page
          </p>
          <Link
            className="bg-gray-500 px-6 py-4 text-white text-2xl rounded-xl"
            to={"/student-home"}
          >
            Join Hostel
          </Link>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-8 mb-8 p-6">
          {/* Hostel Name and Description */}
          <h2 className="text-2xl font-bold text-gray-800">
            {currentHostel ? currentHostel.hostelname : "loading..."}
          </h2>
          <p className="text-gray-600">
            Modern facilities with 24/7 security and high-speed internet
          </p>

          {/* Hostel Image */}
          <img
            src={currentHostel ? currentHostel.hostelimage : "loading..."}
            alt="Hostel"
            className="mt-4 w-full h-64 object-cover rounded-lg"
          />

          {/* Hostel Information */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">
              Hostel Information
            </h3>
            <div className="mt-4 space-y-3 text-gray-700">
              <p>
                <span className="font-semibold">Address:</span>{" "}
                {currentHostel
                  ? currentHostel.addressLine.doorNo
                  : "loading..."}
                ,{" "}
                {currentHostel
                  ? currentHostel.addressLine.street
                  : "loading..."}
                ,{" "}
                {currentHostel ? currentHostel.addressLine.city : "loading..."},{" "}
                {currentHostel ? currentHostel.addressLine.state : "loading..."}
                , India
              </p>
              <p>
                <span className="font-semibold">Owner's Name:</span>{" "}
                {currentHostel ? currentHostel.onwer.username : "loading..."}
              </p>
              <p>
                <span className="font-semibold">Owner's Contact:</span>{" "}
                +01xxxxxxxx // this field is not present in the database
              </p>
              <p>
                <span className="font-semibold">Laundry Service:</span>{" "}
                <span className="text-green-600">Yes</span> //this field is not
                present the db
              </p>
            </div>
          </div>

          {/* Room Information */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">
              Room Information
            </h3>
            <div className="mt-4 space-y-3 text-gray-700">
              {/* <p>
                <span className="font-semibold">Room Number:</span>{" "}
                {room ? room.roomNumber : "loading..."}
              </p>
              <p>
                <span className="font-semibold">Room capacity:</span>
                {room ? room.roomCapacity : "loading..."}
              </p>
              <p>
                <span className="font-semibold">Roommate:</span> Michael Brown
              </p>
              <p>
                <span className="font-semibold">A/C:</span>{" "}
                <span className="text-green-600">Yes</span>
              </p>
              <p>
                <span className="font-semibold">Fee Per Month:</span>{" "}
                <span className="text-blue-600">₹8,000</span>
              </p> */}
              <p className="text-gray-700 font-medium">
                Room No: {room.roomNumber}
              </p>
              <p className="text-gray-600">Total beds: {room.roomCapacity}</p>
              <p className="text-gray-600">Beds filled: {room.occupied}</p>
              <p className="text-gray-600">
                Beds available: {room.roomCapacity - room.occupied}
              </p>
              <p className="text-gray-600">Room Price: {room.fees}</p>
              <p className="text-gray-600">
                AC service:{" "}
                {room.airConditioned ? "Available" : "Not available"}
              </p>
              {/* <p className="text-gray-600">
                Roommate: {room.roommates ? "Available" : "Not available"}
              </p> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserRoomDetails;
