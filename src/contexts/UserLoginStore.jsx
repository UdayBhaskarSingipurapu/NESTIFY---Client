import { userLoginContext } from "./userLoginContext";
import { useState } from "react";
import axios from 'axios';


function UserLoginStore({ children }) {
  //login Store
  let [login, setLogin] = useState(false);
  let [user, setUser] = useState(null);
  let [Error, setError] = useState(null);
  let [currentHostleId, setCurrentHostleId] = useState(null);


  //make a login req
  async function userLoginReq(userCredentials) {
    console.log(userCredentials)
    try {
      const response = await axios.post("http://localhost:5050/user/login", userCredentials);

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


  async function settingCurrentHostle(idx) {
    const size = user.hostels.length;
    if(length === 0) {
      setCurrentHostleId(null);
      sessionStorage.setItem("currentHostle", JSON.stringify("null"));
      return;
    }
    let hostleId = user.hostels[idx];
    let res = await axios.get(`http://localhost:5050/hostel/${hostleId}`);
    console.log(res);
    // if (data.payload.hostels.length > 0) {
    //   setCurrentHostleId();
    //   sessionStorage.setItem(
    //     "currentHostle",
    //     JSON.stringify(data.payload.hostels[idx])
    //   );
    // } else {
    //   setCurrentHostleId(null);
    //   sessionStorage.setItem("currentHostle", JSON.stringify("null"));
    // }
  }
  

  async function adminLoginReq(adminCred) {
    console.log(adminCred)
    try {
      const response = await axios.post("http://localhost:5050/owner/login", adminCred, {
        withCredentials: true, 
      });
      console.log(response);
      const { status, data } = response;
      console.log(data.payload);
      console.log("User login response:", data);




      if (status === 200 && data.message === "User logged in successfully") {
        console.log(data.payload);
        setUser(data.payload);
        sessionStorage.setItem("user", JSON.stringify(data.payload));
        // settingCurrentHostle(0);
        console.log("yep");
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
      }}
    >
      {children}
    </userLoginContext.Provider>
  );
}

export default UserLoginStore;
