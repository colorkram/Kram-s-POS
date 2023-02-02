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
      </div>
    </div>
  );
}

export default Home;
