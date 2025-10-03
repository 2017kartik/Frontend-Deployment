import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserAuthContext } from "../context/UserAuthContext";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn, checkAuthStatus } = useContext(UserAuthContext);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const verifyAuth = async () => {
      await checkAuthStatus();
      setIsChecking(false);
    };
    verifyAuth();
  }, [checkAuthStatus]);

  if (isChecking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="text-center">
          {/* Animated spinner */}
          <div className="relative mx-auto mb-6 h-20 w-20">
            <div className="absolute inset-0 rounded-full border-4 border-amber-200"></div>
            <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-amber-500"></div>
            <div
              className="absolute inset-2 animate-spin rounded-full border-4 border-transparent border-t-yellow-400"
              style={{
                animationDuration: "1.5s",
                animationDirection: "reverse",
              }}
            ></div>
          </div>

          {/* Loading text */}
          <h2 className="mb-2 text-2xl font-bold text-gray-800">
            Shree Anandam
          </h2>
          <p className="animate-pulse text-gray-600">
            Loading your path to balance...
          </p>

          {/* Decorative dots */}
          <div className="mt-4 flex justify-center gap-2">
            <span
              className="h-2 w-2 animate-bounce rounded-full bg-amber-400"
              style={{ animationDelay: "0s" }}
            ></span>
            <span
              className="h-2 w-2 animate-bounce rounded-full bg-yellow-400"
              style={{ animationDelay: "0.2s" }}
            ></span>
            <span
              className="h-2 w-2 animate-bounce rounded-full bg-orange-400"
              style={{ animationDelay: "0.4s" }}
            ></span>
          </div>
        </div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
