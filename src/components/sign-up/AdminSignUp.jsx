import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const AdminSignUp = () => {
  return (
    <div className="flex flex-col p-5 gap-5 bg-white rounded-bl-md rounded-br-md">
      <form action="" className="flex flex-col mt-5 gap-5 items-center">
        <div className="sm:w-[400px] w-full">
          <label
            htmlFor="adminname"
            className="text-[#111827] text-lg font-semibold"
          >
            Admin Name:
          </label>
          <input
            type="text"
            id="adminname"
            name=""
            placeholder=""
            className="block p-2 border-2 border-[#6B7280] text-xl rounded-md w-full"
          />
        </div>
        <div className="sm:w-[400px] w-full">
          <label
            htmlFor="email"
            className="text-[#111827] text-lg font-semibold"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder=""
            className="block p-2 border-2 border-[#6B7280] text-xl rounded-md w-full"
          />
        </div>
        <div className="sm:w-[400px] w-full">
          <label
            htmlFor="phone"
            className="text-[#111827] text-lg font-semibold"
          >
            Phone:
          </label>
          <input
            type="tel"
            id="phone"
            placeholder=""
            className="block p-2 border-2 border-[#6B7280] text-xl rounded-md w-full"
          />
        </div>
        <div className="sm:w-[400px] w-full">
          <label
            htmlFor="password"
            className="text-[#111827] text-lg font-semibold"
          >
            Password:
          </label>
          <input
            type="password"
            placeholder=""
            className="block p-2 border-2 border-[#6B7280] text-xl rounded-md w-full"
          />
        </div>
        <button
          type="submit"
          className="sm:w-[400px] w-full p-3z rounded-md font-semibold text-white bg-[#111827] hover:bg-gray-700 h-12"
        >
          Sign Up
        </button>
        <div>
          <p className="text-[#111827]">
            Already have an account?{" "}
            <Link to="/log-in/admin" className="hover:underline text-blue-900">
              Login
            </Link>
          </p>
        </div>
        <div className="sm:w-[400px] w-full flex items-center gap-3">
          <div className="h-1 bg-gray-300 w-1/2"></div>
          <p className="text-center flex items-center mb-2 text-gray-500">or</p>
          <div className="h-1 bg-gray-300 w-1/2"></div>
        </div>
        <button
          type="submit"
          className="sm:w-[400px] w-full p-3 rounded-md font-semibold text-[#111827] border-1 border-[#111827] hover:bg-gray-700 h-12 flex items-center justify-center gap-2"
        >
          <FcGoogle className="mt-1 w-5 h-5"/>
          Continue with Google
        </button>
      </form>
    </div>
  );
};

export default AdminSignUp;
