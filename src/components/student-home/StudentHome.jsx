import { useState } from "react";
import { Link } from "react-router-dom";
import hostels from "../../data/hostelsData";

const StudentHome = () => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [availability, setAvailability] = useState("");
  const [websiteReviews, setWebsiteReviews] = useState([]);
  const [newWebsiteReview, setNewWebsiteReview] = useState("");

  const handleSearch = () => {
    console.log({ query, location, availability });
  };

  const handleWebsiteReviewSubmit = () => {
    if (newWebsiteReview.trim() === "") return;
    setWebsiteReviews([...websiteReviews, newWebsiteReview]);
    setNewWebsiteReview("");
  };

  return (
    <div className="p-8 bg-gray-100">
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
            <p className="text-gray-700 font-bold mt-2">₹{hostel.price}/month</p>
            <Link
              to={`/hostel/${hostel.id}`}
              className="block bg-black text-white mt-3 px-4 py-2 text-center rounded-md hover:bg-gray-700"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
      {/* Website Reviews Section */}
      <div className="mt-10 p-6 bg-white shadow-md rounded-xl">
        <h2 className="text-xl font-semibold mb-4">Website Reviews</h2>
        <div className="max-h-40 overflow-y-auto bg-gray-100 p-2 rounded-md">
          {websiteReviews.length === 0 ? (
            <p className="text-gray-500">No reviews yet. Be the first to review!</p>
          ) : (
            websiteReviews.map((review, i) => (
              <p key={i} className="text-sm text-gray-700">- {review}</p>
            ))
          )}
        </div>
        <input
          type="text"
          placeholder="Write a website review..."
          value={newWebsiteReview}
          onChange={(e) => setNewWebsiteReview(e.target.value)}
          className="border border-gray-500 p-2 rounded-md w-full mt-2"
        />
        <button
          onClick={handleWebsiteReviewSubmit}
          className="bg-black text-white px-3 py-1 rounded-md mt-2 hover:bg-gray-500"
        >
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default StudentHome;
