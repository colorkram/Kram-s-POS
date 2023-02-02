import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../componant-login/Home";
import Login from "../componant-login/Login";
import Register from "../componant-login/Register";
import MenuBar from "../componant-login/MenuBar";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  {
    path: "/register",
    element: <Register />,
  },
  { path: "/home", element: <Home /> },
  { path: "/menubar", element: <MenuBar /> },
]);
export default function Routes() {
  return <RouterProvider router={router} />;
}
