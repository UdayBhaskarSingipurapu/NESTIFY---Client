import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { FaCircle } from "react-icons/fa6";
import { userLoginContext } from "../../../contexts/userLoginContext";
import { useContext } from "react";
import axios from "axios";


const initialState = {};

function passwordReducer(state, action) {
  switch (action.type) {
    case "new-password": {
      return { ...state, newPassword: action.payload };
    }
    case "confirm-password": {
      return { ...state, confirmPassword: action.payload };
    }
    case "create-object": {
      return { newPassword: action.payload };
    }
    case "clear-form": {
      return {newPassword: "", confirmPassword: ""};
    }
    default: {
      return state;
    }
  }
}

const EditPassword = () => {
  const navigate = useNavigate();
  const [passwordState, passwordDispatch] = useReducer(
    passwordReducer,
    initialState
  );
  const { user, setUser, Error, setError } = useContext(userLoginContext);
  // console.log(user);

  async function userEditReq(passwordState) {
    // console.log(passwordState);
    try {
      passwordDispatch({
        type: "create-object",
        payload: passwordState.newPassword,
      });
      axios
        .put(
          `https://nestify-backend.vercel.app/user/edit/${user._id}/password`,
          passwordState
        )
        .then((obj) => {
          //  console.log(obj);
          const { message, payload } = obj.data;
          // console.log(obj);
          // console.log(payload);
          if (message === "Password updated successfully") {
            setUser(payload);
            sessionStorage.setItem("user", JSON.stringify(payload));
            showSuccessToast(message);
            setTimeout(() => {
              navigate("/student-home");
            }, 4000);
          } else {
            // console.log(message);
            setError(message);
            showErrorToast(Error);
          }
        })
        .catch((err) => {
          // console.log(err.message);
          setError(err.message);
          showErrorToast(Error);
        });
    } catch (err) {
      // console.log(err.message);
      setError(err.message);
      showErrorToast(Error);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordState.newPassword === passwordState.confirmPassword) {
      userEditReq(passwordState);
    } else 
    showErrorToast("Passwords do not match");
    passwordDispatch({type:"clear-form"})
    console.log(passwordState);
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
    <div className="min-h-screen flex items-start justify-center p-2">
      <ToastContainer />
      <div className="flex flex-col p-7 gap-5 bg-white rounded-2xl md:ml-41 mt-8 border-2 border-[#cccccc] sm:w-fit w-full shadow-2xl">
        <h1 className="text-[#111827] font-bold text-2xl text-center">
          Change Password
        </h1>
        <div className="">
          <h1 className="text-[#111827] font-bold text-lg">Requirements:</h1>
          <div className="text-sm font-semibold">
            <FaCircle className="inline mr-1 w-2 h-1" />
            <p className="inline">
              Password must be at least 8 characters long
            </p>
            <br />
            <FaCircle className="inline mr-1 w-2 h-1" />
            <p className="inline">
              Password must contain at least one uppercase letter
            </p>
            <br />
            <FaCircle className="inline mr-1 w-2 h-1" />
            <p className="inline">
              Password must contain at least one lowercase letter
            </p>
            <br />
            <FaCircle className="inline mr-1 w-2 h-1" />
            <p className="inline">Password must contain at least one number</p>
            <br />
            <FaCircle className="inline mr-1 w-2 h-1" />
            <p className="inline">
              Password must contain at least one special character
            </p>
          </div>
        </div>
        <form
          action=""
          className="flex flex-col gap-5 items-center"
          onSubmit={handleSubmit}
        >
          {/* new password */}
          <div className="sm:w-[500px] w-full">
            <label
              htmlFor="password"
              className="text-[#111827] text-lg font-semibold"
            >
              Enter new Password:
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="block p-2 border-2 border-[#6B7280] text-xl rounded-md w-full"
              value={passwordState.newPassword}
              onChange={(e) => {
                passwordDispatch({
                  type: "new-password",
                  payload: e.target.value,
                });
              }}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              minLength={8}
              maxLength={20}
            />
          </div>

          {/* confirm password */}
          <div className="sm:w-[500px] w-full">
            <label
              htmlFor="password"
              className="text-[#111827] text-lg font-semibold"
            >
              Confirm new Password:
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="block p-2 border-2 border-[#6B7280] text-xl rounded-md w-full"
              value={passwordState.confirmPassword}
              onChange={(e) => {
                passwordDispatch({
                  type: "confirm-password",
                  payload: e.target.value,
                });
              }}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              minLength={8}
              maxLength={20}
            />
            {/* submit */}
            <button
              type="submit"
              className="mt-5 w-fit bg-blue-400 px-6 py-3 rounded-lg text-white hover:cursor-pointer hover:bg-blue-500"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPassword;
