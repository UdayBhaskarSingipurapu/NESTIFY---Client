import React from "react";

const MaintenanceForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6 flex-wrap">
      <div className="bg-white shadow-xl rounded-lg p-10 w-full max-w-2xl">
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Maintenance Request Form
        </h1>
        <form className="flex flex-col gap-6">
          
          {/* Title Input */}
          <div>
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
              Title of Issue
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter the Issue's Title"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
            />
          </div>

          {/* Description Input */}
          <div>
            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
              Issue's Description
            </label>
            <textarea
              id="description"
              placeholder="Enter Issue's Description"
              rows="5"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
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