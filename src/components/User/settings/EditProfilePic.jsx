import React, { useEffect, useReducer, useState } from "react";
import { userLoginContext } from "../../../contexts/userLoginContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { div, s } from "framer-motion/client";

const initialState = {};

function profileReducer(state, action) {
  switch (action.type) {
    case "update-profilePic": {
      console.log(action.payload);
      return { ...state, profilePic: action.payload};
    }
    case "initialize": {
      return {
        ...state,
        profilePic: action.payload,
      };
    }
    case "clear-form": {
      return { profilePic: "" };
    }
    default: {
      return state;
    }
  }
}

function EditProfilePic() {
  const [profileState, profileDispatch] = useReducer(
    profileReducer,
    initialState
  );
  const[user, setUser] = useState(null);
  const navigate = useNavigate();

  function update() {
    const storedUser = JSON.parse(sessionStorage.getItem("user"));
    setUser(storedUser);
    profileDispatch({ type: "initialize", payload: storedUser.profileImage.url});
  }

  console.log(profileState);

  useEffect(() => {
    update();
    // profileDispatch({ type: "initialize", payload: user });
  }, []);
  // console.log(profileState.profilePic);

  async function userEditReq(profileState) {
    console.log(profileState);
    const formData = new FormData();
    formData.append("profileImage", profileState.profilePic);
    try {
      axios
        .put(
          `https://nestify-backend.vercel.app/user/edit/${user._id}/profileImage`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((obj) => {
          console.log(obj);
          const { message, payload } = obj.data;
          console.log(payload);
        sessionStorage.setItem("user", JSON.stringify(payload));
          update();
          showSuccessToast(message);
          setTimeout(() => {
            navigate("/student-home");
          }, 4000);
        })
        .catch((err) => {
          console.log(err.message);
          showErrorToast(err.message);
        });
    } catch (err) {
      console.log(err.message);
      showErrorToast(err.message);
    }
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

  function handleSubmit(e) {
    e.preventDefault();
    console.log(profileState);
    userEditReq(profileState);
  }

  // console.log(user);
  return (
    <div className="min-h-screen flex justify-center items-center">
      <ToastContainer />
      <div className="flex flex-col border-2 border-gray-200 p-7 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold text-[#111827]">Profile Picture:</h1>
        <div className="bg-white border-2 border-gray-200 rounded-2xl p-3 w-fit m-auto mt-4 hover:shadow-2xl hover:scale-110 hover:duration-500 hover:ease-in-out duration-500">
          <img
            // {...console.log(profileState)}
            src={profileState.profilePic}  
            alt="loading......."
            className="w-70 h-auto rounded-full"
          />
        </div>
        <form action="" onSubmit={handleSubmit}>
          {/* Upload New Profile Picture */}
          <div className="sm:w-[500px] w-full mt-6">
            <label
              className="text-[#111827] text-lg font-semibold "
              htmlFor="profileImage"
            >
              Upload New Profile Picture
              {/* <span className="text-[#ff0011] text-xl font-semibold">* </span> */}
              <span className="text-[#c7c7c7] font-semibold">
                (jpeg,png,gif,bmp,jpg)
              </span>
            </label>
            <div className="border-2 border-dashed border-[#6B7280] p-6 w-full rounded-md hover:bg-gray-100 flex items-center justify-center gap-1">
              <input
                type="file"
                id="profileImage"
                accept="image/jpeg, image/png, image/gif, image/bmp, image/jpg"
                onChange={(e) =>
                  profileDispatch({
                    type: "update-profilePic",
                    payload: e.target.files[0],
                  })
                }
                className="hover:text-blue-600"
              />
              <span className="font-semibold">Or Drop Down</span>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="bg-[#3b82f6] hover:bg-[#1d4ed8] text-white font-semibold py-2 px-4 rounded-md mt-4"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
    // <div className="min-h-screen bg-amber-100">

    // </div>
  );
}

export default EditProfilePic;
