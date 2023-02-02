import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../componant/Home";
import Login from "../componant/Login";
import Register from "../componant/Register";
import MenuBar from "../componant/MenuBar";
import Drawer from "../componant/menuInMenuBar/Drawer";
import AllBills from "../componant/menuInMenuBar/AllBills";
import EditMenu from "../componant/menuInMenuBar/EditMenu";
import Report from "../componant/menuInMenuBar/Report";
import Payment from "../componant/other/payment";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  {
    path: "/register",
    element: <Register />,
  },
  { path: "/home", element: <Home /> },
  { path: "/menubar", element: <MenuBar /> },
  { path: "/drawer", element: <Drawer /> },
  { path: "/allbills", element: <AllBills /> },
  { path: "/editmenu", element: <EditMenu /> },
  { path: "/Report", element: <Report /> },
  { path: "/Payment", element: <Payment /> },
]);
export default function Routes() {
  return <RouterProvider router={router} />;
}
