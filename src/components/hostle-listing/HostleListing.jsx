import React, { useReducer, useState, useEffect } from "react";
import { set, useForm } from "react-hook-form";
import RoomDetails from "./RoomDetails";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { userLoginContext } from "../../contexts/userLoginContext";
import { useContext } from "react";

const HostleListing = () => {
  const [hoslteId, setHoslteId] = useState(null);
  const [hostleDetailsSaved, setHostleDetailsSaved] = useState(false);
  const user = JSON.parse(sessionStorage.getItem("user"));
  
  let navigate = useNavigate();

  let {setError} = useContext(userLoginContext);
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  useEffect(() => {
    if(hoslteId) {
      navigate(`${hoslteId}/room-details`, { state: { hostleId: hoslteId } }); 
    }
  }, [hoslteId]);

  async function postHostleDetails(hostleDetails) {
    console.log(hostleDetails);
    const formData = new FormData();
    // let res = await fetch("http://localhost:3000/hostels", { 
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(hostleDetails),
    // });

    // Append text fields
    formData.append("hostelname", hostleDetails.hostelname);
    formData.append("doorNo", hostleDetails.hosteldno);
    formData.append("street", hostleDetails.hostelstreet);
    formData.append("city", hostleDetails.hostelcity);
    formData.append("state", hostleDetails.hostelstate);

    // Append file. Make sure hostleDetails.profileImage is a File object, not a Filelist.
    // If you're using react-hook-form, you can set the file like this:
    // console.log(hostleDetails.hostleimg[0]);
    formData.append("hostelImage", hostleDetails.hostelimg[0]);
    console.log(formData);
    try {
      console.log(user); 
      let res = await axios.post(
        `http://localhost:5050/hostel/createhostel/${user._id}`,
        formData
      );
      console.log(res);
      if (res.status === 200) {
        let data = res.data;
        console.log(data);
        setHoslteId(data.payload._id);
      } else {
        setError(res.data?.message || "Unknown error occurred");
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred while saving");
    }
  }
  // Handle Hostle form submission
  function onSubmit(hostleDetails) {
    postHostleDetails(hostleDetails);
  }

  return (
    <div className="bg-gray-200 p-7">
      <div className="m-auto sm:grid sm:grid-cols-1 max-w-[1700px] flex flex-wrap flex-cols w-full">
        {/* Hostle Listing form*/}
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          {/* Hostle Details */}
          <div
            className={`${
              hostleDetailsSaved ? "bg-gray-400" : "bg-white"
            } p-7 rounded-md`}
          >
            <h1 className="text-[#111827] text-3xl font-bold">
              Hostle Details
            </h1>
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
                  {...register("hostelname")}
                  // value={input}
                  // onChange={(e) => {
                  //   if (!hostleDetailsSaved) {
                  //     setInput(e.target.value);
                  //   }
                  // }}
                  {...(hostleDetailsSaved && { disabled: true })}
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
                  {...register("hosteldno")}
                  {...(hostleDetailsSaved && { disabled: true })}
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
                  {...register("hostelstreet")}
                  {...(hostleDetailsSaved && { disabled: true })}
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
                  {...register("hostelcity")}
                  {...(hostleDetailsSaved && { disabled: true })}
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
                  {...register("hostelstate")}
                  {...(hostleDetailsSaved && { disabled: true })}
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
                    accept="image/jpeg, image/png, image/gif, image/bmp, image/jpg"
                    className="rounded-md text-center bg-[#a2a5a9] text-white shadow-lg shadow-[#515356] px-3 cursor-pointer w-full"
                    {...register("hostelimg")}
                    {...(hostleDetailsSaved && { disabled: true })}
                  />
                </div>
              </div>
            </div>
            {/* Save button*/}
            <button
              type="submit"
              className="mt-4 px-4 py-2 text-xl rounded-lg bg-green-600 text-white hover:bg-green-500 cursor-pointer"
            >
              Save
            </button>
            <div className="w-full flex items-center justify-center"></div>
            {/* Edit button*/}
            {/* <span
              className="ml-6 px-4 py-2 text-xl rounded-lg bg-red-700 text-white hover:bg-red-500 cursor-pointer"
              onClick={() => {
                setHostleDetailsSaved(false);
              }}
            >
              Edit
            </span> */}
          </div>
        </form>
        {/* Room Details Entry form */}
        {/* <RoomDetails /> */}
        {/* <span className="mt-4 px-12 py-4 text-xl rounded-lg bg-green-600 text-white hover:bg-green-500 cursor-pointer w-fit m-auto" >SUBMIT</span> */}
      </div>
    </div>
  );
};

export default HostleListing;

// Dynamic room adding ---->
// Admin id -> sending

//initial assumption -> all the rooms are like empty
//initializations -> filled beds = 0, roomates = []
//whey user sends the request and if accepted it "adds 1 to the filled rooms" and adds that particular student into the "roomates" array
