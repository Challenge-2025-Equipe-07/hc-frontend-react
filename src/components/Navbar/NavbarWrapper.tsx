import { LinkItem } from "@/components";

const NavbarWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="col-span-full grid rounded-lg bg-blue-500 px-4 py-2 text-white">
      <div className="flex items-center justify-between">
        <LinkItem route="/" aria-label="Ir para home">
          <img
            src="../assets/images/LogomarcaWhite.svg"
            alt=""
            role="presentation"
          />
          <strong className="title">Ajuda HC</strong>
        </LinkItem>
        {children}
      </div>
    </header>
  );
};

export { NavbarWrapper };
