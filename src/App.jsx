import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./components/home/Home";
import Register from "./components/register/Register"; 
import  StudentHome from "./components/student-home/StudentHome";
import UserHomePage from "./components/user-home-page/UserHomePage";
import SignUp from "./components/sign-up/SignUp";
import UserSignUp from "./components/sign-up/UserSignUp";
import AdminSignUp from "./components/sign-up/AdminSignUp";

function App({children}) {
  const browserRouter = createBrowserRouter([
    {
      path: "",
      element: <RootLayout/>,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "studenthome",
          element: <StudentHome />,
        },
        {
          path: "user-dashboard",
          element: <UserHomePage />,
        },
        {
          path: "sign-up",
          element: <SignUp/>,
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
            }
          ]
        },
      ],
    },
  ]);
  return <RouterProvider router={browserRouter}>
    {children}
  </RouterProvider>
}
export default App;