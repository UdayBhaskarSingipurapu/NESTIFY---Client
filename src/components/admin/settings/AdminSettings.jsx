import React from "react";

import { Link } from "react-router-dom";

import EditAdminHostle from "./EditAdminHostle";

import EditAdminPassword from "./EditAdminPassword";

import EditAdminProfilePic from "./EditAdminProfilePic";

import EditAdminPersonalDetails from "./EditAdminPersonalDetails";

import { CiLock } from "react-icons/ci";

import { FaRegUser } from "react-icons/fa6";

import { MdOutlineShield } from "react-icons/md";

import { LuBlocks } from "react-icons/lu";

const AdminSettings = () => {
  return (
    <div>
      <div className="bg-gray-200 p-7 min-h-screen">
        <div className="max-w-[1700px] m-auto h-full overflow-auto">
          <h1 className="text-2xl font-bold text-[#111827]">Settings</h1>

          {/* Edit Profile Detials */}

          <div className="bg-white rounded-md mt-4">
            <section className="p-4 flex items-center gap-2">
              <FaRegUser />

              <h2 className="text-[#111827] text-xl font-semibold">
                Personal Details
              </h2>
            </section>

            <section className="p-8 border-t border-[#dcddde] flex flex-col gap-4">
              <div className="flex flex-wrap items-center justify-between p-2 rounded-md hover:bg-gray-200">
                <div>
                  <p className="text-[#111827] text-lg font-semibold">
                    Updata profile Image
                  </p>

                  <p className="text-[#6B7280] text-sm font-semibold">
                    Update your profile Image
                  </p>
                </div>

                <Link
                  to="/admin/settings/edit-profilePic"
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
                  to="/admin/settings/edit-personalDetails"
                  className="text-blue-500 cursor-pointer"
                >
                  Edit
                </Link>
              </div>

              <div className="flex flex-wrap items-center justify-between p-2 rounded-md hover:bg-gray-200">
                <div>
                  <p className="text-[#111827] text-lg font-semibold">
                    Change Password
                  </p>

                  <p className="text-[#6B7280] text-sm font-semibold">
                    Update your password
                  </p>
                </div>

                <Link
                  to="/admin/settings/edit-password"
                  className="text-blue-500 cursor-pointer"
                >
                  Edit
                </Link>
              </div>
            </section>
          </div>

          {/* Edit hostel details */}

          <div className="bg-white rounded-md mt-4">
            <section className="p-4 flex items-center gap-2">
              <LuBlocks className="text-xl" />

              <h2 className="text-[#111827] text-xl font-semibold">
                Hostel Detials
              </h2>
            </section>

            <section className="p-8 border-t border-[#dcddde] flex flex-col gap-4">
              <div className="flex flex-wrap items-center justify-between p-2 rounded-md hover:bg-gray-200">
                <div>
                  <p className="text-[#111827] text-lg font-semibold">
                    Updata Hostel Image
                  </p>

                  <p className="text-[#6B7280] text-sm font-semibold">
                    Update your hostel Image
                  </p>
                </div>

                <Link
                  to="/edit-profilePic"
                  className="text-blue-500 cursor-pointer"
                >
                  Edit
                </Link>
              </div>

              <div className="flex flex-wrap items-center justify-between p-2 rounded-md hover:bg-gray-200">
                <div>
                  <p className="text-[#111827] text-lg font-semibold">
                    Update hostel Information
                  </p>

                  <p className="text-[#6B7280] text-sm font-semibold">
                    Update your hostel details
                  </p>
                </div>

                <Link
                  to="/admin/settings/edit-hostleDetails"
                  className="text-blue-500 cursor-pointer"
                >
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

                <Link to="#" className="text-blue-500 cursor-pointer">
                  view
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center mt-7"></div>
      ;
    </div>
  );
};

export default AdminSettings;
