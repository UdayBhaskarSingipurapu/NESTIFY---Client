import { userLoginContext } from "./userLoginContext";
import { useState } from "react";
import axios from "axios";
import hostels from "../data/hostelsData";
import { set } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";

function UserLoginStore({ children }) {
  //login Store
  let [login, setLogin] = useState(false);
  let [user, setUser] = useState(null);
  let [Error, setError] = useState(null);
  let [hostels, setHostels] = useState(null);
  let [currentHostel, setCurrentHostel] = useState(null); 
  let [currHosIdx, setCurrHosIdx] = useState(null); //for admin
  // const navigate = useNavigate();
  // let navigate = useNavigate();

  function updateDetailsStd() {
    console.log(JSON.parse(sessionStorage.getItem("user")));
    setUser(JSON.parse(sessionStorage.getItem("user")));
    console.log(user);
  }


  async function fetchHostel(hostel) { //fetch the hostel details for the user in which he is in
    try {
      await axios
        .get(`http://localhost:5050/hostel/${hostel}`)
        .then((res) => {
          console.log(res);
          // setCurrentHostel(res.data.payload);
          // sessionStorage.setItem("currentHostel", JSON.stringify(res.data.payload));
        })
        .catch((err) => {
          setError(
            err.response?.data?.message || "An error occurred during login"
          );
          console.log(err);
        });
    } catch (err) {
      console.error("Login error:", err);
      setError(err.response?.data?.message || "An error occurred during login");
    }
  }

  async function fetchAllHostels() { //fetch all the hostels details
    console.log("Fetching hostels...");
    try {
      await axios
        .get("http://localhost:5050/hostel/")
        .then((res) => {
          console.log(res);
          // sessionStorage.setItem("hostels", JSON.stringify(res.data.payload));
          sessionStorage.setItem("hostels", JSON.stringify(res.data.payload));
        })
        .catch((err) => {
          setError(
            err.response?.data?.message || "An error occurred during login"
          );
          console.log(err);
        });
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred during login");
    }
  }

  function setDetails(user) { //initilization of some important details for user side
    // update
    updateDetailsStd();
    console.log(user);
    if(user.room === undefined) {
      sessionStorage.setItem("currentRoom", JSON.stringify(null));
      sessionStorage.setItem("currentHostel", JSON.stringify(null));
    }
    else {
      sessionStorage.setItem("currentRoom", JSON.stringify(user.room));
      fetchHostel(user.room.hostel);
    }
    sessionStorage.setItem("hostelRequests", JSON.stringify(user.hostelRequests));
  }

  async function userLoginReq(userCredentials) {
    console.log(userCredentials);
    try {
      await axios
        .post("http://localhost:5050/user/login", userCredentials)
        .then((res) => {
          console.log(res);
          setUser(res.data.payload);
          setLogin(true);
          sessionStorage.setItem("user", JSON.stringify(res.data.payload));
          // Getting all the hostles in the database...
          fetchAllHostels();
          setDetails(res.data.payload);
        })
        .catch((err) => {
          setError(
            err.response?.data?.message || "An error occurred during login"
          );
          console.log(err);
        });
    } catch (err) {
      console.error("Login error:", err);
      setError(err.response?.data?.message || "An error occurred during login");
    }
  }

  async function initilization({ user, hostels }) {
    console.log(hostels);
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
        currentHostel,
        setCurrentHostel,
        setHostels,
      }}
    >
      {children}
    </userLoginContext.Provider>
  );
}

export default UserLoginStore;
