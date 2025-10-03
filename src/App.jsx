import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";
import UserLogin from "./pages/UserLogin";
import Dashboard from "./pages/Dashboard";
import ResetPassword from "./pages/ResetPassword";
import { ToastContainer } from "react-toastify";
import EmailVerify from "./pages/EmailVerify";
import ProtectedRoute from "./ui/ProtectedRoute";
import UserRegister from "./pages/UserRegister";
import OAuthCallback from "./pages/OAuthCallback";

const router = createBrowserRouter([
  {
    element: (
      // <ProtectedRoute>
        <AppLayout />
      // </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate replace to="home" />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "register",
    element: <UserRegister />,
  },
  {
    path: "oauth-callback",
    element: <OAuthCallback />,
  },
  {
    path: "oauth-callback",
    element: <OAuthCallback />,
  },
  {
    path: "verify-email",
    element: <EmailVerify />,
  },
  {
    path: "login",
    element: <UserLogin />,
  },
  {
    path: "reset-password",
    element: <ResetPassword />,
  },
]);

const App = () => {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
