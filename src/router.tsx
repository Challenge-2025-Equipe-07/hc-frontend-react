import { createBrowserRouter } from "react-router";
import App from "@/App";
import { Integrantes } from "@/pages/Integrantes/Integrantes";
import { PagesLayout } from "@/layout/PagesLayout";
import { Faq } from "@/pages/Faq/Faq";
import { Duvida } from "@/pages/Duvida/Duvida";
import { Contato } from "@/pages/Contato/Contato";
import { SchedulingPage } from "@/pages/Scheduling/Scheduling";
import { Landing } from "@/pages/Landing/Landing";
import { ErrorPage } from "@/pages/Error/ErrorPage";

const router = createBrowserRouter([
  {
    Component: PagesLayout,
    errorElement: (
      <PagesLayout>
        <ErrorPage />
      </PagesLayout>
    ),
    children: [
      { index: true, Component: App },
      { path: "/integrantes", Component: Integrantes },
      { path: "/faq", Component: Faq },
      { path: "/duvida", Component: Duvida },
      { path: "/contato", Component: Contato },
      { path: "/consulta", Component: SchedulingPage },
    ],
  },
]);

export default router;
