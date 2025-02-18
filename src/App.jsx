import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./components/home/Home";
import Register from "./components/register/Register";
import StudentHome from "./components/studenthome/StudentHome";
import UserHomePage from "./components/user-home-page/UserHomePage";





function App({children}) {
  const browserRouter = createBrowserRouter([
    {
      path: '',
      element: <RootLayout />,
      children: [
        {
          path: '',
          element:<Home/>
        },
        {
          path: 'register',
          element:<Register/>
        },
        {
          path: 'studenthome',
          element:<StudentHome/>
        },
        {
          path: 'user-dashboard',
          element:<UserHomePage/>
        }
      ]
    },
    
  ])
  return <RouterProvider router={browserRouter}>
    {children}
  </RouterProvider>
}
export default App;