import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UserLoginStore from "./contexts/UserLoginStore.jsx";

// Wrap the entire app with UserLoginStore to provide context
createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <UserLoginStore>
      <App />
    </UserLoginStore>
  // </StrictMode>
);