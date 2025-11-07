import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./router.tsx";
import { StrictMode } from "react";
import { NotificationProvider } from "@/components/Notification/Notification.provider.tsx";
import { LoginProvider } from "@/context/LoginContext.tsx";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log(
          "Service Worker registered with scope:",
          registration.scope,
        );
      })
      .catch((error) => {
        console.error("Service Worker registration failed:", error);
      });
  });
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LoginProvider>
      <NotificationProvider>
        <RouterProvider router={router} />
      </NotificationProvider>
    </LoginProvider>
  </StrictMode>,
);
