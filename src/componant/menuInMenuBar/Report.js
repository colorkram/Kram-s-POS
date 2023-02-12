import React, { useEffect } from "react";
import HomeTop from "../../template/Home-top";
import TitleBar from "../../template/TitleBar";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useState } from "react";
import axios from "axios";
import { useLocation, useSearchParams, Link } from "react-router-dom";

export default function Report() {
  const [report, setReport] = useState([]);
  const [searchParams] = useSearchParams();
  const drawerId = searchParams.get("drawer");
  const useId = searchParams.get("useid");

  const getDrawerList = async () => {
    const res = await axios.get(`http://localhost:8888/drawer/alldrawer/`);
    setReport(res.data);
    console.log("test report" + JSON.stringify(res.data.length));
  };

  useEffect(() => {
    getDrawerList();
  }, []);

  // const {
  //   drawerData,
  //   getCurrentDrawer,
  //   selectOrder,
  //   drawerDataLength,
  //   setSelectOrder,
  // } = useContext(DrawerContext);

  return (
    <div>
      <HomeTop kram="Codecamp's Shop" />
      <div className="container-ipad">
        <TitleBar kram="Report" />

        <div className="w-auto h-auto px-[12%]">
          {report.map(item => (
            <Link
              to={`/allbills?drawer=${item.drawer_id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div>
                <div className="bg-white w-full rounded-lg">
                  <div className="flex justify-between ml-6 mr-6 mt-2 ">
                    <span>Drawer ID : {item.drawer_id}</span>
                    <span>Start Money : {item.sale_money}</span>
                    <span>Sale amoung: {item.sale_money}</span>
                  </div>
                  <div className="ml-6 mr-6 mt-5 mb-2">
                    drawer date : {item.open_date}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
