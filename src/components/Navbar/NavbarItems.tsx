import { ListIcon } from "@phosphor-icons/react";
import { NavbarItem } from "./NavbarItem";
import { useState } from "react";
import { useResponsive } from "@/hooks/useResponsive";
import { Button } from "@/components/Button/Button";

const NavbarItems = () => {
  const [open, setOpen] = useState(false);
  const { isWeb } = useResponsive();

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav role="navigation" className="flex gap-x-4 sm:max-lg:flex-row-reverse">
      <button
        className="group grid w-fit min-w-9 place-items-center rounded-lg bg-gray-50 p-2 text-gray-900 transition-colors duration-300 ease-in-out hover:bg-sky-800 lg:hidden"
        data-js="mobile-button"
        aria-label="Abrir menu"
        aria-expanded="false"
        aria-controls="menuList"
        id="menuButton"
        onClick={handleOpen}
      >
        <ListIcon
          size={14}
          weight="bold"
          className="group-hover:fill-gray-50"
        />
      </button>

      {isWeb || open ? (
        <ul
          className={`right-0 bottom-0 grid text-gray-900 max-lg:absolute max-lg:max-w-40 max-lg:translate-y-[calc(100%+8px)] max-lg:overflow-hidden max-lg:rounded-lg max-lg:border-1 max-lg:border-gray-200 max-lg:bg-gray-50 lg:flex lg:items-center lg:justify-between lg:gap-4 lg:p-0 lg:text-inherit`}
          id="menuList"
          aria-labelledby="menuButton"
        >
          <NavbarItem to="/">Início</NavbarItem>
          <NavbarItem to="/faq">FAQ</NavbarItem>
          <NavbarItem to="/integrantes">Integrantes</NavbarItem>
          <NavbarItem to="/contato">Contato</NavbarItem>
        </ul>
      ) : null}
      <Button asLink to={"/agendar"} variant="tertiary">
        Entrar
      </Button>
    </nav>
  );
};

export { NavbarItems };
