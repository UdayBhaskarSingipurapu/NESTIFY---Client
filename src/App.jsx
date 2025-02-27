import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./components/home/Home";
import StudentHome from "./components/student-home/StudentHome";
import UserDashboard from "./components/user-dashboard/UserDashboard";
import SignUp from "./components/sign-up/SignUp";
import UserSignUp from "./components/sign-up/UserSignUp";
import AdminSignUp from "./components/sign-up/AdminSignUp";
import Settings from "./components/settings/Settings";
import Login from "./components/log-in/Login";
import UserLogin from "./components/log-in/UserLogin";
import AdminLogIn from "./components/log-in/AdminLogin";
import HostleListing from "./components/hostle-listing/HostleListing";
import RoomDetails from "./components/hostle-listing/RoomDetails";
import AdminHomePage from "./components/admin_homepage/AdminHomePage"
import UserRoomDetails from "./components/user-room-details/UserRoomDetails";

function App({ children }) {
  const browserRouter = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "student-home",
          element: <StudentHome />,
        },
        {
          path: "user-dashboard",
          element: <UserDashboard />,
        },
        {
          path: "admin_homepage",
          element: <AdminHomePage />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
        {
          path: "sign-up",
          element: <SignUp />,
          children: [
            {
              path: "",
              element: <UserSignUp />,
            },
            {
              path: "user",
              element: <UserSignUp />,
            },
            {
              path: "admin",
              element: <AdminSignUp />,
            },
          ],
        },
        {
          path: "log-in",
          element: <Login />,
          children: [
            {
              path: "",
              element: <UserLogin />,
            },
            {
              path: "user",
              element: <UserLogin />,
            },
            {
              path: "admin",
              element: <AdminLogIn />,
            }
          ],
        },
        {
          path: "hostle-listing",
          element: <HostleListing/>
        },
        {
          path: "room-details",
          element: <RoomDetails/>
        }, 
        {
          path:"hostle-details",
          element:<UserRoomDetails/>
        }
      ],
    },
  ]);
  return <RouterProvider router={browserRouter}>{children}</RouterProvider>;
}
export default App;