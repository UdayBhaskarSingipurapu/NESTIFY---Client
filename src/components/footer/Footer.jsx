import React,{useContext} from "react";
import twitterLogo from "../../assets/twitterLogo.png";
import instaLogo from "../../assets/instaLogo.png";
import fbLogo from "../../assets/fbLogo.png";
import { userLoginContext } from "../../contexts/userLoginContext";

function Footer() {

  const { login } = useContext(userLoginContext);
  const user = JSON.parse(sessionStorage.getItem("user"));

  return (
    <footer className={`text-white bg-gray-900  ${user?.role==="student" ? "md:ml-48" : ""}`}>
      <div className="mx-auto w-full p-4 py-6 lg:py-8 lg:px-25 max-w-[1700px]">
        {/* top container */}
        <div className="md:flex md:justify-between">
          {/* logo + quote + social links */}
          <div className="flex flex-col gap-6 md:gap-10 mb-6">
            {/* logo */}
            <div >
              <a href="" className="flex items-center">
                <span className="self-center text-2xl font-semibold whitespace-nowrap">
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
          <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Solutions</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Room Management
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Meal Plans
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Support</h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline ">
                    Help Center
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex justify-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a href="#" className="hover:underline">
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
