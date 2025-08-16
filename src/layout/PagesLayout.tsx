import { Outlet } from "react-router";
import { Footer } from "../components/Footer/Footer";
import { NavbarItems } from "../components/Navbar/NavbarItems";
import { NavbarWrapper } from "../components/Navbar/NavbarWrapper";

const PagesLayout = () => {
  return (
    <>
      <NavbarWrapper>
        <NavbarItems />
      </NavbarWrapper>
      <Outlet />
      <Footer />
    </>
  );
};

export { PagesLayout };
