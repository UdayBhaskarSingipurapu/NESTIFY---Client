import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion"; // For animations
import { FaStar } from "react-icons/fa"; // For star ratings
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const HostelDetails = () => {
  const [currentHostel, setCurrentHostel] = useState(null);
  const [rooms, setRooms] = useState([]);
  const location = useLocation();
  const [alreadyStudent, setAlreadyStudent] = useState(false);
  const [hostelRequests, setHostelRequests] = useState([]);
  const [currentRoom, setCurrentRoom] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  function updateFunction() {
    const storedHostelRequests = JSON.parse(sessionStorage.getItem("hostelRequests"));
    const storedCurrentRoom = JSON.parse(sessionStorage.getItem("currentRoom"));
    const storedUser = JSON.parse(sessionStorage.getItem("user"));

    setCurrentHostel(location.state?.hostel || null);
    setRooms(location.state?.hostel?.rooms || []);
    setHostelRequests(storedHostelRequests);
    setCurrentRoom(storedCurrentRoom);
    setUser(storedUser);

    console.log("hostelRequests:", storedHostelRequests);
    console.log("currentRoom:", storedCurrentRoom);

    // Check if the user is already a student
    console.log(storedCurrentRoom);
    console.log(storedHostelRequests);
    // console.log((JSON.parse(storedHostelRequests).length > 0));
    if (storedCurrentRoom || storedHostelRequests.length > 0) {
      console.log("User is already a student.");
      setAlreadyStudent(true);
    } else {
      console.log("User is not a student.");
    }

    setIsLoading(false);
  }

  function handleRoomBooking(room) {
    setSelectedRoom(room);
    setIsBookingModalOpen(true);
  }

  function closeBookingModal() {
    setIsBookingModalOpen(false);
    setSelectedRoom(null);
  }

  async function confirmBooking() {
    // console.log("Booking confirmed for room:", selectedRoom);
    // console.log(currentHostel);
    console.log(
      `https://nestify-backend.vercel.app/joinHostel/${user._id}/${currentHostel._id}`
    );
    console.log(user);
    await axios
      .post(`https://nestify-backend.vercel.app/joinHostel/${user._id}/${currentHostel._id}`)
      .then((res) => {
        console.log(res);
        //add res.data.payload as to the hostelRequests
        //add that to the session storage
        //call the updateFunction() to update the hostelRequests
        sessionStorage.setItem(
          "hostelRequests",
          JSON.stringify([...hostelRequests, res.data.payload])
        );
        showSuccessToast(res.data.message);
        updateFunction();

      })
      .catch((err) => {
        console.log(err);
      });
    closeBookingModal();
  }

  useEffect(() => {
    updateFunction();
  }, []);

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
  

  if (isLoading) {
    console.log("Loading...");
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8 md:ml-48">
      <ToastContainer />
      <div
        className={`max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden ${
          isBookingModalOpen ? "blur-md" : ""
        }`}
      >
        {/* Hostel Image */}
        <div className="w-full h-64 sm:h-80 relative">
          <img
            src={currentHostel && currentHostel.hostelimage.url}
            alt="Hostel"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hostel Details */}
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {currentHostel ? currentHostel.hostelname : "Loading..."}
          </h1>

          {/* Address */}
          <div className="mb-6">
            <span className="text-lg font-semibold text-gray-700">
              Address:
            </span>
            <p className="text-gray-600">
              {currentHostel ? currentHostel.addressLine.doorNo : "Loading..."},{" "}
              {currentHostel ? currentHostel.addressLine.street : "Loading..."},{" "}
              {currentHostel ? currentHostel.addressLine.city : "Loading..."},{" "}
              {currentHostel ? currentHostel.addressLine.state : "Loading..."},
              India
            </p>
          </div>

          {/* Owner */}
          <div className="mb-6">
            <span className="text-lg font-semibold text-gray-700">Owner:</span>
            <p className="text-gray-600">
              {currentHostel ? currentHostel.owner.username : "Loading..."}
            </p>
          </div>

          {/* Rooms */}
          <div className="mb-6">
            <span className="text-lg font-semibold text-gray-700">Rooms:</span>
            <div className="mt-4 space-y-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {rooms ? (
                rooms.length === 0 ? (
                  <p className="text-gray-600">No rooms yet</p>
                ) : (
                  rooms.map((room) => (
                    <motion.div
                      key={room._id}
                      className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
                      whileHover={{ scale: 1.05 }} // Hover animation
                      whileTap={{ scale: 0.95 }} // Click animation
                      onClick={() => handleRoomBooking(room)}
                    >
                      <p className="text-gray-700 font-medium">
                        Room No: {room.roomNumber}
                      </p>
                      <p className="text-gray-600">
                        Total beds: {room.roomCapacity}
                      </p>
                      <p className="text-gray-600">
                        Beds filled: {room.occupied}
                      </p>
                      <p className="text-gray-600">
                        Beds available: {room.roomCapacity - room.occupied}
                      </p>
                      <p className="text-gray-600">Room Price: {room.fees}</p>
                      <p className="text-gray-600">
                        AC service:{" "}
                        {room.airConditioned ? "Available" : "Not available"}
                      </p>
                      {!alreadyStudent && (
                        <button
                          onClick={() => handleRoomBooking(room)}
                          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
                        >
                          Book
                        </button>
                      )}
                    </motion.div>
                  ))
                )
              ) : (
                <p className="text-gray-600">Loading...</p>
              )}
            </div>
          </div>

          {/* Reviews */}
          <div>
            <span className="text-lg font-semibold text-gray-700">
              Reviews:
            </span>
            <div className="mt-4 space-y-4">
              {currentHostel ? (
                currentHostel.reviews.length === 0 ? (
                  <p className="text-gray-600">No reviews yet</p>
                ) : (
                  currentHostel.reviews.map((review) => (
                    <motion.div
                      key={review._id}
                      className="p-4 bg-gray-50 rounded-lg shadow-sm"
                      initial={{ opacity: 0, y: 20 }} // Fade-in animation
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, index) => (
                          <FaStar
                            key={index}
                            className={`h-5 w-5 ${
                              index < review.rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-600">{review.review}</p>
                    </motion.div>
                  ))
                )
              ) : (
                <p className="text-gray-600">Loading...</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center md:ml-48">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md"
            initial={{ opacity: 0, scale: 0.9 }} // Modal animation
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-bold mb-4">Confirm Booking</h2>
            <p className="text-gray-600 mb-4">
              Are you sure you want to book Room having Room No:{" "}
              {selectedRoom.roomNumber}?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={closeBookingModal}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-200"
              >
                Cancel
              </button>
              <button
                onClick={confirmBooking}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
              >
                Confirm
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default HostelDetails;
