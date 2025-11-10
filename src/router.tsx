import { createBrowserRouter, redirect } from "react-router";
import { Landing } from "@/pages/Landing/Landing";
import { Integrantes } from "@/pages/Integrantes/Integrantes";
import { PagesLayout } from "@/layout/PagesLayout";
import { Faq } from "@/pages/Faq/Faq";
import { Duvida } from "@/pages/Duvida/Duvida";
import { Contato } from "@/pages/Contato/Contato";
import { Agendamento } from "@/pages/Agendamento/Agendamento";
import { ErrorPage } from "@/pages/Error/ErrorPage";
import { EnvioAgendamento } from "@/pages/EnvioAgendamento/EnvioAgendamento";
import { Sobre } from "@/pages/Sobre/Sobre";
import { Login } from "@/pages/Login/Login";
import { Usuario } from "./pages/Usuario/Usuario";

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
      { path: "/sobre", Component: Sobre },
      { path: "/faq", Component: Faq },
      {
        path: "/duvida",
        loader: () => redirect("/"),
      },
      { path: "/duvida/:content", Component: Duvida },
      { path: "/contato", Component: Contato },
      { path: "/agendamento", Component: Agendamento },
      { path: "/agendar", Component: EnvioAgendamento },
      { path: "/login", Component: Login },
      { path: "/usuario", Component: Usuario },
      {
        path: "/logout",
        Component: Landing,
      },
    ],
  },
]);

export default router;
