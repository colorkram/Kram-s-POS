import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import HomeTop from "../template/Home-top";
import CategoryBanner from "../template/Category-Banner";
import Order from "../template/Order";
import { Link } from "react-router-dom";
import { DrawerContext } from "../contexts/DrawerContext";
import { useContext } from "react";

function Home() {
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

  return (
    <div>
      <div className="container-ipad">
        <HomeTop kram="Codecamp's Shop" />

        {drawerData ? ( //ถ้าเปิด drawer ไปแล้วจะเข้าบรรทัดถัดไป ถ้าไม่จะเป็น null
          <div>
            <CategoryBanner />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            {/* <div>{JSON.stringify(selectOrder)}</div> */}

            <div className="flex justify-center">
              <div className="flex justify-center mt-[710px]  fixed items-center w-[500px] text-[64px] h-20 text-white bg-[#689081] hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300  rounded-full   text-center  ">
                CHECK OUT {drawerDataLength}
              </div>
            </div>
            <div className=" ">
              <Order />
            </div>
            <div className="w-[300px] h-[120px]"></div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
