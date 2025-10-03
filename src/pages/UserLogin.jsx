import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, Loader2 } from "lucide-react";
import { UserAuthContext } from "../context/UserAuthContext";
import axios from "axios";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

const UserLogin = () => {
  const navigate = useNavigate();

  const { backendUrl, setName, setEmail, setIsLoggedIn, checkAuthStatus } =
    useContext(UserAuthContext);

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Check for error parameters (OAuth errors are handled in OAuthCallback component)
  useEffect(() => {
    const handleOAuthCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const success = urlParams.get("success");
      const error = urlParams.get("error");

      if (success === "true") {
        toast.success("Successfully logged in with Google!");
        setIsLoggedIn(true);
        await checkAuthStatus();
        navigate("/home");
      } else if (error) {
        toast.error("Google login failed: " + error);
      }
    };

    handleOAuthCallback();
  }, [navigate, setIsLoggedIn, checkAuthStatus]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      axios.defaults.withCredentials = true;

      setIsLoading(true);
      const { data } = await axios.post(backendUrl + "/api/v1/auth/signin", {
        email: userEmail,
        password: userPassword,
      });

      const token = data.data;
      const decode = jwtDecode(token);

      if (data.success) {
        toast.success(data.message);
        setName(decode.username);
        setEmail(decode.email);
        setIsLoggedIn(true);
        navigate("/home");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = backendUrl + "/api/v1/auth/google";
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-yellow-50 px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-slate-800">
            Your Path to Balance
          </h1>
          <p className="text-lg text-slate-600">
            Welcome back to your wellness journey
          </p>
        </div>

        {/* Form Container */}
        <div className="rounded-2xl border border-orange-100 bg-white p-8 shadow-xl">
          <div className="mb-6">
            <h2 className="mb-2 text-center text-2xl font-semibold text-slate-800">
              Sign In
            </h2>
            <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-orange-400 to-amber-400"></div>
          </div>

          <form onSubmit={onSubmitHandler} className="space-y-5">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <Mail className="h-5 w-5 text-slate-400" />
              </div>
              <input
                value={userEmail}
                disabled={isLoading}
                onChange={(e) => setUserEmail(e.target.value)}
                type="email"
                placeholder="Email Address"
                required
                className="text-md w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pr-4 pl-12 text-slate-700 placeholder-slate-400 transition-all duration-200 outline-none focus:border-orange-300 focus:bg-white focus:ring-2 focus:ring-orange-100 disabled:cursor-not-allowed disabled:opacity-60"
              />
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <Lock className="h-5 w-5 text-slate-400" />
              </div>
              <input
                value={userPassword}
                disabled={isLoading}
                onChange={(e) => setUserPassword(e.target.value)}
                type="password"
                placeholder="Password"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pr-4 pl-12 text-slate-700 placeholder-slate-400 transition-all duration-200 outline-none focus:border-orange-300 focus:bg-white focus:ring-2 focus:ring-orange-100 disabled:cursor-not-allowed disabled:opacity-60"
              />
            </div>

            <div className="text-right">
              <button
                type="button"
                onClick={() => navigate("/reset-password")}
                disabled={isLoading}
                className="cursor-pointer text-sm font-medium text-orange-600 underline underline-offset-2 transition-colors duration-200 hover:text-orange-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full transform cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 outline-none hover:translate-y-[-1px] hover:from-orange-600 hover:to-amber-600 hover:shadow-xl focus:ring-4 focus:ring-orange-200 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Signing in...</span>
                </>
              ) : (
                "Sign In"
              )}
            </button>

            {/* Google Login Button */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-white px-4 text-slate-500">
                  Or continue with
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl border-2 border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>
          </form>

          {/* Toggle Between Login/Signup */}
          <div className="mt-6 text-center">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-white px-4 text-slate-500">
                  New to our platform?
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => navigate("/register")}
              disabled={isLoading}
              className="mt-4 cursor-pointer text-sm font-medium text-orange-600 underline underline-offset-2 transition-colors duration-200 hover:text-orange-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              Create an account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
