import React from "react";
import { useReducer } from "react";
import axios from "axios";

const initialState = {};

function maintenanceReducer(state, action) {
  switch (action.type) {
    case "set-title": {
      return { ...state, title: action.payload };
    }
    case "set-description": {
      return { ...state, description: action.payload };
    }
    case "clear-form": {
      return {title:"", description:""};
    }
    default: {
      return state;
    }
  }
}

const MaintenanceForm = () => {
  const [state, MaintanaceDispatch] = useReducer(
    maintenanceReducer,
    initialState
  );

  function handleSubmit(e) {
    input.
    e.preventDefault();
    // let res = axios.post(
    //   `http://localhost:5050/hostel/${id}/maintenance/new`, //id is id of hostel
    //   state
    // );
    console.log(state);
    MaintanaceDispatch({type:"clear-form"})
  }

  return (
    <div>
      <div className="bg-grey-200 rounded-lg p-10 w-full max-w-2xl m-auto ">
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
              value={state.title}
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
              value={state.description}
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

      {/* Display the request */}
      {state.title && (
        <h1 className="text-2xl text-black-400 overflow-clip">
          <span className="font-semibold text-red-400 mr-2">Title:</span>
          {state.title}
        </h1>
      )}
      {state.description && (
        <h1 className="text-2xl text-black-400 mt-4 overflow-clip">
          <span className="font-semibold text-red-400 mr-2">Description:</span>
          {state.description}
        </h1>
      )}
    </div>
  );
};

export default MaintenanceForm;
