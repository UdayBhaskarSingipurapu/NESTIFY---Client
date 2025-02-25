import React, { useState } from "react";

const HostleListing = () => {
  const [rooms, setRooms] = useState([]);
  return (
    <div className="bg-gray-200 p-7">
      {/* Hostle Listing form*/}
      <form action="">
        {/* Hostle Details */}
        <div className="bg-white p-7 rounded-md">
          <h1 className="text-[#111827] text-3xl font-bold">Hostle Details</h1>
          <div className="sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 flex flex-wrap gap-3 mt-4">
            {/* Hostle name */}
            <div className="w-full">
              <label
                htmlFor="hostlename"
                className="text-[#111827] text-lg font-semibold"
              >
                Hostle Name:
              </label>
              <input
                type="text"
                id="hostlename"
                placeholder="Enter Hostle Name"
                className="block p-2 border-2 border-[#6B7280] text-xl rounded-md w-full"
              />
            </div>
            {/* Hostle address - Dno */}
            <div className="w-full">
              <label
                htmlFor="hostleaddressdno"
                className="text-[#111827] text-lg font-semibold"
              >
                Hostle Door-No:
              </label>
              <input
                type=""
                id="hostleaddressdno"
                placeholder="D-No"
                className="block p-2 border-2 border-[#6B7280] text-xl rounded-md w-full"
              />
            </div>
            {/* Hostle address - Street */}
            <div className="w-full">
              <label
                htmlFor="hostleaddressStreet"
                className="text-[#111827] text-lg font-semibold"
              >
                Hostle Street:
              </label>
              <input
                type=""
                id="hostleaddressStreet"
                placeholder="Street"
                className="block p-2 border-2 border-[#6B7280] text-xl rounded-md w-full"
              />
            </div>
            {/* Hostle address - city */}
            <div className="w-full">
              <label
                htmlFor="hostleaddressCity"
                className="text-[#111827] text-lg font-semibold"
              >
                City:
              </label>
              <input
                type=""
                id="hostleaddressCity"
                placeholder="City"
                className="block p-2 border-2 border-[#6B7280] text-xl rounded-md w-full"
              />
            </div>
            {/* Hostle address - state */}
            <div className="w-full">
              <label
                htmlFor="hostleaddressState"
                className="text-[#111827] text-lg font-semibold"
              >
                State:
              </label>
              <input
                type=""
                id="hostleaddressState"
                placeholder="State"
                className="block p-2 border-2 border-[#6B7280] text-xl rounded-md w-full"
              />
            </div>
            {/* Hostle image ->  */}
            <div className="w-full">
              <label
                htmlFor="hostleimage"
                className="text-[#111827] text-lg font-semibold"
              >
                Hostle Image:
              </label>
              <div className="p-2 border-2 border-[#6B7280] text-xl rounded-md w-full flex items-center justify-center flex-wrap">
                <input
                  type="file"
                  id="hostleimage"
                  className="rounded-md text-center bg-[#a2a5a9] text-white shadow-lg shadow-[#515356] px-3 cursor-pointer w-full"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Room Details Entry form */}
        <div className="bg-white p-7 rounded-md mt-6">
          <h1 className="text-[#111827] text-3xl font-bold">Room Details</h1>
          {/* Room Deails From */}
          <form action="">

          </form>
          {/* Rooms Display form */}
          <div className="">
            {
              
            }
          </div>
        </div>
      </form>
    </div>
  );
};

export default HostleListing;

// Hostle name
// Hostle address
// Hostle image
// Dynamic room adding ---->
// Admin id -> sending
