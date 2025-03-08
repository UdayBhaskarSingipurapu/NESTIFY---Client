import React, { useContext, useEffect, useReducer } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { userLoginContext } from "../../../contexts/userLoginContext";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const initialState = {};

function inputReducer(state, action) {
  switch (action.type) {
    case "update-username": {
      return { ...state, username: action.payload };
    }
    case "update-email": {
      return { ...state, email: action.payload };
    }
    case "update-contact": {
      return { ...state, contact: action.payload };
    }
    case "update-parentName": {
      return { ...state, parentName: action.payload };
    }
    case "update-parentContact": {
      return { ...state, parentContact: action.payload };
    }
    case "initialize": {
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
        contact: action.payload.contact,
        parentName: action.payload.parentName,
        parentContact: action.payload.parentContact,
      };
    }
    default: {
      return state;
    }
  }
}
const EditForm = () => {
  let { user, setError, Error, setUser } = useContext(userLoginContext);
  const [inputState, inputDispatch] = useReducer(inputReducer, initialState);
  let navigate = useNavigate();
  useEffect(() => {
    inputDispatch({ type: "initialize", payload: user });
  }, []);
  // console.log(inputState);
  // console.log(user);

  async function userEditReq(userCred) {
    // console.log(userCred);
    try {
      axios
        .put(`http://localhost:5050/user/edit/${user._id}/personal`, userCred)
        .then((obj) => {
          const { message, payload } = obj.data;
          // console.log(payload);
          if (message === 'User updated successfully') {
            setUser(payload);
            sessionStorage.setItem("user", JSON.stringify(payload));
            showSuccessToast("User updated successfully");
            setTimeout(() => {
              navigate("/student-home");
            }, 4000);
          } else {
            setError(message);
            showErrorToast(Error);
          }
        })
        .catch((err) => {
          console.log(err.message);
          setError(err.message);
          showErrorToast(Error);
        });
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      showErrorToast(Error);
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
    userEditReq(inputState);
  }

  return (
    <div className="min-h-screen">
      <div className="flex flex-col p-5 gap-5 bg-white rounded-bl-md rounded-br-md md:ml-41 mt-4">
        <ToastContainer />
        <form
          action=""
          className="flex flex-col gap-5 items-center border-2 border-[#bbbbbb] sm:w-fit sm:m-auto p-7 rounded-2xl shadow-2xl"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          {/* userName */}
          <div className="sm:w-[500px] w-full">
            <label
              htmlFor="username"
              className="text-[#111827] text-lg font-semibold"
            >
              User Name
              <span className="text-[#ff0011] text-xl font-semibold">*</span>
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={inputState.username}
              onChange={(e) => {
                inputDispatch({
                  type: "update-username",
                  payload: e.target.value,
                });
              }}
              className="block p-2 border-2 border-[#6B7280] text-xl rounded-md w-full"
              required
              minLength={3}
              maxLength={20}
              title="Username must be between 3 and 20 characters long"
            />
          </div>
          {/* email */}
          <div className="sm:w-[500px] w-full">
            <label
              htmlFor="email"
              className="text-[#111827] text-lg font-semibold"
            >
              Email
              <span className="text-[#ff0011] text-xl font-semibold">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={inputState.email}
              onChange={(e) => {
                inputDispatch({
                  type: "update-email",
                  payload: e.target.value,
                });
              }}
              className="block p-2 border-2 border-[#6B7280] text-xl rounded-md w-full"
              required
              title="Please enter a valid email address"
            />
            {/* validations for email */}
          </div>
          {/* phone */}
          <div className="sm:w-[500px] w-full">
            <label
              htmlFor="contact"
              className="text-[#111827] text-lg font-semibold"
            >
              Phone
              <span className="text-[#ff0011] text-xl font-semibold">*</span>
            </label>
            <input
              type="tel"
              id="contact"
              placeholder="Enter your phone number"
              value={inputState.contact}
              onChange={(e) => {
                inputDispatch({
                  type: "update-contact",
                  payload: e.target.value,
                });
              }}
              className="block p-2 border-2 border-[#6B7280] text-xl rounded-md w-full"
              required
              maxLength={10}
              minLength={10}
              pattern="[0-9]*"
              title="Phone number must contain only digits"
            />
          </div>
          {/* parent/gardian name */}
          <div className="sm:w-[500px] w-full">
            <label
              htmlFor="parentName"
              className="text-[#111827] text-lg font-semibold"
            >
              Parent/gardian Name
              <span className="text-[#ff0011] text-xl font-semibold">*</span>
            </label>
            <input
              type="text"
              id="parentName"
              placeholder="Enter your parent/gardian name"
              value={inputState.parentName}
              onChange={(e) => {
                inputDispatch({
                  type: "update-parentName",
                  payload: e.target.value,
                });
              }}
              className="block p-2 border-2 border-[#6B7280] text-xl rounded-md w-full"
              required
              minLength={3}
              maxLength={20}
              title="Parent name must be between 3 and 20 characters long"
            />
          </div>
          {/* parent/gardian phone */}
          <div className="sm:w-[500px] w-full">
            <label
              htmlFor="parentContact"
              className="text-[#111827] text-lg font-semibold"
            >
              Parent /gardian Phone
              <span className="text-[#ff0011] text-xl font-semibold">*</span>
            </label>
            <input
              type="tel"
              id="parentContact"
              placeholder="Enter your parent/gardian phone number"
              value={inputState.parentContact}
              onChange={(e) => {
                inputDispatch({
                  type: "update-parentContact",
                  payload: e.target.value,
                });
              }}
              className="block p-2 border-2 border-[#6B7280] text-xl rounded-md w-full"
              required
              minLength={10}
              maxLength={10}
              pattern="[0-9]*"
              title="Parent phone number must contain only digits"
            />
          </div>
          {/* submit */}
          <button
            type="submit"
            className="sm:w-[500px] w-full p-3 rounded-md font-semibold text-white bg-[#111827] hover:bg-gray-800 h-12 cursor-pointer"
          >
            SAVE
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
