import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import HomeTop from "../template/Home-top";
import CategoryBanner from "../template/Category-Banner";
import Menu from "./Order";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="container-ipad">
        {/* <div className="head-home text-center">
          <br />
          <h1>Codecamp's Shop</h1>
          <Link to="/menubar">
            <FontAwesomeIcon
              icon={faBars}
              className="absolute top-[32px] left-[32px] text-white text-[28px]"
            />
          </Link>
        </div> */}
        <HomeTop />
        <CategoryBanner />
        <div></div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="grid grid-cols-3 gap-3">
          <Menu /> <Menu /> <Menu /> <Menu /> <Menu /> <Menu /> <Menu />{" "}
          <Menu /> <Menu />
          <Menu /> <Menu /> <Menu />
        </div>
      </div>
    </div>
  );
}

export default Home;
