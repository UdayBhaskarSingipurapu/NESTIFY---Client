import React from "react";

const UserRoomDetails = () => {
  return (
    <div className="min-h-screen bg-gray-200 p-6 md:ml-48">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-8 mb-8 p-6">
        {/* Hostel Name and Description */}
        <h2 className="text-2xl font-bold text-gray-800">Sunrise Hostel</h2>
        <p className="text-gray-600">
          Modern facilities with 24/7 security and high-speed internet
        </p>

        {/* Hostel Image */}
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/4e2c0937764683.574c0b65ccf48.jpg"
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
              <span className="font-semibold">Address:</span> 123 Main Street, City, Country
            </p>
            <p>
              <span className="font-semibold">Owner's Name:</span> John Doe
            </p>
            <p>
              <span className="font-semibold">Owner's Contact:</span> +91 98765 43210
            </p>
            <p>
              <span className="font-semibold">Laundry Service:</span>{" "}
              <span className="text-green-600">Yes</span>
            </p>
          </div>
        </div>

        {/* Room Information */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">
            Room Information
          </h3>
          <div className="mt-4 space-y-3 text-gray-700">
            <p>
              <span className="font-semibold">Room Number:</span> 304
            </p>
            <p>
              <span className="font-semibold">Floor:</span> 3rd Floor
            </p>
            <p>
              <span className="font-semibold">Room Type:</span> Double Sharing
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
            </p>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default UserRoomDetails;