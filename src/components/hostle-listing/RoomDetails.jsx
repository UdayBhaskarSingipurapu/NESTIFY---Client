import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { userLoginContext } from "../../contexts/userLoginContext";
import { useContext } from "react";

const RoomDetails = () => {
  const [rooms, setRooms] = useState([]);
  const [hoslteId, setHoslteId] = useState(null);
  const [saved, setSaved] = useState(false);
  const location = useLocation();

  // useEffect(() => {
  //   setHoslteId(location.state.hostleId);
  // }, [hoslteId]);
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let { setError } = useContext(userLoginContext);

  async function onSave(roomDetails) {
    console.log(roomDetails);
    setRooms([...rooms, roomDetails]);
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
    }, 1000);
  }

  async function onSubmit(rooms) {
    console.log("on submit");
    console.log(rooms);
    try {
      let res = axios.post(
        `http://localhost:5050/room/id:${hoslteId}/add`,
        rooms
      );
      if (res.status === 200) {
        let data = res.data;
        console.log(data);
        Navigate("admin/settings/edit-hostleDetails");
      } else {
        setError(res.data?.message || "unknown error occured");
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred while saving");
    }
  }

  function randomColor() {
    let colorList = [
      "bg-blue-100",
      "bg-yellow-100",
      "bg-pink-100",
      "bg-indigo-100",
      "bg-teal-100",
      "bg-orange-100",
      "bg-purple-100",
      "bg-cyan-100",
      "bg-rose-100",
      "bg-lime-100",
      "bg-amber-100",
      "bg-sky-100",
      "bg-emerald-100",
      "bg-fuchsia-100",
      "bg-violet-100",
    ];
    return colorList[Math.floor(Math.random() * colorList.length)];
  }

  return (
    <div className="bg-gray-200 p-7 min-h-screen">
      <div className="bg-white p-7  rounded-md max">
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
                {...(saved && { value: "" })}
              />
            </div>

            {/* Hostle capacity */}
            <div className="w-full">
              <label
                htmlFor="roomcapacity"
                className="text-[#111827] text-lg font-semibold"
              >
                Room Capacity:{" "}
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
                {...(saved && { value: "" })}
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
                {...(saved && { value: "" })}
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
                {...(saved && { value: "" })}
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
            {rooms.map((room, index) => {
              return (
                <div
                  className={`flex flex-col gap-2 ${randomColor()} p-4 rounded-lg items-center justify-center w-full`}
                  key={index}
                >
                  <span className="bg-white p-2 rounded-md w-full flex justify-between">
                    <span className="text-lg font-semibold">RoomNumber:</span>
                    <span className="text-lg font-semibold">
                      {room.roomNumber}
                    </span>
                  </span>
                  <span className="bg-white p-2 rounded-md w-full flex justify-between">
                    <span className="text-lg font-semibold">
                      Room Capacity:
                    </span>
                    <span className="text-lg font-semibold">
                      {room.roomCapacity}
                    </span>
                  </span>
                  <span className="bg-white p-2 rounded-md w-full flex justify-between">
                    <span className="text-lg font-semibold">A/C:</span>
                    <span className="text-lg font-semibold">
                      {room.airConditioned}
                    </span>
                  </span>
                  <span className="bg-white p-2 rounded-md w-full flex justify-between">
                    <span className="text-lg font-semibold">Fees:</span>
                    <span className="text-lg font-semibold">{room.fees}</span>
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
        <button
          onClick={() => {
            onSubmit(rooms);
          }}
          className="m-auto bg-green-400 rounded-md mt-4 px-8 py-4 w-fit"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default RoomDetails;
