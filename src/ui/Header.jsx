import NavigationMenuDemo from "./Navbar";

const Header = () => {
  return (
    <nav className="flex h-full w-screen justify-between bg-yellow-50 px-2 lg:px-10 py-2 lg:pb-10">
      <div className="flex items-center justify-center gap-3">
        <img src="/Logo.jpeg" alt="Logo" className="h-10 w-10 rounded-full" />
        <h2 className="my-auto font-bold text-[#0B1E38] uppercase max-sm:text-sm">
          Shree Anandam
        </h2>
      </div>
      <NavigationMenuDemo />
    </nav>
  );
};  

export default Header;
