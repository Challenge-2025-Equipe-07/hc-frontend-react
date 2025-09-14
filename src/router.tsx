import { createBrowserRouter, redirect } from "react-router";
import { Landing } from "@/pages/Landing/Landing";
import { Integrantes } from "@/pages/Integrantes/Integrantes";
import { PagesLayout } from "@/layout/PagesLayout";
import { Faq } from "@/pages/Faq/Faq";
import { Duvida } from "@/pages/Duvida/Duvida";
import { Contato } from "@/pages/Contato/Contato";
import { Agendamento } from "@/pages/Agendamento/Agendamento";
import { ErrorPage } from "@/pages/Error/ErrorPage";
import { ChatPage } from "@/pages/Chat/Chat";
import { EnvioAgendamento } from "@/pages/EnvioAgendamento/EnvioAgendamento";

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
      {
        path: "/duvida",
        loader: () => redirect("/"),
      },
      { path: "/duvida/:content", Component: Duvida },
      { path: "/contato", Component: Contato },
      { path: "/chat", Component: ChatPage },
      { path: "/agendamento", Component: Agendamento },
      { path: "/agendar", Component: EnvioAgendamento },
    ],
  },
]);

export default router;
