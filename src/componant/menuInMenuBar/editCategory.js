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

function EditCategory() {
  const refresh = () => window.location.reload(true);
  const [showCategory, setShowCategory] = useState([]);
  const { getUserData } = useContext(AuthContext);

  const navigate = useNavigate();

  // const removeMenu = async data => {
  //   const res = await axios.patch("http://localhost:8888/menu/removemenu/", {
  //     menu_id: data,
  //   });
  //   refresh();
  // };

  const getCategory = async () => {
    const userr = await getUserData();

    const res = await axios.get(`http://localhost:8888/category/category/`);
    // console.log(res.data);
    setShowCategory(res.data);
  };
  useEffect(() => {
    getCategory();
  }, []);

  const { authenticatedUser, setAuthenticatedUser } = useContext(AuthContext);
  useEffect(() => {
    if (!authenticatedUser) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <div className="container-ipad">
        <HomeTop kram="Codecamp's Shop" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="flex justify-center items-center m-[20px] w-[500px] text-[64px] h-20 text-white bg-[#8FBC8F] hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300  rounded-full   text-center  ">
          new Category
        </div>
        {showCategory.map(data => {
          // return <div className="">{data.category_name}</div>;
          return (
            <div className="flex justify-center items-center m-[20px] w-[500px] text-[64px] h-20 text-white bg-[#689081] hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300  rounded-full   text-center  ">
              {data.category_name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EditCategory;
