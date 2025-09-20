import { Outlet, ScrollRestoration } from "react-router";
import { AiButton, Footer, Navbar, NavbarItems } from "@/components";
import { AiChat } from "@/components/Ai/AiChat/AiChat";

const PagesLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <main className="grid-layout grid min-h-svh auto-rows-[max-content_1fr_max-content] p-4">
      <Navbar>
        <NavbarItems />
      </Navbar>
      <div className="pt-[calc(72px+24px)]">{children || <Outlet />}</div>
      <Footer />
      <ScrollRestoration />
      <div className="fixed right-8 bottom-6 z-10 grid">
        <AiChat />
        <AiButton onClick={() => console.log("click")} />
      </div>
    </main>
  );
};

export { PagesLayout };
