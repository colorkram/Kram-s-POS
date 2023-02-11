import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import HomeTop from "../template/Home-top";
import Br from "../template/br";
import CategoryBanner from "../template/Category-Banner";
import Order from "../template/Order";
import { Link, useNavigate } from "react-router-dom";
import { DrawerContext } from "../contexts/DrawerContext";
import { useContext, useState } from "react";
import OpenDrawer from "./other/openDrawer";

function Home() {
  const navigate = useNavigate();

  const {
    drawerData,
    getCurrentDrawer,
    selectOrder,
    drawerDataLength,
  } = useContext(DrawerContext);
  // ยิงเช็คจาก context
  useEffect(() => {
    getCurrentDrawer();
  }, []);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 1000);
  }, [drawerDataLength]);

  return (
    <div>
      <div className="container-ipad">
        <HomeTop kram="Codecamp's Shop" />

        {drawerData ? ( //ถ้าเปิด drawer ไปแล้วจะเข้าบรรทัดถัดไป ถ้าไม่จะเป็น null
          <div>
            <CategoryBanner />
            <Br />
            {/* <div>{JSON.stringify(selectOrder)}</div> */}

            <div className="flex justify-center">
              <div
                className={
                  (animate ? "animate__animated animate__bounce" : "") +
                  " flex justify-center mt-[710px]  fixed items-center w-[500px] text-[64px] h-20 text-white bg-[#689081] hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300  rounded-full   text-center  "
                }
                onClick={() => {
                  navigate("/payment");
                }}
              >
                CHECK OUT {drawerDataLength}
              </div>
            </div>
            <div className=" ">
              <Order />
            </div>
            <div className="w-[300px] h-[120px]"></div>
          </div>
        ) : (
          <div>
            <Br />
            <Br />

            <OpenDrawer />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
