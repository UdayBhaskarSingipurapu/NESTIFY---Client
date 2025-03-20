import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { userLoginContext } from "../../contexts/userLoginContext";
import { useContext } from "react";
import axios from "axios";
import { ShowerHead } from "lucide-react";

const AdminSignUp = () => {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let navigate = useNavigate();
  let { setError } = useContext(userLoginContext);

  async function adminSignupReq(userCred) {
    console.log(userCred);
    const formData = new FormData();

    // Append text fields
    formData.append("username", userCred.username);
    formData.append("email", userCred.email);
    formData.append("contact", userCred.contact);
    formData.append("password", userCred.password);

    // Append file. Make sure userCred.profileImage is a File object, not a FileList.
    // If you're using react-hook-form, you can set the file like this:
    console.log(userCred.profileImage[0]);
    formData.append("profileImage", userCred.profileImage[0]);
    console.log(formData);
    try {
      let res = await axios.post(
        "https://nestify-backend.vercel.app/owner/signup",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res);
      if (res.status === 200) {
        if (res.data && res.data.message === "User registered successfully") {
          showSuccessToast(res.data.message);
          setTimeout(() => {
            navigate("/log-in");
          }, 4000);
        } else {
          showErrorToast("Unknown error");
        }
      } else {
        showErrorToast(data.payload.message);
      }
    } catch (err) {
      console.log(err);
      // setError(err.response.data.payload.message);
      showErrorToast(err.message);
    }
  }

  async function onSubmit(adminData) {
    adminSignupReq(adminData);
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
      <ToastContainer/>
      <form
        action=""
        className="flex flex-col mt-5 gap-5 items-center"
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        {/* Admin Name */}
        <div className="sm:w-[500px] w-full">
          <label
            htmlFor="username"
            className="text-[#111827] text-lg font-semibold"
          >
            Admin Name
            <span className="text-[#ff0011] text-xl font-semibold">*</span>
          </label>
          <input
            type="text"
            id="username"
            {...register("username", {
              required: true,
              minLength: 3,
              maxLength: 20,
            })}
            placeholder="Enter your username"
            className="block p-2 border-2 border-[#6B7280] text-xl rounded-md w-full"
          />
          {/* validations for userName */}
          {errors.username?.type === "required" && (
            <p className="text-red-500 font-semibold">This field is required</p>
          )}
          {errors.username?.type === "minLength" && (
            <p className="text-red-500 font-semibold">
              Username must be at least 3 characters
            </p>
          )}
          {errors.username?.type === "maxLength" && (
            <p className="text-red-500 font-semibold">
              Username must be at most 20 characters
            </p>
          )}
        </div>
        {/* email */}
        <div className="sm:w-[500px] w-full">
          <label
            htmlFor="email"
            className="text-[#111827] text-lg font-semibold"
          >
            Email
            <span className="text-[#ff0011] text-xl font-semibold">*</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            {...register("email", { required: true })}
            className="block p-2 border-2 border-[#6B7280] text-xl rounded-md w-full"
          />
          {/* validations for email */}
          {errors.email?.type === "required" && (
            <p className="text-red-500 font-semibold">This field is required</p>
          )}
        </div>
        {/* phone */}
        <div className="sm:w-[500px] w-full">
          <label
            htmlFor="contact"
            className="text-[#111827] text-lg font-semibold"
          >
            Contact
            <span className="text-[#ff0011] text-xl font-semibold">*</span>
          </label>
          <input
            type="tel"
            id="contact"
            placeholder="Enter your contact number"
            {...register("contact", {
              required: true,
              minLength: 10,
              maxLength: 10,
              pattern: /^[0-9]*$/,
            })}
            className="block p-2 border-2 border-[#6B7280] text-xl rounded-md w-full"
          />
          {/* validations for contact */}
          {errors.contact?.type === "required" && (
            <p className="text-red-500 font-semibold">This field is required</p>
          )}
          {errors.contact?.type === "minLength" && (
            <p className="text-red-500 font-semibold">
              contact number must be at least 10 digits
            </p>
          )}
          {errors.contact?.type === "maxLength" && (
            <p className="text-red-500 font-semibold">
              contact number must be atmost 10 digits
            </p>
          )}
          {errors.contact?.type === "pattern" && (
            <p className="text-red-500 font-semibold">
              contact number must contain only digits
            </p>
          )}
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
            {...register("password", {
              required: true,
              minLength: 8,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            })}
            className="block p-2 border-2 border-[#6B7280] text-xl rounded-md w-full"
          />
          {/* validations for password */}
          {errors.password?.type === "required" && (
            <p className="text-red-500 font-semibold">This field is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500 font-semibold">
              Password must be at least 8 characters
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500 font-semibold">
              Password must contain at least one uppercase letter, one lowercase
              letter, one digit, and one special character
            </p>
          )}
        </div>
        {/* profilePic */}
        <div className="sm:w-[500px] w-full hover:cursor-pointer">
          <label
            className="text-[#111827] text-lg font-semibold "
            htmlFor="profileImage"
          >
            Upload Profile Picture
            <span className="text-[#ff0011] text-xl font-semibold">* </span>
            <span className="text-[#6B7280] font-semibold">
              (jpeg,png,gif,bmp)
            </span>
          </label>
          <div className="border-2 border-dashed border-[#6B7280] p-6 w-full rounded-md hover:bg-gray-100 flex items-center justify-center gap-1">
            <input
              type="file"
              id="profileImage"
              {...register("profileImage", {
                required: true,
                pattern: /\.(jpe?g|png|gif|bmp)$/i,
              })}
              className="text-blue-700 font-semibold border-b border-blue-700 w-[85px] "
            />
            <span className="font-semibold">Or Drop Down</span>
          </div>
          {/* validations for profilePic */}
          {errors.profileImage?.type === "required" && (
            <p className="text-red-500 font-semibold">This field is required</p>
          )}
        </div>
        {/* Sign Up */}
        <button
          type="submit"
          className="sm:w-[500px] w-full p-3z rounded-md font-semibold text-white bg-[#111827] hover:bg-gray-800 h-12"
        >
          Sign Up
        </button>
        {/* Already have an account */}
        <div>
          <p className="text-[#111827]">
            Already have an account?{" "}
            <Link to="/log-in" className="hover:underline text-blue-900">
              Login
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

export default AdminSignUp;
