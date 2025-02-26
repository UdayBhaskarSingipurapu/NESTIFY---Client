import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const RoomDetails = () => {
  const [rooms, setRooms] = useState([]);
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSave(roomDetails) {
    setRooms([...rooms, roomDetails]);
    console.log(roomDetails);
  }

  function randomColor() {
    let colorList = [
      "bg-blue-200",
      "bg-yellow-200",
      "bg-pink-200",
      "bg-indigo-200",
      "bg-teal-200",
      "bg-orange-200",
      "bg-purple-200",
      "bg-cyan-200",
      "bg-rose-200",
      "bg-lime-200",
      "bg-amber-200",
      "bg-sky-200",
      "bg-emerald-200",
      "bg-fuchsia-200",
      "bg-violet-200",
    ];
    return colorList[Math.floor(Math.random() * colorList.length)];
  }

  return (
    <div className="bg-white p-7  rounded-md mt-6 max">
      <h1 className="text-[#111827] text-3xl font-bold">Room Details</h1>
      {/* Room Deails From */}
      <form action="" onSubmit={handleSubmit(onSave)}>
        <div className="mt-4 lg:grid lg:grid-cols-2 lg:gap-4 flex flex-wrap gap-4">
          {/* Room No */}
          <div className="w-full">
            <label
              htmlFor="roomnumber"
              className="text-[#111827] text-lg font-semibold"
            >
              Room Number:
            </label>
            <input
              type="text"
              id="roomnumber"
              placeholder="Enter Room Number"
              className="block p-2 border-2 border-[#6B7280] text-xl rounded-md w-full"
              {...register("roomnumber")}
            />
          </div>

          {/* Hostle capacity */}
          <div className="w-full">
            <label
              htmlFor="roomcapacity"
              className="text-[#111827] text-lg font-semibold"
            >
              Hostle Capacity:{" "}
              <span className="text-sm text-gray-400">
                (Enter the number of beds in this room)
              </span>
            </label>
            <input
              type="number"
              id="roomcapacity"
              placeholder="Enter the number"
              className="block p-2 border-2 border-[#6B7280] text-xl rounded-md w-full"
              {...register("roomcapacity")}
            />
          </div>

          {/* A/c  */}
          <div className="w-full">
            <label
              htmlFor="ac"
              className="text-[#111827] text-lg font-semibold"
            >
              A/C:
            </label>
            <input
              type="string"
              id="ac"
              placeholder="Yes/No"
              className="block p-2 border-2 border-[#6B7280] text-xl rounded-md w-full"
              {...register("ac")}
            />
          </div>

          {/* Fees  */}
          <div className="w-full">
            <label
              htmlFor="fees"
              className="text-[#111827] text-lg font-semibold"
            >
              Fees:
            </label>
            <input
              type="number"
              id="fees"
              placeholder="Enter fee per month"
              className="block p-2 border-2 border-[#6B7280] text-xl rounded-md w-full"
              {...register("fees")}
            />
          </div>
        </div>
        {/* Save */}
        <button
          className="mt-4 px-4 py-2 text-xl rounded-lg bg-[#111827] text-white hover:bg-gray-700 cursor-pointer"
          type="submit"
        >
          save
        </button>
      </form>
      {/* Rooms Display form */}
      {rooms.length > 0 ? (
        <div className="flex gap-4 flex-wrap sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 w-full">
          {rooms.map((room) => {
            return (
              <div
                className={`flex flex-col gap-2 ${randomColor()} p-4 rounded-lg items-center justify-center w-full`}
              >
                <span className="bg-white p-2 rounded-md w-full">
                  <span>RoomNumber:</span>
                  <span>{room.roomnumber}</span>
                </span>
                <span className="bg-white p-2 rounded-md w-full">
                  <span>Room Capacity:</span>
                  <span>{room.roomcapacity}</span>
                </span>
                <span className="bg-white p-2 rounded-md w-full">
                  <span>A/C:</span>
                  <span>{room.ac}</span>
                </span>
                <span className="bg-white p-2 rounded-md w-full">
                  <span>Fees:</span>
                  <span>{room.fees}</span>
                </span>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-2xl text-red-900 mt-4 text-center">
          No rooms added up to now
        </div>
      )}
    </div>
  );
};

export default RoomDetails;
