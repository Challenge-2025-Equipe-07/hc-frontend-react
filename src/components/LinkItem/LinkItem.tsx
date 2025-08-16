import { NavLink } from "react-router";
import type { NavbarItemType } from "./LinkItem.types";

const LinkItem = ({ route, children }: NavbarItemType) => {
  return (
    <NavLink
      to={route}
      className={({ isActive }) => (isActive ? "text-red-300" : "")}
    >
      {children}
    </NavLink>
  );
};

export { LinkItem };
