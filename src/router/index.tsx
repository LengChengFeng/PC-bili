import { useRoutes, useNavigate, Navigate } from "react-router-dom";
import React from "react";
const Home = React.lazy(() => import("../views/home"));
const Detail = React.lazy(() => import("../views/detail"));
const NotFound = React.lazy(() => import("../views/notfound"));
export const routes = [
  {
    path: "",
    element: <Navigate to={"/home"} />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/goods/:id",
    element: <Detail />,
    keepAlive: true,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

const Routes = () => useRoutes(routes);
export default Routes;
