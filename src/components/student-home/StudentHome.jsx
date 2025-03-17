import React, { useContext, useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { userLoginContext } from "../../contexts/userLoginContext";

import "./Rating.css";

const initialState = {
  comment: "",
  rating: "",
};

function inputReducer(state, action) {
  switch (action.type) {
    case "set-rating":
      return { ...state, rating: action.payload };
    case "set-comment":
      return { ...state, comment: action.payload };
    case "clear-form":
      return { comment: "", rating: "" };
    default:
      return state;
  }
}

const StudentHome = () => {
  const [inputState, inputDispatch] = useReducer(inputReducer, initialState);
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [availability, setAvailability] = useState("");
  const [hostels, setHostels] = useState([]); // ✅ Ensure it starts as an array
  const [hostelRequests, setHostelRequests] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    updateData();
  }, []);

  function updateData() {
    const storedHostels = sessionStorage.getItem("hostels");
    setHostels(storedHostels ? JSON.parse(storedHostels) : []); // ✅ Ensure it's an array

    const storedHostelRequests = sessionStorage.getItem("hostelRequests");
    setHostelRequests(
      storedHostelRequests ? JSON.parse(storedHostelRequests) : []
    );
  }

  const user = JSON.parse(sessionStorage.getItem("user"));

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          "https://nestify-backend.vercel.app/newAppReview/all"
        );
        console.log(response);
        setReviews(response.data?.payload || []); // ✅ Ensure reviews is an array
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchReviews();
  }, []);

  useEffect(() => {
    const fetchHostels = async () => {
      try {
        const response = await axios.get("https://nestify-backend.vercel.app/hostel");
        console.log(response);
        setHostels(response.data?.payload || []); // ✅ Ensure hostels is an array
      } catch (error) {
        console.error("Error fetching hostels:", error);
      }
    };
    fetchHostels();
  }, []);

  // ✅ Safe filter function
  const filterHostels = () => {
    if (!Array.isArray(hostels)) return []; // ✅ Ensure `hostels` is an array before filtering

    return hostels.filter((hostel) => {
      const matchesQuery = hostel.hostelname
        ?.toLowerCase()
        .includes(query.toLowerCase());

      const matchesLocation = location
        ? hostel.addressLine?.city
            ?.toLowerCase()
            .includes(location.toLowerCase()) ||
          hostel.addressLine?.state
            ?.toLowerCase()
            .includes(location.toLowerCase()) ||
          hostel.addressLine?.street
            ?.toLowerCase()
            .includes(location.toLowerCase()) ||
          hostel.addressLine?.doorNo
            ?.toLowerCase()
            .includes(location.toLowerCase())
        : true;

      const matchesAvailability = availability
        ? availability === "Available"
          ? hostel.rooms?.length > 0
          : hostel.rooms?.length === 0
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
      const response = await axios.post(
        `https://nestify-backend.vercel.app/newAppReview/${user._id}/new`,
        state
      );
      console.log(response);
      const { message } = response.data;
      showSuccessToast(message);
    } catch (error) {
      console.error(error);
      const message = error?.response?.data?.message || "An error occurred";
      showErrorToast(message);
    }
  }

  function findAvailableRooms(hostel) {
    let availableRooms = 0;
    hostel.rooms?.forEach((room) => {
      if (room.roomCapacity > room.occupied) availableRooms++;
    });
    return availableRooms;
  }

  const showSuccessToast = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      theme: "colored",
    });
  };

  const showErrorToast = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
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
    <div className="p-8 bg-gray-100 md:ml-48 min-h-screen">
      <ToastContainer />

      {/* Search Section */}
      <div className="flex flex-col md:flex-row items-center gap-4 p-4 bg-white shadow-md rounded-xl">
        <input
          type="text"
          placeholder="Search by name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 rounded-md w-full md:w-1/3"
        />
        <input
          type="text"
          placeholder="Filter by location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded-md w-full md:w-1/3"
        />
        <select
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
          className="border p-2 rounded-md w-full md:w-1/3"
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
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md hover:scale-105 transition duration-300"
          >
            <img
              src={hostel.hostelimage?.url}
              alt={hostel.hostelname}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-3">{hostel.hostelname}</h3>
            <p className="text-gray-600 font-semibold">
              {findAvailableRooms(hostel)} rooms available
            </p>
            <Link
              to={`/student-home/hostel/${index}`}
              state={{ hostel }}
              className="block bg-black text-white mt-3 px-4 py-2 text-center rounded-md hover:bg-gray-700"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentHome;
