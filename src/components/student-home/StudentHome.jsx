import react, { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import hostels from "../../data/hostelsData";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const initialState = {};

function inputReducer(state, action) {
  switch(action.type) {
    case "set-rating": {
      return state;
    }
    case "set-comment": {
      return { ...state, review: action.payload };
    }
    case "clear-form": {
      return { review: "" };
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

  // console.log(inputState);

  const handleSearch = () => {
    console.log({ query, location, availability });
  };

  async function userFeedbackReq(state) {
    console.log(state);
    try {
      axios
        .post(`http://localhost:5050/newAppReview/new`, state)
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

  const handleWebsiteReviewSubmit = (e) => {
    e.preventDefault();
    console.log(inputState.comment);
    userFeedbackReq(inputState);
    inputDispatch({ type: "clear-form" });
  };

  return (
    <div className="p-8 bg-gray-100 md:ml-48">
      <ToastContainer/>
      {/* Search Section*/}
      <div className="flex flex-col md:flex-row items-center gap-4 p-4 bg-white shadow-md rounded-xl">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-gray-500 p-2 rounded-md w-full md:w-1/3"
        />
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border border-gray-500 p-2 rounded-md w-full md:w-1/3"
        >
          <option value="">Filter by Location</option>
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Chicago">Chicago</option>
        </select>
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
      {/* Card Grid Section*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {hostels.map((hostel, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              src={hostel.image}
              alt={hostel.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-3">{hostel.name}</h3>
            <p className="text-gray-600">{hostel.description}</p>
            <p className="text-gray-600">{hostel.roomsAvailable}</p>
            <p className="text-gray-700 font-bold mt-2">
              ₹{hostel.price}/month
            </p>
            <Link
              to="/samplehostel"
              state={{ hostel }}
              className="block bg-black text-white mt-3 px-4 py-2 text-center rounded-md hover:bg-gray-700"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
      {/* Website Reviews Section */}
      <form action="" onSubmit={handleWebsiteReviewSubmit}>
        <div className="mt-10 p-6 bg-white shadow-md rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Website Reviews</h2>
          {/* star rating component */}
          <input
            type="text"
            placeholder="Write a website review..."
            value={inputState.review}
            onChange={(e) =>
              inputDispatch({
                type: "set-comment",
                payload: e.target.value,
              })
            }
            className="border border-gray-500 p-2 rounded-md w-full mt-2"
          />
          <button
            type="submit"
            className="bg-black text-white px-3 py-1 rounded-md mt-2 hover:bg-gray-500"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentHome;
