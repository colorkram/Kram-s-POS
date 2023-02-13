import React, { useEffect } from "react";
import HomeTop from "../../template/Home-top";
import TitleBar from "../../template/TitleBar";
import BR from "../../template/br";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useState } from "react";
import axios from "axios";
import { useLocation, useSearchParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function AllBills() {
  const [BillList, setBillList] = useState([]);
  const [searchParams] = useSearchParams();
  const billId = searchParams.get("drawer");
  const useId = searchParams.get("useid");
  const navigate = useNavigate();

  const getBillList = async () => {
    const res = await axios.get(`http://localhost:8888/bill/allbill/${billId}`);
    setBillList(res.data);
    console.log("test report" + JSON.stringify(res.data.length));
  };

  useEffect(() => {
    getBillList();
  }, []);

  return (
    <div>
      <HomeTop kram="Codecamp's Shop" />
      <div className="container-ipad">
        {/* <TitleBar kram="Report" /> */}
        <br /> <br />
        <br />
        <br />
        <div className="">
          <h1 className="flex justify-center">All Bill</h1>
        </div>
        <button
          className=" text-[28px] ml-[30px]"
          onClick={() => {
            navigate("/Report");
          }}
        >
          ย้อนกลับ
        </button>
        <br />
        <br />
        <div className="w-auto h-auto px-[12%]">
          <span className="flex justify-center text-[28px]">
            ทั้งหมด : {`${BillList.length}`}{" "}
            {BillList.length > 1 ? "Bills" : "bill"}
          </span>
          {BillList.map(item => (
            <Link
              to={`../bill/${item.bill_id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="bg-white w-full rounded-lg snap-y">
                <div className="flex justify-between ml-6 mr-6 mt-2  ">
                  <span>Bill ID : {item.bill_id}</span>
                  <span>Payment By : {item.payment_type}</span>
                  <span>Total: {item.total}</span>
                </div>
                <div className="ml-6 mr-6 mt-5 mb-2">
                  drawer date : {item.drawer_id}
                </div>
              </div>
            </Link>
          ))}
          <span className="flex justify-center text-[28px]">
            สิ้นสุดการค้นหา
          </span>
          <br />
        </div>
      </div>
    </div>
  );
}
