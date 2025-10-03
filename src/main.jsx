import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserAuthContextProvider } from "./context/UserAuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <UserAuthContextProvider>
    <App />
  </UserAuthContextProvider>,
);
