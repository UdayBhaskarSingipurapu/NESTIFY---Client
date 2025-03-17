import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const initialState = {};

function inputReducer(state, action) {
  switch (action.type) {
    case "set-rating": {
      return state;
    }
    case "set-comment": {
      return { ...state, comment: action.payload };
    }
    case "clear-form": {
      return { comment: "" };
    }
    default: {
      return state;
    }
  }
}

const FeedbackForm = () => {
  const [user, seUser] = useState(null);
  const [inputState, inputDispatch] = useReducer(inputReducer, initialState);
  useEffect(() => {
    seUser(JSON.parse(sessionStorage.getItem("user")));
  }, []);
  console.log(user);

  async function userFeedbackReq(state) {
    console.log(state);
    try {
      axios
        .post(`https://nestify-backend.vercel.app/hostel/review/${user._id}/new`, state)
        .then((obj) => {
          console.log(obj);
          let res = obj.response;
          console.log(res);
          const { message } = res.data;
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
    console.log(inputState);
    userFeedbackReq(inputState);
    inputDispatch({ type: "clear-form" });
  }
  return (
    <div className="bg-white rounded-lg p-10 w-full max-w-2xl">
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        {/* Description Input */}
        <div>
          <label
            htmlFor="feedback"
            className="block text-gray-700 font-medium mb-2"
          >
            Student's Feedback
          </label>
          <textarea
            id="feedback"
            placeholder="Enter Your Feedback"
            rows="5"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
            value={inputState.comment}
            onChange={(e) =>
              inputDispatch({ type: "set-comment", payload: e.target.value })
            }
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
  );
};

export default FeedbackForm;
