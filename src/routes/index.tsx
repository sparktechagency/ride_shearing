import { createBrowserRouter, Navigate } from "react-router-dom";
import adminRoutes from "./admin";
import authRoutes from "./auth";


const routes = [
  {
    path: "",
    element: <Navigate replace to="/" />,
  },
  ...authRoutes,
  ...adminRoutes,
];

const router = createBrowserRouter(routes);

export default router;
