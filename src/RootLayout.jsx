import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/User/sidebar/Sidebar"; // Import the Sidebar component
import { Outlet, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { userLoginContext } from './contexts/userLoginContext';
import NotFound from "./NotFound";


function RootLayout() {
  const { login } = useContext(userLoginContext);
  const user = JSON.parse(sessionStorage.getItem("user"));
  // console.log(user)

  const location = useLocation()
  const isAllowed =
    user ||
    location.pathname === "/" ||
    location.pathname === "/sign-up" ||
    location.pathname === "/log-in" ||
    location.pathname === "/log-in/user"||
    location.pathname === "/log-in/admin"||
    location.pathname === "/sign-up/user"||
    location.pathname === "/sign-up/admin";

  return (
    <div>
      {!user && <Header />}
      {user?.role==="student" && <Sidebar />}
      <div className="min-h-screen">
        {
          true ? <Outlet /> : <div className="flex justify-center items-center h-screen"><h1 className="text-4xl font-bold">You are not allowed to access this page</h1></div>
        }
        
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;