import { Footer } from "./components/Footer/Footer";
import { NavbarItems } from "./components/Navbar/NavbarItems";
import { NavbarWrapper } from "./components/Navbar/NavbarWrapper";
import { Integrantes } from "./pages/Integrantes/Integrantes";
function App() {
  return (
    <>
      <NavbarWrapper>
        <NavbarItems />
      </NavbarWrapper>
      <Integrantes />
      <Footer />
    </>
  );
}

export default App;
