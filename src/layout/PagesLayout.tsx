import { Outlet } from "react-router";
import { Footer } from "../components/Footer/Footer";
import { NavbarItems } from "../components/Navbar/NavbarItems";
import { NavbarWrapper } from "../components/Navbar/NavbarWrapper";

const PagesLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <main className="grid-layout grid min-h-svh auto-rows-[max-content_1fr_max-content] p-4">
      <NavbarWrapper>
        <NavbarItems />
      </NavbarWrapper>
      {children || <Outlet />}
      <Footer />
    </main>
  );
};

export { PagesLayout };
