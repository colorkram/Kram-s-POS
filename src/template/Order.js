import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import HomeTop from "./Home-top";
import CategoryBanner from "./Category-Banner";
import { useEffect } from "react";
import axios from "axios";
import { useLocation, useSearchParams } from "react-router-dom";
import { useContext } from "react";
import { DrawerContext } from "../contexts/DrawerContext";
import { AuthContext } from "../contexts/AuthContext";

// import imgs from "../../../KramPosApi/public/imgae/P1270058.jpeg";

function Order() {
  const { getUserData } = useContext(AuthContext);
  const { getOrder } = useContext(DrawerContext);

  // const { login } = useContext(AuthContext);
  const [menuCard, setMenuCard] = useState([]);
  const [searchParams] = useSearchParams();
  // console.log(searchParams);
  const catId = searchParams.get("test");
  const useId = searchParams.get("useid");
  console.log(catId, "and", useId);

  const getMenuApi = async () => {
    const userr = await getUserData();
    console.log("userr", userr.user_id);
    const res = await axios.get(
      `http://localhost:8888/menu/menu/${userr.user_id}?cat=${catId}`,
      // `http://localhost:8888/menu/menu/useId=${useId}?cat=${catId}`,
    );
    setMenuCard(res.data.map(item => ({ ...item, action: false })));
  };
  const toggleCss = index => {
    const newMenu = [...menuCard];
    newMenu[index].action = true;
    setMenuCard(newMenu);
    setTimeout(() => {
      const newMenu = [...menuCard];
      newMenu[index].action = false;
      setMenuCard(newMenu);
    }, 400);
  };
  useEffect(() => {
    getMenuApi();
  }, [catId, useId]);
  return (
    <div className="Menu-container flex justify-center grid grid-cols-3 gap-3">
      {/* mt-26 */}
      {menuCard.map((data, index) => {
        return (
          <div
            className={
              (data.action ? "animate__animated animate__heartBeat " : "") +
              "w-60 h-auto bg-white border border-gray-200 rounded-lg shadow bg-gray-800 border-gray-700s"
            }
            key={data.menu_id}
            onClick={() => {
              getOrder(data);
              toggleCss(index);
            }}
          >
            <div>
              <img
                className="p-auto rounded-t-lg w-60 h-60 "
                src={data.image}
                alt="product image"
              />
            </div>

            <div className="px-3 pb-3">
              <h5 className="text-xl tracking-tight text-gray-900 flex justify-center">
                {data.menu_name}
              </h5>

              <div className="flex justify-between">
                <span className="text-3xl font-bold text-gray-900  text-red">
                  {data.price}
                </span>
                <div className="text-white bg-blue-700 font-medium rounded-lg text-sm px-2 py-2 text-center  bg-blue-600  hover:bg-blue-700  focus:ring-blue-800">
                  Add to cart
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Order;
