import { createBrowserRouter } from "react-router";
import { Landing } from "@/pages/Landing/Landing";
import { Integrantes } from "@/pages/Integrantes/Integrantes";
import { PagesLayout } from "@/layout/PagesLayout";
import { Faq } from "@/pages/Faq/Faq";
import { Duvida } from "@/pages/Duvida/Duvida";
import { Contato } from "@/pages/Contato/Contato";
import { SchedulingPage } from "@/pages/Scheduling/Scheduling";
import { ErrorPage } from "@/pages/Error/ErrorPage";
import { ChatPage } from "@/pages/Chat/Chat";

const router = createBrowserRouter([
  {
    Component: PagesLayout,
    errorElement: (
      <PagesLayout>
        <ErrorPage />
      </PagesLayout>
    ),
    children: [
      { index: true, Component: Landing },
      { path: "/integrantes", Component: Integrantes },
      { path: "/faq", Component: Faq },
      { path: "/duvida/:content", Component: Duvida },
      { path: "/contato", Component: Contato },
      { path: "/consulta", Component: SchedulingPage },
      { path: "/chat", Component: ChatPage },
    ],
  },
]);

export default router;
