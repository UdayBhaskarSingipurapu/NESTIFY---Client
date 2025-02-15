import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";  

export default function AuthForm() {
  const [isSignIn, setIsSignIn] = useState(true);
  const { register, handleSubmit, watch } = useForm();
  const navigate = useNavigate();  

  const handleFormSubmit = (data) => {
    console.log(isSignIn ? "Sign In Data:" : "Sign Up Data:", data);
    
    if (isSignIn) {
      
      navigate("/studenthome");  
    } else {
      setIsSignIn(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <div className="flex border-b border-gray-300">
          <button
            className={`w-1/2 py-3 text-lg font-semibold ${
              isSignIn
                ? "bg-gray-200 text-black"
                : "text-gray-500 hover:bg-gray-100"
            }`}
            onClick={() => setIsSignIn(true)}
          >
            Sign In
          </button>
          <button
            className={`w-1/2 py-3 text-lg font-semibold ${
              !isSignIn
                ? "bg-gray-200 text-black"
                : "text-gray-500 hover:bg-gray-100"
            }`}
            onClick={() => setIsSignIn(false)}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4 mt-6">
          {!isSignIn && (
            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                {...register("username", { required: true })}
                className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              {...register("password", { required: true })}
              className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300"
            />
          </div>

          {!isSignIn && (
            <>
              <div>
                <label className="block text-sm font-medium">Confirm Password</label>
                <input
                  type="password"
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                  className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Role</label>
                <select
                  {...register("role", { required: true })}
                  className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300"
                >
                  <option value="">Select Role</option>
                  <option value="student">Student</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </>
          )}

          {isSignIn && (
            <div className="flex justify-between text-sm text-gray-600">
              <label className="flex items-center">
                <input type="checkbox" {...register("rememberMe")} className="mr-1" />
                Remember me
              </label>
              <a href="#" className="text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 transition"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}
