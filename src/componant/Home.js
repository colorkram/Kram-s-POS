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
import { AuthContext } from "../contexts/AuthContext";

function Home() {
  const [animate, setAnimate] = useState(false);
  const [loading, setLoadding] = useState(true);
  const navigate = useNavigate();

  const {
    drawerData,
    getCurrentDrawer,
    selectOrder,
    drawerDataLength,
  } = useContext(DrawerContext);
  // ยิงเช็คจาก context
  const { authenticatedUser, setAuthenticatedUser } = useContext(AuthContext);
  useEffect(() => {
    if (!authenticatedUser) {
      navigate("/");
    }
  }, []);
  useEffect(() => {
    getCurrentDrawer();
    setTimeout(() => {
      setLoadding(false);
    }, 1000);
  }, []);

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

        {loading ? null : (
          <div>
            {drawerData ? ( //ถ้าเปิด drawer ไปแล้วจะเข้าบรรทัดถัดไป ถ้าไม่จะเป็น null
              <div>
                <CategoryBanner />
                <Br />
                {/* <div>{JSON.stringify(selectOrder)}</div> */}

                <div className="flex justify-center">
                  {drawerDataLength >= 1 ? (
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
                  ) : null}
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
        )}
      </div>
    </div>
  );
}

export default Home;
