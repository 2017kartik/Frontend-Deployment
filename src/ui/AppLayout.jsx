import { Outlet } from "react-router-dom";
import Header from "./Header";

const AppLayout = () => {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <div className="overflow-scroll">
        <main className="max-w-screen mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
