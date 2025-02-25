import { userLoginContext } from "./userLoginContext";
import { useState } from "react";

function UserLoginStore({ children }) {
  //login Store
  let [login, setLogin] = useState(false);
  let [user, setUser] = useState(null);
  let [Error, setError] = useState(null);
  // let navigate = useNavigate();

  //make a login req
  async function userLoginReq(userCred) {
    try {
      let res = await fetch("http://localhost:5050/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCred),
      });
      let data = await res.json();
      if (res.status === 200) {
        if (data && data.message === "User logged in successfully") {
          setUser(data.payload);
          sessionStorage.setItem("user", JSON.stringify(data.payload));
          setLogin(true);
          toast.success(data.message, {
            position: "top-center",
            autoClose: 2000,
            draggable: true,
          });
        } else {
          setError("Unknown error");
        }
      } else {
        setError(data.payload.message);
      }
    } catch (err) {
      setError(err.message);
    }
  }

  async function adminLoginReq(adminCred) {
    try {
      let res = await fetch("http://localhost:5050/owner/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(adminCred),
      });
      if (res.status === 200) {
        if (data && data.message === "User logged in successfully") {
          setUser(data.payload);
          sessionStorage.setItem("user", JSON.stringify(data.payload));
          setLogin(true);
                    toast.success(data.message, {
            position: "top-center",
            autoClose: 2000,
            draggable: true,
          });
        } else {
          setError("Unknown error");
        }
      } else {
        setError(data.payload.message);
      }
    } catch (err) {
      setError(err.message);
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
