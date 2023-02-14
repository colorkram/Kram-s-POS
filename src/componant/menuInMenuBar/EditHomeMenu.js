import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import HomeTop from "../../template/Home-top";
import Br from "../../template/br";
import CategoryBanner from "../../template/Category-Banner";
import Order from "../../template/Order";
import { Link, useNavigate } from "react-router-dom";
import { DrawerContext } from "../../contexts/DrawerContext";
import { useContext, useState } from "react";
import OpenDrawer from "../other/openDrawer";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";

function EditHomeMenu() {
  const refresh = () => window.location.reload(true);

  const { getUserData } = useContext(AuthContext);
  const [menuCard, setMenuCard] = useState([]);

  const [animate, setAnimate] = useState(false);
  // const [loading, setLoadding] = useState(true);
  const navigate = useNavigate();

  // const [removeOrder, setRemoveOrder] = useState([]);
  const removeMenu = async data => {
    const res = await axios.patch("http://localhost:8888/menu/removemenu/", {
      menu_id: data,
    });
    refresh();
  };

  const getMenuApi = async () => {
    const userr = await getUserData();
    // console.log("userr", userr.user_id);
    const res = await axios.get(
      `http://localhost:8888/menu/menu/${userr.user_id}`,
      // `http://localhost:8888/menu/menu/1?cat=1`,
    );
    setMenuCard(res.data.map(item => ({ ...item, action: false })));
  };
  useEffect(() => {
    getMenuApi();
    // removeMenu();
  }, []);

  // console.log("help" + JSON.stringify(removeOrder));

  // function getOrder(item) {
  //   // const newList = [...selectOrder];

  //   // const fineItem = newList.find(i => i.menu_id == item.menu_id);
  //   let newList = [];

  //   newList.push(item);

  //   setRemoveOrder(newList);
  // }

  // const {
  // drawerData,
  // getCurrentDrawer,
  // selectOrder,
  // drawerDataLength,
  // } = useContext(DrawerContext);
  // ยิงเช็คจาก context
  const { authenticatedUser, setAuthenticatedUser } = useContext(AuthContext);
  useEffect(() => {
    if (!authenticatedUser) {
      navigate("/");
    }
  }, []);
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

  return (
    <div>
      <div className="container-ipad">
        <HomeTop kram="Codecamp's Shop" />

        <div>
          <div>
            {/* <CategoryBanner /> */}
            <Br />
            {/* <div>{JSON.stringify(selectOrder)}</div> */}

            <div className="flex justify-center"></div>
            <div className=" ">
              {/* <Order /> */}
              <div className="Menu-container flex justify-center grid grid-cols-3 gap-3">
                {/* mt-26 */}
                {menuCard.map((data, index) => {
                  return (
                    <div
                      className={
                        (data.action
                          ? "animate__animated animate__heartBeat "
                          : "") +
                        "w-60 h-auto bg-white border border-gray-200 rounded-lg shadow bg-gray-800 border-gray-700s"
                      }
                      key={data.menu_id}
                      onClick={() => {
                        // getOrder(data);   อันนี้ต้องเป็น ลบ
                        toggleCss(index);
                        // getOrder(data);
                        removeMenu(data.menu_id);
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
                          <div className="text-white bg-blue-700 font-medium rounded-lg text-sm px-2 py-2 text-center  bg-red-600  hover:bg-blue-700  focus:ring-blue-800">
                            delete
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-[300px] h-[120px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditHomeMenu;
