import React from "react";
import { FaRegUser } from "react-icons/fa6";
import { CiLock } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineShield } from "react-icons/md";

const Settings = () => {
  return (
    <div className="bg-gray-200 p-7 md:ml-48">
      <div className="max-w-[1700px] m-auto h-full overflow-auto">
        <h1 className="text-2xl font-bold text-[#111827]">Settings</h1>

        {/* Profile Settings */}
        <div className="bg-white rounded-md mt-4">
          <section className="p-4 flex items-center gap-2">
            <FaRegUser />
            <h2 className="text-[#111827] text-xl font-semibold">
              Profile Settings
            </h2>
          </section>
          <section className="p-8 border-t border-[#dcddde] flex flex-col gap-4">
            <div className="flex flex-wrap items-center justify-between p-2 rounded-md hover:bg-gray-200">
              <div>
                <p className="text-[#111827] text-lg font-semibold">
                  Update Profile Picture
                </p>
                <p className="text-[#6B7280] text-sm font-semibold">
                  Change your profile picture
                </p>
              </div>
              <Link
                to="edit-profile-picture"
                className="text-blue-500 cursor-pointer"
              >
                Edit
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-between p-2 rounded-md hover:bg-gray-200">
              <div>
                <p className="text-[#111827] text-lg font-semibold">
                  Personal Information
                </p>
                <p className="text-[#6B7280] text-sm font-semibold">
                  Update your personal details
                </p>
              </div>
              <Link
                to="edit-personal-information"
                className="text-blue-500 cursor-pointer"
              >
                Edit
              </Link>
            </div>
          </section>
        </div>

        {/* Security */}
        <div className="bg-white rounded-md mt-4">
          <section className="p-4 flex items-center gap-2">
            <CiLock className="text-xl" />
            <h2 className="text-[#111827] text-xl font-semibold">Security</h2>
          </section>
          <section className="p-8 border-t border-[#dcddde] flex flex-col gap-4">
            <div className="flex flex-wrap items-center justify-between p-2 rounded-md hover:bg-gray-200">
              <div>
                <p className="text-[#111827] text-lg font-semibold">
                  Change Password
                </p>
                <p className="text-[#6B7280] text-sm font-semibold">
                  Update your password
                </p>
              </div>
              <Link to="editpassword" className="text-blue-500 cursor-pointer">
                Edit
              </Link>
            </div>
          </section>
        </div>

        {/* Appearance */}
        <div className="bg-white rounded-md mt-4">
          <section className="p-4 flex items-center gap-2">
            <IoMoonOutline className="text-xl" />
            <h2 className="text-[#111827] text-xl font-semibold">Appearance</h2>
          </section>
          <section className="p-8 border-t border-[#dcddde] flex flex-col gap-4">
            <div className="flex flex-wrap items-center justify-between p-2 rounded-md hover:bg-gray-200">
              <div>
                <p className="text-[#111827] text-lg font-semibold">Theme</p>
                <p className="text-[#6B7280] text-sm font-semibold">
                  Choose light or dark mode
                </p>
              </div>
              <Link to="edit-theme" className="text-blue-500 cursor-pointer">
                Edit
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-between p-2 rounded-md hover:bg-gray-200">
              <div>
                <p className="text-[#111827] text-lg font-semibold">Language</p>
                <p className="text-[#6B7280] text-sm font-semibold">
                  Select your preferred language
                </p>
              </div>
              <Link to="edit-language" className="text-blue-500 cursor-pointer">
                Edit
              </Link>
            </div>
          </section>
        </div>

        {/* Privacy settings */}
        <div className="bg-white rounded-md mt-4">
          <section className="p-4 flex items-center gap-2">
            <MdOutlineShield className="text-xl" />
            <h2 className="text-[#111827] text-xl font-semibold">
              Privacy Policy
            </h2>
          </section>
          <section className="p-8 border-t border-[#dcddde] flex flex-col gap-4">
            <div className="flex flex-wrap items-center justify-between p-2 rounded-md hover:bg-gray-200">
              <div>
                <p className="text-[#111827] text-lg font-semibold">
                  Privacy and Policy
                </p>
                <p className="text-[#6B7280] text-sm font-semibold">
                  Privacy and Policy Settings
                </p>
              </div>
              <Link
                to="View-privacy-policy"
                className="text-blue-500 cursor-pointer"
              >
                view
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Settings;
