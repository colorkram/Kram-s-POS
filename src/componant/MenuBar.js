import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Await, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import HomeTop from "../template/Home-top";
import {
  // getAccessToken,
  removeAccessToken,
  // setAccessToken,
} from "../utils/local-storage";
import { DrawerContext } from "../contexts/DrawerContext";
import { AuthContext } from "../contexts/AuthContext";
// const { authenticatedUser, setAuthenticatedUser } = useContext(AuthContext);

function MenuBar() {
  const refresh = () => window.location.reload(true);

  const navigate = useNavigate();

  const logout = async () => {
    // confirm("อย่าลืมปิดรอบนะ");
    await alert("already logout");
    // await removeAccessToken();
    // await setAuthenticatedUser(null);

    setTimeout(async () => {
      await refresh();
      await navigate("/");
    }, 1000);
  };
  const {
    drawerData,
    getCurrentDrawer,
    selectOrder,
    drawerDataLength,
  } = useContext(DrawerContext);
  return (
    <div>
      <div className="container-ipad">
        <HomeTop kram="Setting" />

        <div className="grid justify-items-center space-y-20 pt-[250px]">
          {drawerData ? (
            <Link to={"/drawer"} style={{ textDecoration: "none" }}>
              <div className="flex justify-center items-center w-[500px] text-[64px] h-20 text-white bg-[#689081] hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300  rounded-full   text-center  ">
                DRAWER
              </div>
            </Link>
          ) : (
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <div className="flex justify-center items-center w-[500px] text-[64px] h-20 text-white bg-[#689081] hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300  rounded-full   text-center  ">
                DRAWER
              </div>
            </Link>
          )}
          <Link to="/Report" style={{ textDecoration: "none" }}>
            <div className="flex justify-center items-center w-[500px] text-[64px] h-20 text-white bg-[#91B5A7] hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300  rounded-full   text-center  ">
              Report
            </div>
          </Link>
          <Link to="/editmenu" style={{ textDecoration: "none" }}>
            <div className="flex justify-center items-center w-[500px] text-[64px] h-20 text-white bg-[#689081] hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300  rounded-full   text-center  ">
              MENUS
            </div>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="text-[40px] text-red-500 " onClick={logout}>
              Log Out
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
