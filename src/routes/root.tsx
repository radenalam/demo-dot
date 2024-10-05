import { Login } from "@/pages/Login/Login";
import { Quiz } from "@/pages/Quiz";
import { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Quiz />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
];
