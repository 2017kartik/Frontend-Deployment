import { Mail, Lock, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { UserAuthContext } from "../context/UserAuthContext";
import axios from "axios";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const navigate = useNavigate();
  const { backendUrl } = useContext(UserAuthContext);
  axios.defaults.withCredentials = true;

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [isEmailSent, setIsEmailSent] = useState("");
  const [otp, setOtp] = useState(0);
  const [isOtpSubmitted, setIsOtpSubmitted] = useState(false);

  const [resetToken, setResetToken] = useState("");

  const [loadingEmail, setLoadingEmail] = useState(false);
  const [loadingOtp, setLoadingOtp] = useState(false);
  const [loadingReset, setLoadingReset] = useState(false);

  const inputRefs = React.useRef([]);

  const handleInput = (e, index) => {
    if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text");
    const pasteArray = paste.split("");
    pasteArray.forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = char;
      }
    });
  };

  const onSubmitEmail = async (e) => {
    e.preventDefault();
    setLoadingEmail(true);
    try {
      const { data } = await axios.post(
        backendUrl + "/api/v1/auth/forgot-password",
        { email },
      );
      if (data.success) {
        toast.success(data.message);
        setIsEmailSent(true);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoadingEmail(false);
    }
  };

  const onSubmitOtp = async (e) => {
    e.preventDefault();
    const otpArray = inputRefs.current.map((e) => e.value);
    const enteredOtp = otpArray.join("");
    setOtp(enteredOtp);

    setLoadingOtp(true);
    try {
      const { data } = await axios.post(
        backendUrl + "/api/v1/auth/verify-reset-otp",
        { email, otp: enteredOtp },
      );
      if (data.success) {
        toast.success(data.message);
        setResetToken(data.data.resetToken);
        setIsOtpSubmitted(true);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoadingOtp(false);
    }
  };

  const onSubmitNewPassword = async (e) => {
    e.preventDefault();
    setLoadingReset(true);
    try {
      const { data } = await axios.post(
        backendUrl + "/api/v1/auth/reset-password",
        { resetToken: resetToken.resetToken, newPassword },
      );
      if (data.success) {
        toast.success(data.message);
        navigate("/login");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoadingReset(false);
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
            Reset your password to continue your wellness journey
          </p>
        </div>

        <div className="rounded-2xl border border-orange-100 bg-white p-8 shadow-xl">
          {/*Email Input */}
          {!isEmailSent && (
            <>
              <div className="mb-6">
                <h2 className="mb-2 text-center text-2xl font-semibold text-slate-800">
                  Reset Password
                </h2>
                <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-orange-400 to-amber-400"></div>
              </div>

              <form onSubmit={onSubmitEmail} className="space-y-5">
                <p className="mb-6 text-center text-slate-600">
                  Enter your registered email address to receive a reset code.
                </p>

                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <Mail className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email Address"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pr-4 pl-12 text-slate-700 placeholder-slate-400 transition-all duration-200 outline-none focus:border-orange-300 focus:bg-white focus:ring-2 focus:ring-orange-100"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loadingEmail}
                  className="flex w-full transform cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 outline-none hover:translate-y-[-1px] hover:from-orange-600 hover:to-amber-600 hover:shadow-xl focus:ring-4 focus:ring-orange-200 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {loadingEmail ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />{" "}
                      <span>Sending...</span>
                    </>
                  ) : (
                    "Send Reset Code"
                  )}
                </button>
              </form>
            </>
          )}

          {/*OTP Verification */}
          {!isOtpSubmitted && isEmailSent && (
            <>
              <div className="mb-6">
                <h2 className="mb-2 text-center text-2xl font-semibold text-slate-800">
                  Verify OTP
                </h2>
                <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-orange-400 to-amber-400"></div>
              </div>

              <form onSubmit={onSubmitOtp} className="space-y-5">
                <p className="mb-6 text-center text-slate-600">
                  Enter the 6-digit code sent to your email address.
                </p>

                <div
                  className="mb-8 flex justify-between"
                  onPaste={handlePaste}
                >
                  {Array(6)
                    .fill(0)
                    .map((_, index) => (
                      <input
                        type="text"
                        maxLength="1"
                        key={index}
                        required
                        className="h-12 w-12 rounded-xl border border-slate-200 bg-slate-50 text-center text-xl text-slate-700 transition-all duration-200 outline-none focus:border-orange-300 focus:bg-white focus:ring-2 focus:ring-orange-100"
                        ref={(e) => (inputRefs.current[index] = e)}
                        onInput={(e) => handleInput(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                      />
                    ))}
                </div>

                <button
                  type="submit"
                  disabled={loadingOtp}
                  className="flex w-full transform cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 outline-none hover:translate-y-[-1px] hover:from-orange-600 hover:to-amber-600 hover:shadow-xl focus:ring-4 focus:ring-orange-200 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {loadingOtp ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />{" "}
                      <span>Verifying...</span>
                    </>
                  ) : (
                    "Verify OTP"
                  )}
                </button>
              </form>
            </>
          )}

          {/*New Password */}
          {isOtpSubmitted && isEmailSent && (
            <>
              <div className="mb-6">
                <h2 className="mb-2 text-center text-2xl font-semibold text-slate-800">
                  New Password
                </h2>
                <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-orange-400 to-amber-400"></div>
              </div>

              <form onSubmit={onSubmitNewPassword} className="space-y-5">
                <p className="mb-6 text-center text-slate-600">
                  Enter your new password below.
                </p>

                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <Lock className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    type="password"
                    placeholder="New Password"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pr-4 pl-12 text-slate-700 placeholder-slate-400 transition-all duration-200 outline-none focus:border-orange-300 focus:bg-white focus:ring-2 focus:ring-orange-100"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loadingReset}
                  className="flex w-full transform cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 outline-none hover:translate-y-[-1px] hover:from-orange-600 hover:to-amber-600 hover:shadow-xl focus:ring-4 focus:ring-orange-200 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {loadingReset ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />{" "}
                      <span>Resetting...</span>
                    </>
                  ) : (
                    "Reset Password"
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
