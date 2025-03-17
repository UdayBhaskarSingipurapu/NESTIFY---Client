import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { userLoginContext } from "../../contexts/userLoginContext";
import { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";

const RoomDetails = () => {
  const [rooms, setRooms] = useState([]);
  // const [hoslteId, setHoslteId] = useState(null);
  const [saved, setSaved] = useState(false);
  // const location = useLocation();
  const [currentHostel, setCurrentHostel] = useState(null);
  const [user, setUser] = useState(null);
  const [hostels, SetHostels] = useState([]);
  const [currHosIdx, setCurrHosIdx] = useState(-1);

  // console.log(JSON.parse(sessionStorage.getItem("currentHostel"))); //currenthostel
  //if(currentHostel === null || currentHostelIdx === -1) {
  //    if(hostels.size() == 0) {
  //        add hostel first
  //    } else {
  //        select hostel first
  //    }
  //} else only {
  //    you are allowed to add rooms to the currentHostel
  //}

  useEffect(() => {
    updateFunction();
  }, []);

  function updateFunction() {
    setCurrentHostel(JSON.parse(sessionStorage.getItem("currentHostel")));
    setUser(JSON.parse(sessionStorage.getItem("user")));
    SetHostels(JSON.parse(sessionStorage.getItem("hostels")));
    setCurrHosIdx(JSON.parse(sessionStorage.getItem("currHosIdx")));
    // console.log(currHosIdx, user, hostels, currentHostel);
  }

  let {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  let { setError } = useContext(userLoginContext);

  async function onSave(roomDetails) {
    // console.log(roomDetails);
    setRooms([...rooms, roomDetails]);
    // setSaved(true);
    // setTimeout(() => {
    //   setSaved(false);
    // }, 1000);
    reset();
  }
  // console.log(hostels[Number(sessionStorage.getItem("currHosIdx"))]);
  // console.log(user._id);
  // console.log(hostels[Number()]);
  // console.log();
  async function renderChanges() {
    // console.log(user._id);
    // console.log(`http://localhost:5050/hostel/owner/${user._id}`);
    try {
      await axios
        .get(`https://nestify-backend.vercel.app/hostel/owner/${user._id}`)
        .then((res) => {
          // console.log(res);
          sessionStorage.setItem(
            "user",
            JSON.stringify(res.data.payload.owner)
          );
          sessionStorage.setItem(
            "hostels",
            JSON.stringify(res.data.payload.hostels)
          );
          updateFunction();
          // console.log(hostels[Number(sessionStorage.getItem("currHosIdx"))]);
          let updatedHostel =
            hostels[Number(sessionStorage.getItem("currHosIdx"))];
          // console.log(updatedHostel);
          sessionStorage.setItem(
            "currentHostel",
            JSON.stringify(updatedHostel)
          );
          setCurrentHostel;
          return "success";
        })
        .catch((err) => {
          // console.log(err);
          return "error";
        });
    } catch (err) {
      // console.log(err);
      return "error";
    }
  }

  async function onSubmit(rooms) {
    // console.log("on submit");
    // console.log(rooms);
    try {
      // console.log("inside the try");
      // console.log(currentHostel._id);

      await axios
        .post(`https://nestify-backend.vercel.app/room/${currentHostel._id}/add`, rooms)
        .then((res) => {
          // console.log(res);
          const result = renderChanges();
          try {
            if (result == "error") {
              throw new Error("Error rendering data");
            } else {
              showSuccessToast(res.data.message);
            }
          } catch (err) {
            showErrorToast(err.message);
          }
        })
        .catch((err) => {
          // console.log(err.message);
          showErrorToast(err.message);
        });
    } catch (err) {
      showErrorToast(err.message || "An error occurred while saving");
    }
    setRooms([]);
  }
  // console.log(hostels, currHosIdx, );
  // console.log(hostels.length);

  const showSuccessToast = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 3000, // Closes after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const showErrorToast = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

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
      <ToastContainer />
      {currHosIdx === -1 || currentHostel === null ? (
        hostels.length === 0 ? (
          <div className="flex justify-center items-center h-screen">
            {/* {console.log("yes")}
            {showSuccessToast("Please add a hostel to add rooms in Dashboard")} */}
            <Link
              className="bg-gray-500 px-8 py-4 rounded-xl text-white hover:bg-gray-600 hover:shadow-xl"
              to="/admin/hostel-listing"
            >
              Add Hostle
            </Link>
          </div>
        ) : (
          <div className="flex justify-center items-center h-screen flex-col gap-4">
            {/* {
              console.log("noo")
            }
            {showSuccessToast(
              "Please select a hostel to add rooms in Dashboard"
            )} */}
            <p className="text-3xl font-semibold text-gray-600">
              Please select a hostel to add rooms in Dashboard
            </p>
            <Link
              className="bg-gray-500 px-8 py-4 rounded-xl text-white hover:bg-gray-600 hover:shadow-xl text-2xl"
              to={"/admin/dashboard"}
            >
              go to dashboard
            </Link>
          </div>
        )
      ) : (
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
                  {...register("roomNumber")}
                  // {...(saved &&  {value: ""})}
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
                  {...register("roomCapacity")}
                  // {...(saved && { value: "" })}
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
                  type="text"
                  id="ac"
                  placeholder="Yes/No"
                  className="block p-2 border-2 border-[#6B7280] text-xl rounded-md w-full"
                  {...register("airConditioned")}
                  // {...(saved && { value: "" })}
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
                  // {...(saved && { value: "" })}
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
      )}
    </div>
  );
};

export default RoomDetails;
