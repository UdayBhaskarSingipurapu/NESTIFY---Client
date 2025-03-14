import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { userLoginContext } from "../../contexts/userLoginContext";

const UserLogin = () => {
  const { userLoginReq, login } = useContext(userLoginContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (login) {
      navigate("/student-home");
    }
  }, [login, navigate]);

  async function onSubmit(userData) {
    try {
      await userLoginReq(userData);
      if (login) {
        toast.success("User logged in successfully", {
          position: "top-center",
          autoClose: 2000,
          draggable: true,
        });
        navigate("/student-home");
      }
    } catch (error) {
      toast.error("Login failed. Please check your credentials.", {
        position: "top-center",
        autoClose: 2000,
        draggable: true,
      });
    }
  }

  const googleAuth = () => {
    window.open(`http://localhost:5050/auth/google?scope=email profile openid`, "_self");
  };

  return (
    <div className="flex flex-col p-5 gap-5 bg-white rounded-bl-md rounded-br-md">
      <ToastContainer />
      <form
        className="flex flex-col mt-5 gap-5 items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Username */}
        <div className="sm:w-[500px] w-full">
          <label htmlFor="username" className="text-[#111827] text-lg font-semibold">
            User Name
            <span className="text-[#ff0011] text-xl font-semibold">*</span>
          </label>
          <input
            type="text"
            id="username"
            {...register("username", { required: true })}
            placeholder="Enter your username"
            className="block p-2 border-2 border-[#6B7280] text-xl rounded-md w-full"
          />
          {errors.username && (
            <p className="text-red-500 font-semibold">Username is required</p>
          )}
        </div>

        {/* Password */}
        <div className="sm:w-[500px] w-full">
          <label htmlFor="password" className="text-[#111827] text-lg font-semibold">
            Password
            <span className="text-[#ff0011] text-xl font-semibold">*</span>
          </label>
          <input
            type="password"
            id="password"
            {...register("password", { required: true })}
            placeholder="Enter your password"
            className="block p-2 border-2 border-[#6B7280] text-xl rounded-md w-full"
          />
          {errors.password && (
            <p className="text-red-500 font-semibold">Password is required</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="sm:w-[500px] w-full p-3 rounded-md font-semibold text-white bg-[#111827] hover:bg-gray-800 h-12"
        >
          Sign In
        </button>

        {/* Don't have an account? */}
        <div>
          <p className="text-[#111827]">
            Don't have an account?{" "}
            <Link to="/sign-up" className="hover:underline text-blue-900">
              Sign Up
            </Link>
          </p>
        </div>

        {/* Divider */}
        <div className="sm:w-[500px] w-full flex items-center gap-3">
          <div className="h-1 bg-gray-300 w-1/2"></div>
          <p className="text-center flex items-center mb-2 text-gray-500">or</p>
          <div className="h-1 bg-gray-300 w-1/2"></div>
        </div>

        {/* Google OAuth Button */}
        <button
          type="button"
          className="sm:w-[400px] w-full p-3 rounded-md font-semibold text-[#111827] border-1 border-[#111827] hover:bg-gray-100 h-12 flex items-center justify-center gap-2"
          onClick={googleAuth}
        >
          <FcGoogle className="mt-1 w-5 h-5" />
          Continue with Google
        </button>
      </form>
    </div>
  );
};

export default UserLogin;