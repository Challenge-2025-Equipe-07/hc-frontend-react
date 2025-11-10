import { Outlet, ScrollRestoration } from "react-router";
import { AiButton, Footer, Navbar, NavbarItems } from "@/components";
import { AiChat } from "@/pages/Ai/AiChat";
import { useState } from "react";

const PagesLayout = ({ children }: { children?: React.ReactNode }) => {
  const [aiOpen, setAiOpen] = useState(false);

  return (
    <main className="grid-layout grid min-h-svh auto-rows-[max-content_1fr_max-content] p-4 max-md:px-0">
      <Navbar>
        <NavbarItems />
      </Navbar>
      <div className="pt-[calc(72px+24px)]">{children || <Outlet />}</div>
      <Footer />
      <ScrollRestoration />
      <div className="fixed right-8 bottom-6 z-60 grid gap-y-2">
        <AiChat isOpen={aiOpen} />
        <AiButton onClick={() => setAiOpen((prev) => !prev)} />
      </div>
    </main>
  );
};

export { PagesLayout };
