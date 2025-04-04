import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { userLoginContext } from "../../contexts/userLoginContext";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";

const AdminLogin = () => {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { adminLoginReq, login, user, Error, setError } =
    useContext(userLoginContext);
  let navigate = useNavigate();

  useEffect(() => {
    if (login) {
      showSuccessToast("Admin login successful");
      setTimeout(() => {
        navigate("/admin/dashboard");
      }, 4000);
    } else {
      if (Error) {
        showErrorToast(Error);
        setTimeout(() => {
          setError(null);
        }, 4000);
      }
    }
  }, [login, Error]);

  function onSubmit(adminData) {
    adminLoginReq(adminData);
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
  return (
    <div className="flex flex-col p-5 gap-5 bg-white rounded-bl-md rounded-br-md">
      <ToastContainer />
      {/* admin Login form */}
      <form
        action=""
        className="flex flex-col  gap-5 items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Admin Name */}
        <div className="sm:w-[500px] w-full">
          <label
            htmlFor="username"
            className="text-[#111827] text-lg font-semibold"
          >
            Admin User Name
            <span className="text-[#ff0011] text-xl font-semibold">*</span>
          </label>
          <input
            type="text"
            id="username"
            {...register("username")}
            placeholder="Enter your username"
            className="block p-2 border-2 border-[#6B7280] text-xl rounded-md w-full"
          />
        </div>
        {/* password */}
        <div className="sm:w-[500px] w-full">
          <label
            htmlFor="password"
            className="text-[#111827] text-lg font-semibold"
          >
            Password
            <span className="text-[#ff0011] text-xl font-semibold">*</span>
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            {...register("password")}
            className="block p-2 border-2 border-[#6B7280] text-xl rounded-md w-full"
          />
        </div>
        {/* Sign Up */}
        <button
          type="submit"
          className="sm:w-[500px] w-full p-3z rounded-md font-semibold text-white bg-[#111827] hover:bg-gray-800 h-12"
        >
          Sign In
        </button>
        {/* Dont have an account */}
        <div>
          <p className="text-[#111827]">
            Dont have an account?{" "}
            <Link to="/sign-up" className="hover:underline text-blue-900">
              Sign Up
            </Link>
          </p>
        </div>
        {/* or */}
        <div className="sm:w-[500px] w-full flex items-center gap-3">
          <div className="h-1 bg-gray-300 w-1/2"></div>
          <p className="text-center flex items-center mb-2 text-gray-500">or</p>
          <div className="h-1 bg-gray-300 w-1/2"></div>
        </div>
        {/* Continue with Google */}
        <button
          type="submit"
          className="sm:w-[400px] w-full p-3 rounded-md font-semibold text-[#111827] border-1 border-[#111827] hover:bg-gray-100 h-12 flex items-center justify-center gap-2"
        >
          <FcGoogle className="mt-1 w-5 h-5" />
          Continue with Google
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
