import { NavLink } from "react-router";
import type { NavbarItemsProps } from "./Navbar.types";

const NavbarItem = ({ children, to }: NavbarItemsProps) => {
  return (
    <li className="body border-b border-gray-900 px-4 py-2 text-gray-600 last:border-b-0 hover:bg-gray-100 hover:text-blue-500 lg:border-b-0 lg:p-0 lg:text-gray-50 lg:hover:bg-transparent lg:hover:text-blue-200">
      <NavLink
        to={to}
        className={({ isActive }) =>
          `block h-full w-full ${isActive ? "font-bold text-blue-800 hover:text-blue-200" : ""}`
        }
      >
        {children}
      </NavLink>
    </li>
  );
};

export { NavbarItem };
