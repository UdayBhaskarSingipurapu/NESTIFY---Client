import { userLoginContext } from "./userLoginContext";
import { useState } from "react";
import axios from 'axios';

function UserLoginStore({ children }) {
  //login Store
  let [login, setLogin] = useState(false);
  let [user, setUser] = useState(null);
  let [Error, setError] = useState(null);
  // let navigate = useNavigate();

  //make a login req
  async function userLoginReq(userCredentials) {
    console.log(userCredentials)
    try {
      const response = await axios.post("http://localhost:5050/user/login", userCredentials, {
        withCredentials: true, // Ensures cookies are included
      });

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
  

  async function adminLoginReq(adminCred) {
    console.log(adminCred)
    try {
      const response = await axios.post("http://localhost:5050/owner/login", adminCred, {
        withCredentials: true, 
      });

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
        Error,
        setError,
      }}
    >
      {children}
    </userLoginContext.Provider>
  );
}

export default UserLoginStore;
