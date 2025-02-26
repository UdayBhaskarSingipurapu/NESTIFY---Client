import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const SignUp = () => {
  const [isUserActive, setIsUserActive] = useState(true);
  return (
    <div className="min-h-screen flex justify-center bg-white flex-wrap">
      <div className="mt-5 h-fit p-5 rounded-md w-full min-w-[250px] sm:max-w-[700px]">
        <h1 className="text-[#111827] text-2xl font-bold text-center">
          CREATE AN ACCOUNT
        </h1>
        <div className="border-1 border-gray-200 shadow-xl bg-gray-100 p-4 mt-5 rounded-md">
          <nav className=" mt-2 h-13 w-full rounded-tl-md rounded-tr-md border-1 border-[#6B7280]">
            <ul className="grid h-full grid-cols-2 grid-rows-1 gap-1">
              <li
                className={`grid-cols-1 flex ${
                  isUserActive ? "bg-white" : "bg-gray-100"
                } bg-gray-100 items-center justify-center rounded-tl-md`}
              >
                <Link
                  to="user"
                  className="text-[#111827] text-xl font-semibold"
                  onClick={() => {
                    setIsUserActive(true);
                  }}
                >
                  User
                </Link>
              </li>
              <li
                className={`grid-cols-1 flex ${
                  !isUserActive ? "bg-white" : "bg-gray-100"
                } bg-gray-100 items-center justify-center rounded-tr-md`}
              >
                <Link
                  to="admin"
                  className="text-[#111827] text-xl font-semibold"
                  onClick={() => {
                    setIsUserActive(false);
                  }}
                >
                  Admin
                </Link>
              </li>
            </ul>
          </nav>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

// text-[#111827] -> dark
// text-[#6B7280] -> light
