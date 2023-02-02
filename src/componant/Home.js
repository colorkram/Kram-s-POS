import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import HomeTop from "../template/Home-top";
import CategoryBanner from "../template/Category-Banner";
import Order from "../template/Order";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="container-ipad">
        <HomeTop kram="Codecamp's Shop" />
        <CategoryBanner />
        <div></div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="flex justify-center">
          <div className="flex justify-center mt-[755px] fixed items-center w-[500px] text-[64px] h-20 text-white bg-[#689081] hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300  rounded-full   text-center  ">
            DRAWER
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <Order /> <Order />
          <Order />
          <Order />
          <Order />
          <Order />
          <Order />
          <Order />
          <Order />
          <Order />
          <Order />
          <Order />
          <Order />
          <Order />
        </div>
        <div className="w-[300px] h-[120px]"></div>
      </div>
    </div>
  );
}

export default Home;
