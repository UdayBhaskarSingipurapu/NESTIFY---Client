import React from 'react'
import twitterLogo from "../../assets/twitterLogo.png";
import instaLogo from "../../assets/instaLogo.png";
import fbLogo from "../../assets/fbLogo.png";

function Footer() {
  return (
    <div className="bg-gray-800 text-white p-15">
      <div className="flex gap-50">
        <div className="flex flex-col gap-10">
          {/* <img src="" alt="" /> */}
          <div className="text-2xl font-bold">Logo</div>
          <div>Making hostel management smarter and more efficient </div>
          <div className="flex gap-4">
            <a href="">
              <img src={twitterLogo} alt="" />
            </a>
            <a href="">
              <img src={instaLogo} alt="" />
            </a>
            <a href="">
              <img src={fbLogo} alt="" />
            </a>
          </div>
        </div>

        <div className="flex gap-40">
          <div className="flex flex-col gap-4">
            <a href="">Solutions</a>
            <a href="">Room Management</a>
            <a href="">Meal Plans</a>
            <a href="">Security</a>
          </div>

          <div className="flex flex-col gap-4">
            <a href="">Support</a>
            <a href="">Help Center</a>
            <a href="">Contact Us</a>
            <a href="">Privacy</a>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-gray-700 mt-10"></div>

      <div className="text-center mt-5 text-gray-500">
        &copy;2024 Hostle Management System. All rights reserved.
      </div>
    </div>
  );
}

export default Footer
