import React, { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { UserAuthContext } from "../context/UserAuthContext";
import { Loader2 } from "lucide-react";

const EmailVerify = () => {
  axios.defaults.withCredentials = true;
  const {
    backendUrl,
    emailServiceUrl,
    setIsLoggedIn,
    name,
    email,
    password,
    setName,
    setEmail,
    setPassword,
  } = useContext(UserAuthContext);

  const navigate = useNavigate();
  const inputRefs = React.useRef([]);
  const [isLoading, setIsLoading] = useState(false);

  // Move cursor forward on typing
  const handleInput = (e, index) => {
    if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Move cursor back on backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Handle paste into OTP inputs
  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text");
    const pasteArray = paste.split("");
    pasteArray.forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = char;
      }
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      const otpArray = inputRefs.current.map((e) => e.value);
      const otp = otpArray.join(""); // Convert to string

      const { data } = await axios.post(emailServiceUrl + "/otp/v1/verify", {
        email,
        otp,
      });

      if (data.message === "OTP verified") {
        const { data: signupData } = await axios.post(
          backendUrl + "/api/v1/auth/signup",
          {
            username: name,
            email: email,
            passwordHash: password,
          },
        );

        setName("");
        setEmail("");
        setPassword("");

        if (signupData.success) {
          toast.success(signupData.message);
          setIsLoggedIn(true);
          navigate("/login");
        } else {
          toast.error(signupData.message);
          setIsLoggedIn(false);
          navigate("/register");
        }
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
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
            Verify your email to continue your wellness journey
          </p>
        </div>

        {/* Form Container */}
        <div className="rounded-2xl border border-orange-100 bg-white p-8 shadow-xl">
          <div className="mb-6">
            <h2 className="mb-2 text-center text-2xl font-semibold text-slate-800">
              Email Verify OTP
            </h2>
            <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-orange-400 to-amber-400"></div>
          </div>

          <form onSubmit={onSubmitHandler} className="space-y-5">
            <p className="mb-6 text-center text-slate-600">
              Enter the 6-digit code sent to your email id.
            </p>

            <div className="mb-8 flex justify-between" onPaste={handlePaste}>
              {Array(6)
                .fill(0)
                .map((_, index) => (
                  <input
                    type="text"
                    maxLength="1"
                    key={index}
                    required
                    disabled={isLoading}
                    className="h-12 w-12 rounded-xl border border-slate-200 bg-slate-50 text-center text-xl text-slate-700 transition-all duration-200 outline-none focus:border-orange-300 focus:bg-white focus:ring-2 focus:ring-orange-100 disabled:cursor-not-allowed disabled:opacity-60"
                    ref={(e) => (inputRefs.current[index] = e)}
                    onInput={(e) => handleInput(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                  />
                ))}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full transform cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 outline-none hover:translate-y-[-1px] hover:from-orange-600 hover:to-amber-600 hover:shadow-xl focus:ring-4 focus:ring-orange-200 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Verifying OTP...</span>
                </>
              ) : (
                "Verify & Create Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailVerify;
