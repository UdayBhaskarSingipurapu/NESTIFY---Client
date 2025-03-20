import React, { useReducer, useState, useEffect } from "react";
import { set, useForm } from "react-hook-form";
import RoomDetails from "./RoomDetails";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { userLoginContext } from "../../contexts/userLoginContext";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";

const HostleListing = () => {
  // const [hoslteId, setHoslteId] = useState(null);
  const [user, setUser] = useState(null);

  // console.log(JSON.parse(sessionStorage.getItem("currHosIdx"))); //currHosIdx
  // console.log(JSON.parse(sessionStorage.getItem("currentHostel"))); //currenthostel

  //This component 

  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem("user")));
  }, []);
  // console.log(user);

  let navigate = useNavigate();

  let { setError } = useContext(userLoginContext);
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function postHostleDetails(hostleDetails) {
    console.log(hostleDetails);
    const formData = new FormData();

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
      let res = await axios.post(
        `https://nestify-backend.vercel.app/hostel/createhostel/${user._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("res", res);
      if (res.status === 200) {
        let data = res.data;
        console.log("data", data);
        sessionStorage.setItem("user", JSON.stringify(data.payload.owner));
        sessionStorage.setItem("hostels", JSON.stringify(data.payload.hostels));
        showSuccessToast(data.message);
        // showSuccessToast("To add room detials check out settings");
        setTimeout(() => {
          navigate("/admin/dashboard");
        }, 4000);
      } else {
        showErrorToast(res.data?.message || "Unknown error occurred");
      }
    } catch (err) {
      showErrorToast(err.response?.data?.message || "An error occurred while saving");
    }
  }
  // Handle Hostle form submission
  function onSubmit(hostleDetails) {
    postHostleDetails(hostleDetails);
  }

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

  return (
    <div className="bg-gray-200 p-7 flex min-h-screen">
      <ToastContainer />
      <div className="m-auto max-w-[1700px] flex flex-wrap flex-cols border-2 border-[#e0e0e0] rounded-md shadow-xl">
        {/* Hostle Listing form*/}
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          {/* Hostle Details */}
          <div className="p-7 rounded-md bg-white">
            <h1 className="text-[#111827] text-3xl font-bold">
              Hostle Details
            </h1>
            <div className="sm:grid sm:grid-cols-1 sm:gap-10 lg:grid-cols-2 flex flex-wrap gap-6 mt-4">
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
                  {...register("hostelname", {
                    required: "Hostel name is required",
                    minLength: { value: 3, message: "Hostel name must be atleast 3 characters" },
                    maxLength:{value:50,message:"Hostel name cannot exceed 50 characters"}
                  })}
                />
                {errors.hostelname && (
                  <span className="text-red-500">{errors.hostelname.message}</span>
                )}
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
                  type="text"
                  id="hostleaddressdno"
                  placeholder="Enter Door No"
                  className="block p-2 border-2 border-[#6B7280] text-xl rounded-md w-full"
                  {...register("hosteldno", {
                    required: "Door No is required",
                    pattern: { value: /^[A-Za-z0-9-]+$/, message: "Invalid format" },
                    maxLength: { value: 10, message: "Cannot exceed 10 characters" },
                  })}
                />
                {errors.hosteldno && (
                <span className="text-red-500">{errors.hosteldno.message}</span> // added
              )}
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
                  type="text"
                  id="hostleaddressStreet"
                  placeholder="Enter Street"
                  className="block p-2 border-2 border-[#6B7280] text-xl rounded-md w-full"
                  {...register("hostelstreet", { required: "Street is required" })}
                />
                {errors.hostelstreet && (
                <span className="text-red-500">{errors.hostelstreet.message}</span> // added
              )}
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
                  type="text"
                  id="hostleaddressCity"
                  placeholder="Enter City"
                  className="block p-2 border-2 border-[#6B7280] text-xl rounded-md w-full"
                  {...register("hostelcity", {
                    required: "City is required",
                    minLength: { value: 2, message: "City must be at least 2 characters" },
                    maxLength: { value: 30, message: "City cannot exceed 30 characters" },
                  })}
                />
                {errors.hostelcity && (
                <span className="text-red-500">{errors.hostelcity.message}</span> // added
              )}
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
                  type="text"
                  id="hostleaddressState"
                  placeholder="Enter State"
                  className="block p-2 border-2 border-[#6B7280] text-xl rounded-md w-full"
                   {...register("hostelstate", { required: "State is required" })}
                />
                {errors.hostelstate && (
                <span className="text-red-500">{errors.hostelstate.message}</span> // added
              )}
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
                    accept="image/jpeg, image/png,image/jpg"
                    className="rounded-md text-center bg-[#a2a5a9] text-white shadow-lg shadow-[#515356] px-3 cursor-pointer w-full"
                    {...register("hostelimg",
                      {
                        required: "Hostel image is required",
                        validate: (value) => {
                        const file = value?.[0];
                        if (!file) return "File is required";
                        if (!["image/jpeg", "image/png", "image/jpg"].includes(file.type)) {
                        return "Only JPEG, JPG, and PNG files are allowed";
                        }
                        if (file.size > 2 * 1024 * 1024) {
                           return "File size must be under 2MB";
                        }
                        return true;
                        },
                      })}
                  />
                   {errors.hostelimg && (
                <span className="text-red-500">{errors.hostelimg.message}</span> // added
              )}
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
          </div>
        </form>
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