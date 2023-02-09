import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import HomeTop from "../../template/Home-top";
import TitleBar from "../../template/TitleBar";

export default function Drawer() {
  const [showDrawer, setShowDrawer] = useState([]);

  const getCurrentDrawer = async () => {
    const res = await axios.get(`http://localhost:8888/drawer/currentdrawer/`);
    // console.log(res.data);
    setShowDrawer(res.data);
  };
  useEffect(() => {
    getCurrentDrawer();
  }, []);
  return (
    <div>
      <HomeTop kram="Drawer" />
      <TitleBar kram="Codecamp's Shop" />
      <div className="flex justify-center  text-[24px] mb-6">
        20/12/2020 20:30
      </div>
      <div className="w-full  ">
        <div className="flex justify-between px-[20%]  w-full ">
          <span>Start Drawer : </span>
          <span>5000 Bath</span>
        </div>
        <br />
        <br />

        <div className="flex justify-between px-[20%]  w-full ">
          <span>Sale : </span>
          <span>5000 Bath</span>
        </div>
        <br />
        <br />
        <div className="flex justify-between px-[20%]  w-full ">
          <span>Expected in Drawer : </span>
          <span>5000 Bath</span>
        </div>
        <br />
        <br />
        <div className="flex justify-between px-[20%]  w-full ">
          <span>Actual in Drawer : </span>
          <div className="">
            <input
              className="bg-gray-200 h-[36px]  text-center"
              placeholder="Input Money"
            />
            <span> Bath</span>
          </div>
        </div>
        <br />
        <br />
        <div className="flex justify-between px-[20%]  w-full ">
          <span>Difference </span>
          <span>0 Bath</span>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center mt-[200px] fixed items-center w-[500px] text-[64px] h-20 text-white bg-[#689081] hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300  rounded-full   text-center  ">
          Close Drawer
        </div>
      </div>
    </div>
  );
}
