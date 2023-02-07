import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import HomeTop from "./Home-top";
import CategoryBanner from "./Category-Banner";
import { useEffect } from "react";
import axios from "axios";
import { useLocation, useSearchParams } from "react-router-dom";
// import imgs from "../../../KramPosApi/public/imgae/P1270058.jpeg";

function Order() {
  const [menuCard, setMenuCard] = useState([]);
  const [searchParams] = useSearchParams();
  // console.log(searchParams);
  const set = searchParams.get("test");
  console.log(set);

  const getMenuApi = async () => {
    const res = await axios.get(
      `http://192.168.1.58:8888/menu/menu/1?cat=${set}`,
    );
    setMenuCard(res.data);
  };
  useEffect(() => {
    getMenuApi();
  }, [set]);
  return (
    <div className="Menu-container flex justify-center grid grid-cols-3 gap-3">
      {/* mt-26 */}
      {menuCard.map(data => {
        return (
          <div
            className="w-60 h-auto bg-white border border-gray-200 rounded-lg shadow bg-gray-800 border-gray-700s "
            key={data.menu_id}
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
                <a
                  href="#"
                  className="text-white bg-blue-700 font-medium rounded-lg text-sm px-2 py-2 text-center  bg-blue-600  hover:bg-blue-700  focus:ring-blue-800"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Order;
