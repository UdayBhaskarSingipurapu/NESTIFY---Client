import React from "react";

const UserRoomDetails = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100 p-6 gap-6 md:ml-48">
      
      {/* Left half with Hostel Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="bg-white p-2 rounded-lg shadow-md">
          <img 
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/4e2c0937764683.574c0b65ccf48.jpg" 
            alt="Hostel" 
            className="w-full h-auto object-cover rounded-lg" 
          />
        </div>
      </div>
      
      {/* Right half with Details */}
      <div className="w-full md:w-1/2 flex justify-center flex-col gap-12">
        {/* Hostel Details */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">Hostel Information:</h2>
          <p><span className="font-semibold">Name:</span> Sunrise Hostel</p>
          <p><span className="font-semibold">Address:</span> 123 Main Street, City, Country</p>
          <p><span className="font-semibold">Owner's Name:</span> John Doe</p>
          <p><span className="font-semibold">Owner's Contact:</span> +91 98765 43210</p>
          <p><span className="font-semibold">Laundry Service:</span> Yes</p>
        </div>

        {/* Room Details */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 border-b pb-2">Room Information:</h3>
          <p><span className="font-semibold">Room Number:</span> 304</p>
          <p><span className="font-semibold">Floor:</span> 3rd Floor</p>
          <p><span className="font-semibold">Room Type:</span> Double Sharing</p>
          <p><span className="font-semibold">Roommate:</span> Michael Brown</p>
          <p><span className="font-semibold">A/C:</span> Yes</p>
          <p><span className="font-semibold">Fee Per Month:</span> ₹8,000</p>
        </div>
      </div>
    </div>
  );
};

export default UserRoomDetails;