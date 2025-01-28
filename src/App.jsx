import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./components/Home";




function App({children}) {
  const browserRouter = createBrowserRouter([
    {
      path: '',
      element: <RootLayout />,
      children: [
        {
          path: '',
          element:<Home/>
        }
      ]
    },
    
  ])
  return <RouterProvider router={browserRouter}>
    {children}
  </RouterProvider>
}
export default App;