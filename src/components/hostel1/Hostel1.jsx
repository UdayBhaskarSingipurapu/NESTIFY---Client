import React from "react";
import Hostel from "../../assets/Hostel.png";

function Hostel1() {
  return (
    <div className="relative w-screen h-screen">
      
      <img
        src={Hostel}
        alt="Hostel"
        className="w-full h-full object-cover"
      />
      
      <div className="absolute inset-0  flex flex-col items-center justify-center text-center text-Black px-4">
        <h1 className="text-4xl md:text-6xl font-bold">Your Home Away From Home</h1>
        <p className="text-lg md:text-xl mt-4">
          Experience authentic local culture with modern comfort at affordable prices
        </p>
        
        <div className="mt-6 flex gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-md hover:bg-blue-700 transition">
            Book Your Stay
          </button>
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg text-lg font-medium shadow-md hover:bg-yellow-600 transition">
            Take a Tour
          </button>
        </div>
      </div>


      <div className="absolute bottom-0 w-full bg-white py-6 shadow-md grid grid-cols-1 md:grid-cols-3 text-center">
        <div>
          <h3 className="font-bold">Best Location</h3>
          <p className="text-gray-600">Central to all attractions</p>
        </div>
        <div>
          <h3 className="font-bold">Free Breakfast</h3>
          <p className="text-gray-600">Start your day right</p>
        </div>
        <div>
          <h3 className="font-bold">24/7 Support</h3>
          <p className="text-gray-600">Always here to help</p>
        </div>
          </div>
          
         
      <div className="py-12 bg-gray-100 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Amenities</h2>
        <div className="gap-6 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h3 className="font-bold text-xl">Free WiFi</h3>
            <p className="text-gray-600">Stay connected with high-speed internet.</p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h3 className="font-bold text-xl">Laundry Service</h3>
            <p className="text-gray-600">Convenient laundry services available.</p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h3 className="font-bold text-xl">Kitchen Access</h3>
            <p className="text-gray-600">Fully equipped shared kitchen for guests.</p>
                  </div>
            <div className="p-4 bg-white shadow-md rounded-lg">
            <h3 className="font-bold text-xl">Secure Lockers</h3>
            <p className="text-gray-600">Keep your valuables safe with our personal security lockers</p>
                  </div>
                   <div className="p-4 bg-white shadow-md rounded-lg">
            <h3 className="font-bold text-xl">Community Events</h3>
            <p className="text-gray-600">Join our regular social events and meet fellow travelers from around the world.</p>
                  </div>
            <div className="p-4 bg-white shadow-md rounded-lg">
            <h3 className="font-bold text-xl">Prime Locations</h3>
            <p className="text-gray-600">Located in the heart of the city, close to major attractions and public transport.</p>
          </div>
        </div>
          </div>
          
    </div>
  );
}

export default Hostel1;
