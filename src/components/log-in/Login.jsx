import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { userLoginContext } from "../../contexts/userLoginContext";
import { useContext } from "react";

const Login = () => {
  const [isUserActive, setIsUserActive] = useState(true);
  const { Error, setError } = useContext(userLoginContext);

  return (
    <div className="min-h-screen flex justify-center bg-white flex-wrap">
      <div className="mt-5 h-fit p-5 rounded-md w-full min-w-[250px] sm:max-w-[700px] ">
        {/* Title */}
        <h1 className="text-[#111827] text-2xl font-bold text-center">
          LOGIN TO AN ACCOUNT
        </h1>
        {/* Login form */}
        <div className="border-1 border-gray-200 shadow-xl bg-gray-100 p-4 mt-10 rounded-md">
          {/* nav bar */}
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
                    setError(null);
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
                    setError(null);
                  }}
                >
                  Admin
                </Link>
              </li>
            </ul>
          </nav>
          {/* Dynamic Routing */}
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Login;

// text-[#111827] -> dark
// text-[#6B7280] -> light
