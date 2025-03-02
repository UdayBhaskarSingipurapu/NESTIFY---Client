import React from "react";
import Hostel from "../../assets/Hostel.png";

const rooms = [
  {
    title: "Shared Dormitory",
    description:
      "Our spacious 6-bed dormitories offer comfort and privacy with individual reading lights and secure lockers.",
    price: "$25/night",
    image: "https://source.unsplash.com/400x300/?bunkbeds,hostel",
  },
  {
    title: "Private Twin Room",
    description:
      "Perfect for friends or couples, our twin rooms feature two comfortable single beds and a private bathroom.",
    price: "$60/night",
    image: "https://source.unsplash.com/400x300/?hotelroom,twinbed",
  },
  {
    title: "Family Room",
    description:
      "Spacious rooms with a double bed and bunk beds, ideal for families or small groups traveling together.",
    price: "$85/night",
    image: "https://source.unsplash.com/400x300/?hotelroom,family",
  },
];

const RoomCard = ({ room }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm">
      <img src={room.image} alt={room.title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-semibold">{room.title}</h3>
        <p className="text-gray-600 text-sm mt-2">{room.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-green-600 font-semibold">{room.price}</span>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg">Book Now</button>
        </div>
      </div>
    </div>
  );
};

const Samplehostel = () => {
  return (
    <div className="relative w-screen h-screen">
      <img src={Hostel} alt="Hostel" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black px-4">
        <h1 className="text-4xl md:text-6xl font-bold">Your Home Away From Home</h1>
        <p className="text-lg md:text-xl mt-4">Experience authentic local culture with modern comfort at affordable prices</p>
        <div className="mt-6 flex gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-md hover:bg-blue-700 transition">Book Your Stay</button>
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg text-lg font-medium shadow-md hover:bg-yellow-600 transition">Take a Tour</button>
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
      <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Our Rooms</h2>
          <p className="text-gray-500 mt-2 mb-6">Comfortable accommodations for every type of traveler</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {rooms.map((room, index) => (
              <RoomCard key={index} room={room} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Samplehostel;
