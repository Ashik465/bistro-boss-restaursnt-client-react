import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/home/Home";
import Menu from "../pages/ourMenu/Menu";
import Order from "../pages/order/order/Order";
import LogIn from "../pages/logIn/LogIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    //   errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
     
    ],
  },
]);
