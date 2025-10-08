import { Outlet } from "react-router-dom";
import Header from "./Header";

const AppLayout = () => {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] w-full">
      <Header />
      <div className="overflow-scroll w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
