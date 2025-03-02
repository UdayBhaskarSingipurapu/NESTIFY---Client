import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/User/sidebar/Sidebar"; // Import the Sidebar component
import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { userLoginContext } from './contexts/userLoginContext';

function RootLayout() {
  const { login } = useContext(userLoginContext);

  return (
    <div>
      {!login && <Header />}
      {login && <Sidebar />}
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;