import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import HomeTop from "../template/Home-top";

function MenuBar() {
  return (
    <div>
      <div className="container-ipad">
        <HomeTop kram="Setting" />

        <div className="grid justify-items-center space-y-20 pt-[250px]">
          <Link to="/drawer" style={{ textDecoration: "none" }}>
            <div className="flex justify-center items-center w-[500px] text-[64px] h-20 text-white bg-[#689081] hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300  rounded-full   text-center  ">
              DRAWER
            </div>
          </Link>
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
          <span className="text-[40px] text-red-500 pt-[170px]">Log Out</span>
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
