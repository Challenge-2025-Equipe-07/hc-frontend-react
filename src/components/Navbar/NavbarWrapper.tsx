import { LinkItem } from "@/components";

const NavbarWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="grid bg-red-600 text-white col-span-full rounded-lg px-4 py-2">
      <div className="flex justify-between items-center">
        <LinkItem route="/" aria-label="Ir para home">
          <img src="../assets/images/LogomarcaWhite.svg" alt="" />
          <strong>Ajuda HC</strong>
        </LinkItem>
        {children}
      </div>
    </header>
  );
};

export { NavbarWrapper };
