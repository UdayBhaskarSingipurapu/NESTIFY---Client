import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthRedirect = () => {
    const navigate = useNavigate();

    useEffect(() => {
    // Extract user details from the URL
    const params = new URLSearchParams(window.location.search);
    const userParam = params.get("user");

    if (userParam) {
        try {
        const user = JSON.parse(decodeURIComponent(userParam));
        console.log(user)
        // Store user details in sessionStorage
        sessionStorage.setItem("user", JSON.stringify(user));

        // Redirect to home after a short delay
        setTimeout(() => {
            navigate("/student-home");
        }, 2000);
        } catch (error) {
            console.error("Error parsing user data:", error);
        }
    }
    }, [navigate]);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h2 className="text-2xl font-semibold text-gray-700">Navigating to Home...</h2>
            <p className="text-gray-500 mt-2">Please wait while we process your login.</p>
        </div>
    );
};

export default AuthRedirect;
