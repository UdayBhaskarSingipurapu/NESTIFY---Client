import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function EditAdminHostle(){
  const [currentHostle, setCurrentHostle] = useState("null");
  const [currentHostleRooms, setCurrentHostleRooms] = useState([]);
  useEffect(() => {
    // setCurrentHostle(JSON.parse(sessionStorage.getItem("currentHostle")));
    // setCurrentHostleRooms(JSON.parse(sessionStorage.getItem("currentHostle.currentHostleRooms")));
  }, []);

  return (
    <div>
      {currentHostle === null ? (
        <div className="flex items-center justify-center h-screen bg-gray-200">
          <Link
            to="/admin/hostel-listing"
            className="bg-gray-700 px-8 py-4 text-white rounded-lg shadow-xl hover:bg-gray-500"
          >
            Add Hostel
          </Link>
        </div>
      ) : (
        <div>
          {/* Top container -> hostle details*/}
          <div>Hostle Details</div>
          {/* bottom container -> room details */}
          {currentHostleRooms.length === 0 ? (
            <div className="flex items-center justify-center h-screen bg-gray-200">
              <Link
                to="/admin/room-details"
                className="bg-gray-700 px-8 py-4 text-white rounded-lg shadow-xl hover:bg-gray-500"
              >
                Add Room
              </Link>
            </div>
          ) : (
            <div>Room Details</div>
          )}
        </div>
      )}
    </div>
  );
};

export default EditAdminHostle;


//if no hostle is created then the settings page will be having one button add hostle if cliked it will take to the hostle listing page.
// top part is the detials to hostles to edit.
//bottom part is for the rooms if no room is there this part is having one button add room if cliked it will take to the room details page after successful creation this will goes back.
