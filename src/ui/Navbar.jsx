import { useContext, useState, useEffect, useRef } from "react";
import { UserAuthContext } from "../context/UserAuthContext";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../components/ui/navigation-menu";
import { NavLink, useNavigate } from "react-router-dom";
import { LogOut, User, ChevronDown } from "lucide-react";

export default function NavigationMenuDemo() {
  const { name, email, profilePicture, isLoggedIn, logout } =
    useContext(UserAuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <NavLink to="/">Home</NavLink>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {isLoggedIn && (
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <NavLink to="/dashboard">Dashboard</NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
        )}

        {isLoggedIn ? (
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-orange-50"
            >
              {profilePicture ? (
                <img
                  src={profilePicture}
                  alt="Profile"
                  className="h-8 w-8 rounded-full border-2 border-orange-300"
                />
              ) : (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-orange-400 to-amber-400">
                  <span className="text-sm font-semibold text-white">
                    {name ? name.charAt(0).toUpperCase() : "U"}
                  </span>
                </div>
              )}
              <span className="hidden max-w-24 truncate text-sm font-medium text-slate-700 sm:block">
                {name || email || "User"}
              </span>
              <ChevronDown className="h-4 w-4 text-slate-500" />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 z-50 mt-2 w-56 cursor-pointer rounded-xl border border-slate-200 bg-white shadow-lg">
                <div className="border-b border-slate-100 p-4">
                  <div className="flex items-center gap-3">
                    {profilePicture ? (
                      <img
                        src={profilePicture}
                        alt="Profile"
                        className="h-10 w-10 rounded-full border-2 border-orange-300"
                      />
                    ) : (
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-orange-400 to-amber-400">
                        <User className="h-5 w-5 text-white" />
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-slate-900">
                        {name || "User"}
                      </p>
                      <p className="truncate text-sm text-slate-500">
                        {email || "No email"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <button
                    onClick={handleLogout}
                    className="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm text-red-600 transition-colors hover:bg-red-50"
                  >
                    <LogOut className="h-4 w-4" />
                    Sign out
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <NavLink to="/login">Login</NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
