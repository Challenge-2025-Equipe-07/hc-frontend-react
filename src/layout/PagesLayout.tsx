import { Outlet } from "react-router";
import { Footer } from "../components/Footer/Footer";
import { NavbarItems } from "../components/Navbar/NavbarItems";
import { NavbarWrapper } from "../components/Navbar/NavbarWrapper";

const PagesLayout = () => {
  return (
    <main className="grid grid-layout auto-rows-[max-content_1fr_max-content] min-h-svh p-4">
      <NavbarWrapper>
        <NavbarItems />
      </NavbarWrapper>
      <Outlet />
      <Footer />
    </main>
  );
};

export { PagesLayout };
