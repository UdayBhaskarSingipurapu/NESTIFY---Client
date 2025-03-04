import React, { useContext } from "react";
import { set, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { userLoginContext } from "../../../contexts/userLoginContext";
import { ToastContainer } from "react-toastify";

const EditForm = () => {
  let {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  let navigate = useNavigate();
  let { user, setError, Error } = useContext(userLoginContext);

  async function userEditReq(userCred) {
    console.log(userCred);
    const formData = new FormData();

    // Append text fields
    formData.append("username", userCred.username);
    formData.append("email", userCred.email);
    formData.append("contact", userCred.contact);
    formData.append("password", userCred.password);
    // formData.append("parentName", userCred.parentName);
    // formData.append("parentContact", userCred.parentContact);

    // Append file. Make sure userCred.profileImage is a File object, not a FileList.
    // If you're using react-hook-form, you can set the file like this:
    // console.log(userCred.profileImage[0]);
    // formData.append("profileImage", userCred.profileImage[0]);
    console.log(formData);
    try {
      let res = await axios.post("http://localhost:5050/user/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res.status === 200) {
        if (res.data && res.data.message === "User registered successfully") {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            draggable: true,
          });
          setTimeout(() => {
            navigate("/log-in");
          }, 2000);
        } else {
          setError("Unknown error");
        }
      } else {
        setError(data.payload.message);
      }
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }

  async function onSave(userData) {
    userEditReq(userData);
  }
  console.log(errors);
  return (
    <div className="flex flex-col p-5 gap-5 bg-white rounded-bl-md rounded-br-md">
      <ToastContainer />
      {Error != null && <p className="text-red-500 font-semibold">{Error}</p>}
      <form
        action=""
        className="flex flex-col mt-5 gap-5 items-center"
        onSubmit={handleSubmit(onSave)}
        encType="multipart/form-data"
      >
        {/* userName */}
        <div className="sm:w-[500px] w-full">
          <label
            htmlFor="username"
            className="text-[#111827] text-lg font-semibold"
          >
            User Name
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
            // value={setValue("username", user.username)}
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
            // value={setValue("email", user.email)}
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
            Phone
            <span className="text-[#ff0011] text-xl font-semibold">*</span>
          </label>
          <input
            type="tel"
            id="contact"
            placeholder="Enter your phone number"
            {...register("contact", {
              required: true,
              minLength: 10,
              maxLength: 10,
              pattern: /^[0-9]*$/,
            })}
            // value={setValue("contact", user.contact)}
            className="block p-2 border-2 border-[#6B7280] text-xl rounded-md w-full"
          />
          {/* validations for phone */}
          {errors.contact?.type === "required" && (
            <p className="text-red-500 font-semibold">This field is required</p>
          )}
          {errors.phone?.type === "minLength" && (
            <p className="text-red-500 font-semibold">
              Phone number must be at least 10 digits
            </p>
          )}
          {errors.phone?.type === "maxLength" && (
            <p className="text-red-500 font-semibold">
              Phone number must be atmost 10 digits
            </p>
          )}
          {errors.phone?.type === "pattern" && (
            <p className="text-red-500 font-semibold">
              Phone number must contain only digits
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
            // value={setValue("password", user.password)}
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
        {/* parent/gardian name */}
        <div className="sm:w-[500px] w-full">
          <label
            htmlFor="parentName"
            className="text-[#111827] text-lg font-semibold"
          >
            Parent /gardian Name
            <span className="text-[#ff0011] text-xl font-semibold">*</span>
          </label>
          <input
            type="text"
            id="parentName"
            name=""
            placeholder="Enter your parent/gardian name"
            {...register("parentName", {
              required: true,
              minLength: 3,
              maxLength: 20,
            })}
            // value={setValue("parentName", user.parentName)}
            disabled
            className="block p-2 border-2 border-[#6B7280] text-xl rounded-md w-full"
          />
        </div>
        {/* parent/gardian phone */}
        <div className="sm:w-[500px] w-full">
          <label
            htmlFor="parentContact"
            className="text-[#111827] text-lg font-semibold"
          >
            Parent /gardian Phone
            <span className="text-[#ff0011] text-xl font-semibold">*</span>
          </label>
          <input
            type="tel"
            id="parentContact"
            placeholder="Enter your parent/gardian phone number"
            {...register("parentContact", {
              required: true,
              minLength: 10,
              maxLength: 10,
              pattern: /^[0-9]*$/,
            })}
            // value={setValue("parentContact", user.parentContact)}
            disabled
            className="block p-2 border-2 border-[#6B7280] text-xl rounded-md w-full"
          />
        </div>
        {/* profilePic */}
        <div className="sm:w-[500px] w-full ">
          <label
            className="text-[#111827] text-lg font-semibold "
            htmlFor="profileImage"
          >
            Upload Profile Picture
            <span className="text-[#ff0011] text-xl font-semibold">* </span>
            <span className="text-[#6B7280] font-semibold">
              (jpeg,png,gif,bmp,jpg)
            </span>
          </label>
          <div className="border-2 border-dashed border-[#6B7280] p-6 w-full rounded-md hover:bg-gray-100 flex items-center justify-center gap-1">
            <input
              type="file"
              id="profileImage"
              accept="image/jpeg, image/png, image/gif, image/bmp, image/jpg"
              {...register("profileImage", { required: true })}
              disabled
            />
            <span className="font-semibold">Or Drop Down</span>
          </div>
          {/* validations for profilePic */}
          {errors.profilePic?.type === "required" && (
            <p className="text-red-500 font-semibold">This field is required</p>
          )}
        </div>
        {/* submit */}
        <button
          type="submit"
          className="sm:w-[500px] w-full p-3 rounded-md font-semibold text-white bg-[#111827] hover:bg-gray-800 h-12 cursor-pointer"
        >
          SAVE
        </button>
      </form>
    </div>
  );
};

export default EditForm;
