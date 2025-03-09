import React, { useEffect, useState } from "react";
import { useReducer } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const initialState = {};

function maintenanceReducer(state, action) {
  switch (action.type) {
    case "set-title": {
      return { ...state, issueTitle: action.payload };
    }
    case "set-description": {
      return { ...state, issueDescription: action.payload };
    }
    case "clear-form": {
      return { issueTitle: "", issueDescription: "" };
    }
    default: {
      return state;
    }
  }
}

const MaintenanceForm = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem("user")));
  }, []);
  const [state, MaintanaceDispatch] = useReducer(
    maintenanceReducer,
    initialState
  );

  console.log(user);

  async function userMaintainanceReq(state) {
    try {
      axios
        .post(
          `http://localhost:5050/hostel/maintainance/${user._id}/new`,
          state
        )
        .then((obj) => {
          console.log(obj);
          let res = obj.response;
          console.log(res);
          const { message} = res.data;
          showSuccessToast(message);
        })
        .catch((err) => {
          console.log(err);
          let res = err.response;
          console.log(res);
          const { message } = res.data;
          showErrorToast(message);
        });
    } catch (err) {
      console.log(err);
      let res = err.response;
      console.log(res);
      const { message } = res.data;
      showErrorToast(message);
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
    console.log(state);
    userMaintainanceReq(state);
    MaintanaceDispatch({ type: "clear-form" });
  }

  return (
    <div>
      <div className="bg-grey-200 rounded-lg p-10 w-full max-w-2xl m-auto ">
        <ToastContainer/>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          {/* Title Input */}
          <div>
            <label
              htmlFor="title"
              className="block text-gray-700 font-medium mb-2"
            >
              Title of Issue
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter the Issue's Title"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
              onChange={(e) =>
                MaintanaceDispatch({
                  type: "set-title",
                  payload: e.target.value,
                })
              }
              value={state.issueTitle}
            />
          </div>

          {/* Description Input */}
          <div>
            <label
              htmlFor="description"
              className="block text-gray-700 font-medium mb-2"
            >
              Issue's Description
            </label>
            <textarea
              id="description"
              placeholder="Enter Issue's Description"
              rows="5"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
              onChange={(e) =>
                MaintanaceDispatch({
                  type: "set-description",
                  payload: e.target.value,
                })
              }
              value={state.issueDescription}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MaintenanceForm;
