import React from "react";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import HomeTop from "../../template/Home-top";
import TitleBar from "../../template/TitleBar";
import { useNavigate } from "react-router-dom";
import { DrawerContext } from "../../contexts/DrawerContext";
import { AuthContext } from "../../contexts/AuthContext";
export default function Drawer() {
  const { drawerData } = useContext(DrawerContext);
  const [showDrawer, setShowDrawer] = useState([]);
  const navigate = useNavigate();

  const getCurrentDrawer = async () => {
    const res = await axios.get(`http://localhost:8888/drawer/currentdrawer/`);
    // console.log(res.data);
    setShowDrawer(res.data);
    // console.log("ข้างใน", res.data);
  };
  // console.log("ข้างนอก", showDrawer);
  console.log("test " + JSON.stringify(drawerData));
  const [input, setInput] = useState({
    act_drawer: "",
  });

  const submit = async () => {
    try {
      const resBill = await axios.patch(
        "http://localhost:8888/drawer/close-drawer",
        {
          // user แนบมาให้แยู๋แล้ว
          drawer_id: showDrawer.drawer_id,
          act_drawer: input.act_drawer,
        },
      );

      await navigate(`/`);
      // refresh();
    } catch (err) {}
  };

  const handleChangleinput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  // const [showDif, SetShowDif] = useState("");
  // const difdif = (a, b) => {
  //   SetShowDif(a - b);
  // };
  useEffect(() => {
    getCurrentDrawer();
    // difdif();

    // setShowDrawer();
  }, []);
  return (
    <div>
      <HomeTop kram="Drawer" />
      <TitleBar kram="Codecamp's Shop" />
      <div className="flex justify-center  text-[24px] mb-6">
        {showDrawer.open_date}
      </div>
      <div className="w-full  ">
        <div className="flex justify-between px-[20%]  w-full ">
          <span>Start Drawer : </span>
          <span>{showDrawer.start_money} Bath</span>
        </div>
        <br />
        <br />

        <div className="flex justify-between px-[20%]  w-full ">
          <span>Sale : </span>
          <span>{showDrawer.sale_money} Bath</span>
        </div>
        <br />
        <br />
        <div className="flex justify-between px-[20%]  w-full ">
          <span>Expected in Drawer : </span>
          <span>{showDrawer.exp_drawer} Bath</span>
        </div>
        <br />
        <br />
        <div className="flex justify-between px-[20%]  w-full ">
          <span>Actual in Drawer : </span>
          <div className="">
            <input
              className="bg-gray-200 h-[36px]  text-center"
              placeholder="Input Money"
              name="act_drawer"
              value={input.act_drawer}
              onChange={handleChangleinput}
            />
            <span> Bath</span>
          </div>
        </div>
        <br />
        <br />
        <div className="flex justify-between px-[20%]  w-full ">
          <span>Difference </span>
          <span>{showDrawer.exp_drawer - input.act_drawer} Bath</span>
        </div>
      </div>
      <div className="flex justify-center">
        <div
          className="flex justify-center mt-[200px] fixed items-center w-[500px] text-[64px] h-20 text-white bg-[#689081] hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300  rounded-full   text-center  "
          onClick={submit}
        >
          Close Drawer
        </div>
      </div>
    </div>
  );
}
