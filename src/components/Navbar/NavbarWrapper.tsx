import { NavLink } from "react-router";
import Logomarca from "@/assets/LogomarcaWhite.svg";

const NavbarWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="fixed z-50 grid w-[calc(100%-32px)] rounded-2xl bg-blue-500 px-8 py-4 text-gray-50 max-sm:mx-4">
      <div className="flex items-center justify-between">
        <NavLink
          to="/"
          aria-label="Ir para home"
          className="flex items-center gap-x-2"
        >
          <img src={Logomarca} alt="" role="presentation" />
          <strong className="subtitle">Reabili</strong>
        </NavLink>
        {children}
      </div>
    </header>
  );
};

export { NavbarWrapper };
