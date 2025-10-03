import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuthContext } from "../context/UserAuthContext";
import { toast } from "react-toastify";

const OAuthCallback = () => {
  const navigate = useNavigate();

  const { setName, setEmail, setIsLoggedIn, setProfilePicture } =
    useContext(UserAuthContext);

  useEffect(() => {
    const handleOAuthCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const success = urlParams.get("success");
      const error = urlParams.get("error");
      const token = urlParams.get("token");
      const username = urlParams.get("username");
      const email = urlParams.get("email");
      const displayName = urlParams.get("displayName");
      const profilePhoto = urlParams.get("profilePhoto");

      if (success === "true" && token) {
        try {
          // Set user data from URL parameters
          setName(displayName || username || "");
          setEmail(email || "");
          setProfilePicture(profilePhoto || "");
          setIsLoggedIn(true);
          toast.success("Successfully logged in with Google!");
          navigate("/home");
        } catch (err) {
          console.error("Error processing OAuth callback:", err);
          toast.error("Failed to process login");
          navigate("/login");
        }
      } else if (error) {
        toast.error("Google login failed: " + decodeURIComponent(error));
        navigate("/login");
      } else {
        // No valid parameters, redirect to login
        navigate("/login");
      }
    };

    handleOAuthCallback();
  }, [navigate, setIsLoggedIn, setName, setEmail, setProfilePicture]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-yellow-50">
      <div className="text-center">
        <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-orange-300 border-t-orange-600"></div>
        <p className="text-slate-600">Processing your login...</p>
      </div>
    </div>
  );
};

export default OAuthCallback;