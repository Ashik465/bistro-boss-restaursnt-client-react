import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/home/Home";
import Menu from "../pages/ourMenu/Menu";
import Order from "../pages/order/order/Order";
import LogIn from "../pages/logIn/LogIn";
import SignUp from "../pages/signUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/secret/Secret";
import DashBoardLayout from "../layout/DashBoardLayout";
import MyCart from "../pages/DashBoard/myCart/MyCart";

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
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/secret",
        element: <PrivateRoute><Secret></Secret></PrivateRoute>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
     
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoardLayout></DashBoardLayout>,
    //   errorElement: <ErrorPage />,
    children: [
      {
        path: "mycart",
        element: <MyCart></MyCart>,
      },
     
     
     
    ],
  },
]);
