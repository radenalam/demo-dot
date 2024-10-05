import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@/index.css";
import { routes } from "@/routes/root.tsx";
import { AuthProvider } from "@/context/AuthContext";

const route = createBrowserRouter(routes);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={route} />
    </AuthProvider>
  </StrictMode>
);
