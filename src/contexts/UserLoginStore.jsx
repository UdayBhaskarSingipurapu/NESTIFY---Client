import { userLoginContext } from "./userLoginContext";
import { useState } from "react";
import axios from "axios";
import hostels from "../data/hostelsData";
import { set } from "react-hook-form";

function UserLoginStore({ children }) {
  //login Store
  let [login, setLogin] = useState(false);
  let [user, setUser] = useState(null);
  let [Error, setError] = useState(null);
  let [hostels, setHostels] = useState(null);
  let [currentHosel, setCurrentHostel] = useState(null);
  let [currHosIdx, setCurrHosIdx] = useState(null);
  // let navigate = useNavigate();

  //make a login req
  async function userLoginReq(userCredentials) {
    console.log(userCredentials);
    try {
      const response = await axios.post(
        "http://localhost:5050/user/login",
        userCredentials
      );

      const { status, data } = response;
      console.log("User login response:", data);

      if (status === 200 && data.message === "User logged in successfully") {
        setUser(data.payload);
        sessionStorage.setItem("user", JSON.stringify(data.payload));
        setLogin(true);
      } else {
        setError(data?.message || "Unknown error occurred");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(err.response?.data?.message || "An error occurred during login");
    }
  }

  async function initilization({user, hostels}) {
    console.log(hostels);
    // if(hostels.length == 0) {
    //   sessionStorage.setItem("hostels", JSON.stringify(hostels));
    //   sessionStorage.setItem("currentHostel", JSON.stringify(null));
    //   sessionStorage.setItem("currHosIdx", JSON.stringify(-1));
    //   return;
    // }
    // setHostels(hostels);
    // setCurrHosIdx(idx.toString());
    // sessionStorage.setItem("currHosIdx", JSON.stringify(idx));
    // sessionStorage.setItem("hostels", JSON.stringify(hostels));
    // setCurrentHostel(hostels[idx]);
    // sessionStorage.setItem("currentHostel", JSON.stringify(hostels[idx]));
    sessionStorage.setItem("hostels", JSON.stringify(hostels));
    sessionStorage.setItem("currentHostel", JSON.stringify(null));
    sessionStorage.setItem("currHosIdx", JSON.stringify(-1));
    sessionStorage.setItem("user", JSON.stringify(user));
  }

  async function adminLoginReq(adminCred) {
    console.log(adminCred);
    try {
      const response = await axios.post(
        "http://localhost:5050/owner/login",
        adminCred,
        {
          withCredentials: true,
        }
      );

      const { status, data } = response;
      console.log("User login response:", data);

      if (status === 200 && data.message === "Owner logged in successfully") {
        setUser(data.payload);
        initilization(data.payload);
        // sessionStorage.setItem("user", JSON.stringify(data.payload.user));
        setLogin(true);
      } else {
        setError(data?.message || "Unknown error occurred");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(err.response?.data?.message || "An error occurred during login");
    }
  }

  function logout() {
    setLogin(false);
    setUser(null);
    setError(null);
    sessionStorage.removeItem("user");
  }
  // function adminLogout() {
  //   userLogout(); //added
  // }

  return (
    <userLoginContext.Provider
      value={{
        login,
        user,
        userLoginReq,
        adminLoginReq,
        setUser,
        Error,
        setError,
        logout, //added
        hostels,
        currentHosel,
        setCurrentHostel,
        setHostels,
      }}
    >
      {children}
    </userLoginContext.Provider>
  );
}

export default UserLoginStore;
