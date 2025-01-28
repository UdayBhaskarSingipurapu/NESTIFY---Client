import React from "react";
import Hostel from "../assets/Hostel.png";
import Hostel1 from "../assets/Hostel1.png";
import Hostel2 from "../assets/Hostel2.png";
import Hostel3 from "../assets/Hostel3.png";
import totroomslogo from "../assets/totroomslogo.png"


const hostels = [
    {
        id: 1,
        name: "Sunrise Hostel",
        description: "Modern facilities with 24/7 security and high-speed internet",
        image: Hostel1,
        roomsAvailable: 15,
    },
    {
        id: 2,
        name: "Central Park Hostel",
        description: "Prime location with excellent amenities and meal plans",
        image: Hostel2,
        roomsAvailable:8,
    },
    {
        id: 3,
        name: "Riverside Residence",
        description: "Peaceful environment with premium facilities",
        image: Hostel3,
        roomsAvailable:12,
    },
];

function Home() {
    return (
        <div>

            {/* first section */}
            <div className="flex items-center">
               
                <div className="px-6  space-y-6 w-1/2">
                    <div className="font-bold text-6xl">
                        Smart Hostel Management System
                    </div>
                    <div className="text-gray-500">
                        <p>Streamline your hostel operations with our comprehensive management system. From room allocation to maintenance tracking, we've got you covered.</p>
                    </div>
                    <div>
                        <a
                            href="#"
                            className="bg-black text-1xl text-white border-2 border-black px-5 py-2 cursor-pointer hover:bg-gray-100 hover:text-black transition"
                        >
                            Get Started
                        </a>
                    </div>
                </div>

                
                <div className="w-1/2 overflow-hidden">
                    <img src={Hostel} alt="image not found" className="h-auto w-full " />
                </div>
            </div>


            {/* Available Hostels Section */}
            <div className="py-10 bg-gray-100">
                <div className="font-bold text-center text-2xl">Available Hostels</div>
                <div className="text-center text-gray-500 py-3">
                    <p>Find the perfect accommodation that suits your needs</p>
                </div>

                {/* Card Grid Section*/}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 mt-6">
                    {hostels.map((hostel) => (
                        <div
                            key={hostel.id}
                            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            <img src={hostel.image} alt={hostel.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold text-gray-800">{hostel.name}</h2>
                                <p className="text-gray-600 mt-2">{hostel.description}</p>

                                <div className="flex justify-between items-center gap-10">
                                    
                                    <div className="flex items-center gap-2 font-bold py-3">
                                        <img src={totroomslogo} alt="" className="w-6 h-6" />
                                        <div>{hostel.roomsAvailable} rooms available</div>
                                    </div>

                                    <div>
                                        <button className="mt-4 px-4 py-2 bg-black border-2 text-white rounded-lg hover:bg-gray-100 hover:text-black transition">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                                

                            </div>
                        </div>
                    ))}
                </div>

            </div>



        </div>
    );
}

export default Home;
