import { Outlet, ScrollRestoration } from "react-router";
import { Footer, Navbar, NavbarItems } from "@/components";

const PagesLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <main className="grid-layout grid min-h-svh auto-rows-[max-content_1fr_max-content] p-4">
      <Navbar>
        <NavbarItems />
      </Navbar>
      <div className="pt-[calc(72px+24px)]">{children || <Outlet />}</div>
      <Footer />
      <ScrollRestoration />
    </main>
  );
};

export { PagesLayout };
