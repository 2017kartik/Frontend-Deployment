import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const UserAuthContext = createContext();

export const UserAuthContextProvider = (props) => {
  axios.defaults.withCredentials = true;

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const emailServiceUrl = import.meta.env.VITE_EMAIL_SERVICE_URL;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to check authentication status
  const checkAuthStatus = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/v1/auth/me");
      if (response.data.success && response.data.user) {
        const user = response.data.user;
        setName(user.username || user.displayName || user.name || "");
        setEmail(user.email || "");
        setProfilePicture(user.profilePhoto || user.profilePicture || "");
        setIsLoggedIn(true);
        return true;
      } else {
        setIsLoggedIn(false);
        return false;
      }
    } catch (error) {
      // Only show toast for non-401 errors
      if (error.response?.status !== 401) {
        toast.error(error.message);
      }
      setIsLoggedIn(false);
      return false;
    }
  };

  // Function to logout user
  const logout = async () => {
    try {
      await axios.post(backendUrl + "/api/v1/auth/logout");
    } catch (error) {
      console.log("Logout error:", error);
    } finally {
      // Clear user data regardless of API call success
      setName("");
      setEmail("");
      setProfilePicture("");
      setIsLoggedIn(false);
    }
  };

  // Check authentication status on mount
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const value = {
    backendUrl,
    emailServiceUrl,
    isLoggedIn,
    setIsLoggedIn,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    profilePicture,
    setProfilePicture,
    checkAuthStatus,
    logout,
  };
  return (
    <UserAuthContext.Provider value={value}>
      {props.children}
    </UserAuthContext.Provider>
  );
};
