import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./components/home/Home";
import Register from "./components/register/Register";
import StudentHome from "./components/studenthome/StudentHome";





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
        }

      ]
    },
    
  ])
  return <RouterProvider router={browserRouter}>
    {children}
  </RouterProvider>
}
export default App;