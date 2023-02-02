import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function HomeTop(props) {
  const location = useLocation();
  console.log(location.pathname);
  // console.log(typeof location);
  // setMenubar(JSON.stringify(location));
  //   console.log(menubar);
  return (
    <div>
      {/* {JSON.stringify(location.pathname)} */}
      <div className="head-head w-100">
        <br />
        <h1>{props.kram}</h1>
        {location.pathname == "/register" ? (
          <Link to="/">
            <FontAwesomeIcon
              icon={faHome}
              className="absolute top-[32px] left-[32px] text-white text-[28px]"
            />
          </Link>
        ) : location.pathname == "/home" ? (
          <Link to="/menubar">
            <FontAwesomeIcon
              icon={faBars}
              className="absolute top-[32px] left-[32px] text-white text-[28px]"
            />
          </Link>
        ) : (
          <Link to="/home">
            <FontAwesomeIcon
              icon={faHome}
              className="absolute top-[32px] left-[32px] text-white text-[28px]"
            />
          </Link>
        )}
      </div>
    </div>
  );
}

export default HomeTop;
