import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import hostels from "../../data/hostelsData";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import './Rating.css'

const initialState = {
  //added
  comment: "",
  rating: "",
};

function inputReducer(state, action) {
  switch (action.type) {
    case "set-rating": {
      return { ...state, rating: action.payload };
    }
    case "set-comment": {
      return { ...state, comment: action.payload };
    }
    case "clear-form": {
      return { comment: "", rating: "" };
    }
    default: {
      return state;
    }
  }
}

const StudentHome = () => {
  const [inputState, inputDispatch] = useReducer(inputReducer, initialState);
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [availability, setAvailability] = useState("");
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("http://localhost:5050/newAppReview/all");
        console.log(response);
        setReviews(response.data?.payload || []); // ✅ Ensure reviews is an array(added)
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchReviews();
  }, []);
  useEffect(() => {
    const fetchHostels = async () => {
      try {
        const response = await axios.get("http://localhost:5050/hostel");
        console.log(response);
        // setReviews(response.data?.payload || []); // ✅ Ensure reviews is an array(added)
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchHostels();
  }, []);

  // Filter hostels based on search criteria
  const filterHostels = () => {
    return hostels.filter((hostel) => {
      const matchesQuery =
        hostel.name.toLowerCase().includes(query.toLowerCase()) ||
        hostel.description.toLowerCase().includes(query.toLowerCase());

      const matchesLocation = location
        ? hostel.address.toLowerCase().includes(location.toLowerCase())
        : true;

      const matchesAvailability = availability
        ? availability === "Available"
          ? hostel.roomsAvailable > 0
          : hostel.roomsAvailable === 0
        : true;

      return matchesQuery && matchesLocation && matchesAvailability;
    });
  };

  const filteredHostels = filterHostels();

  const handleSearch = () => {
    console.log({ query, location, availability });
  };

  async function userFeedbackReq(state) {
    console.log("Submitting:", state);
    try {
      const response = await axios.post(`http://localhost:5050/newAppReview/${user._id}/new`, state);
      console.log(response);
      const { message } = response.data;
      showSuccessToast(message);
    } catch (error) {
      console.error(error);
      const message = error?.response?.data?.message || "An error occurred";//added
      showErrorToast(message);
    }
  }

  const showSuccessToast = (message) => {
    toast.success(message, {
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

  const handleWebsiteReviewSubmit = (e) => {
    e.preventDefault();
    console.log("Comment:", inputState.comment, "Rating:", inputState.rating);
    userFeedbackReq(inputState);
    inputDispatch({ type: "clear-form" });
  };

  return (
    <div className="p-8 bg-gray-100 md:ml-48">
      <ToastContainer />

      {/* Search Section */}
      <div className="flex flex-col md:flex-row items-center gap-4 p-4 bg-white shadow-md rounded-xl">
        <input
          type="text"
          placeholder="Search by name or description..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-gray-500 p-2 rounded-md w-full md:w-1/3"
        />
        <input
          type="text"
          placeholder="Filter by location (address)..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border border-gray-500 p-2 rounded-md w-full md:w-1/3"
        />
        <select
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
          className="border border-gray-500 p-2 rounded-md w-full md:w-1/3"
        >
          <option value="">Filter by Availability</option>
          <option value="Available">Available</option>
          <option value="Unavailable">Unavailable</option>
        </select>
        <button
          onClick={handleSearch}
          className="bg-black text-white p-2 rounded-md hover:bg-gray-500 w-full md:w-auto"
        >
          Search
        </button>
      </div>

      {/* Card Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredHostels.map((hostel, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:scale-105 transition duration-300">
            <img src={hostel.image} alt={hostel.name} className="w-full h-40 object-cover rounded-md" />
            <h3 className="text-lg font-semibold mt-3">{hostel.name}</h3>
            <p className="text-gray-600">{hostel.description}</p>
            <p className="text-gray-600 font-semibold">
              {hostel.roomsAvailable} rooms available
            </p>
            <Link to="/samplehostel" state={{ hostel }} className="block bg-black text-white mt-3 px-4 py-2 text-center rounded-md hover:bg-gray-700">
              View Details
            </Link>
          </div>
        ))}
      </div>

      {/* Website Reviews Section */}
      <form onSubmit={handleWebsiteReviewSubmit} className="mt-10 p-6 bg-white shadow-md rounded-xl">
        <h2 className="text-xl font-semibold mb-4">Website Reviews</h2>
        <input
          type="text"
          placeholder="Write a website review..."
          value={inputState.comment}
          onChange={(e) =>
            inputDispatch({ type: "set-comment", payload: e.target.value })
          }
          className="border border-gray-500 p-2 rounded-md w-full"
        />
        <fieldset className="starability-slot mt-3 mb-3">
        <legend>Rating:</legend>
        {[1, 2, 3, 4, 5].map((num) => (
          <React.Fragment key={num}>
            <input
              type="radio"
              id={`rate-${num}`}
              name="review-rating"
              value={num}
              checked={inputState.rating === num} // Ensure it's compared as a number
              onChange={() => inputDispatch({ type: "set-rating", payload: num })} // Store as a number
            />
            <label htmlFor={`rate-${num}`} title={`${num} stars`}>
              {num} stars
            </label>
          </React.Fragment>
        ))}
      </fieldset>

        <button
          type="submit"
          className="bg-black text-white px-3 py-1 rounded-md mt-2 hover:bg-gray-500"
        >
          Submit Review
        </button>
      </form>

      {/* Display Reviews */}
      <div className="mt-10 p-6 bg-white shadow-md rounded-xl">
        <h2 className="text-xl font-semibold mb-4">Website Reviews</h2>
        {reviews?.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="p-4 border border-gray-300 rounded-lg bg-gray-50 shadow-sm">
              <p className="text-gray-800 font-bold">@{review?.author?.username || "Anonymous"}</p>
              <p className="text-gray-800">{review?.comment || "No comment provided"}</p>
              <p className="text-gray-600">{review?.rating || "0"} ⭐</p>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default StudentHome;
