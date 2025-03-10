import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./components/home/Home";
import StudentHome from "./components/student-home/StudentHome";
import UserDashboard from "./components/User/user-dashboard/UserDashboard";
import SignUp from "./components/sign-up/SignUp";
import UserSignUp from "./components/sign-up/UserSignUp";
import AdminSignUp from "./components/sign-up/AdminSignUp";
import Settings from "./components/User/settings/Settings";
import Login from "./components/log-in/Login";
import UserLogin from "./components/log-in/UserLogin";
import AdminLogIn from "./components/log-in/AdminLogin";
import HostleListing from "./components/hostle-listing/HostleListing";
import RoomDetails from "./components/hostle-listing/RoomDetails";
import AdminHomePage from "./components/admin_homepage/AdminHomePage";
import UserRoomDetails from "./components/User/user-room-details/UserRoomDetails";
import Samplehostel from "./components/samplehostel/Samplehostel";
import MealPlan from "./components/User/mealplan/MealPlan";
import MaintenanceForm from "./components/User/user-dashboard/MaintenanceForm";
import FeedbackForm from "./components/User/user-dashboard/FeedbackForm";
import EditForm from "./components/User/settings/EditForm";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import EditProfilePic from "./components/User/settings/EditProfilePic";
import EditPassword from "./components/User/settings/EditPassword";
import NotFound from "./NotFound";

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
          path: "maintenance-form",
          element: <MaintenanceForm />,
        },
        {
          path: "feedback-form",
          element: <FeedbackForm />,
        },
        {
          path: "user-dashboard",
          element: <UserDashboard />,
        },
        //admin
        {
          path: "/admin/dashboard",
          element: <AdminHomePage />,
        },
        {
          path: "/admin/settings",
          element: <AdminSettings />,
        },
        {
          path: "/admin/settings/edit-profilePic",
          element: <EditAdminProfilePic />,
        },
        {
          path: "/admin/settings/edit-password",
          element: <EditAdminPassword />,
        },
        {
          path: "/admin/settings/edit-hostleDetails",
          element: <EditAdminHostle />,
        },
        {
          path: "/admin/settings/edit-personalDetails",
          element: <EditAdminPersonalDetails />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
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
            },
          ],
        },
        {
          path: "admin/hostel-listing",
          element: <HostleListing />,
        },
        {
          path: "admin/room-details",
          element: <RoomDetails />,
        },
        {
          path: "hostle-details",
          element: <UserRoomDetails />,
        },
        {
          path: ":id/room-details",
          element: <RoomDetails />,
        },
        {
          path: "samplehostel",
          element: <Samplehostel />,
        },
        {
          path: "user-room-details",
          element: <UserRoomDetails />,
        },
        {
          path: "mealplan",
          element: <MealPlan />,
        },
        {
          path: "room-details",
          element: <RoomDetails />,
        },
        {
          path: "sample-hostel",
          element: <Samplehostel />,
        },
        {
          path: "edit-form",
          element: <EditForm />,
        },
        {
          path: "edit-profilePic",
          element: <EditProfilePic />,
        },
        {
          path: "edit-password",
          element: <EditPassword />,
        },
        {
          path: '*',
          element: <NotFound/>
        }
      ],
    },
  ]);
  return <RouterProvider router={browserRouter}>{children}</RouterProvider>;
}
export default App;
