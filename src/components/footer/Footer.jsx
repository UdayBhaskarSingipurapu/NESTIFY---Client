import React from "react";
import twitterLogo from "../../assets/twitterLogo.png";
import instaLogo from "../../assets/instaLogo.png";
import fbLogo from "../../assets/fbLogo.png";

function Footer() {
  return (
    <footer class="text-white  bg-gray-900">
      <div class="mx-auto w-full p-4 py-6 lg:py-8 lg:px-25">
        {/* top container */}
        <div class="md:flex md:justify-between">
          {/* logo + quote + social links */}
          <div className="flex flex-col gap-6 md:gap-10 mb-6">
            {/* logo */}
            <div >
              <a href="" class="flex items-center">
                <span class="self-center text-2xl font-semibold whitespace-nowrap">
                  Logo
                </span>
              </a>
            </div>
            {/* quote */}
            <div>
              <p className="text-gray-500 font-medium">
                "Making hostel management smarter and more efficient"
              </p>
            </div>
            {/* social links */}
            <div className="flex gap-4 items-center">
              <a href="#"><img src={fbLogo}></img></a>
              <a href="#"><img src={twitterLogo}/></a>
              <a href="#"><img src={instaLogo}/></a>
            </div>
          </div>

          {/* links */}
          <div class="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2">
            <div>
              <h2 class="mb-6 text-sm font-semibold uppercase">Solutions</h2>
              <ul class="text-gray-500 font-medium">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Room Management
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Meal Plans
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold uppercase">Support</h2>
              <ul class="text-gray-500  font-medium">
                <li class="mb-4">
                  <a href="#" class="hover:underline ">
                    Help Center
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="flex justify-center">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a href="#" class="hover:underline">
              Hostle Management System™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
