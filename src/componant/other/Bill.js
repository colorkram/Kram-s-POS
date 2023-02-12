import axios from "axios";
import React from "react";
import HomeTop from "../../template/Home-top";
import BR from "../../template/br";
import TitleBar from "../../template/TitleBar";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";

function Bill() {
  const [getBill, setGetBill] = useState(null);
  let { bill_id } = useParams();

  const getBillnow = async () => {
    const res = await axios.get("http://localhost:8888/bill/" + bill_id);
    console.log("res.data", res.data);
    setGetBill(res.data);
  };
  // console.log("getbill", JSON.stringify(getBillnow));
  useEffect(() => {
    getBillnow();
  }, []);
  const refresh = () => window.location.reload(true);
  const gohame = async () => {
    await navigate("/home?test=");
    await refresh();
  };
  const navigate = useNavigate();

  return (
    <div className="container-ipad">
      {getBill ? (
        <div>
          <div>
            {/* {JSON.stringify(location.pathname)} */}
            <div className="head-head w-100">
              <br />
              <h1>Bill</h1>

              <div className="w-[80px] h-[80px] mt-[-60px]" onClick={gohame}>
                <FontAwesomeIcon
                  icon={faHome}
                  className="absolute top-[32px] left-[32px] text-white text-[28px]"
                />
              </div>
            </div>
          </div>
          <TitleBar kram={"Codecamp's Shop"} />
          <div className="w-auto h-auto px-[12%]">
            <div className="bg-white w-full rounded-lg">
              <TitleBar className="" kram="Bill" />
              <div className="flex justify-between ml-6 mr-6 mt-2 ">
                <h2>Bill ID : {getBill.bill_id} </h2>
                <br />
                <br />
                <h2> </h2>
              </div>
              {getBill.Menus.map(data => (
                <div
                  className="flex justify-between ml-6 mr-6 mt-2 "
                  key={data.menu_id}
                >
                  <h3>{data.Item.menu_name_item} </h3>
                  <h3>{data.Item.item_price}</h3>
                  <h3>{data.Item.qty}</h3>
                </div>
              ))}
              <br />
              <br />
              <div className="flexbox pl-[250px] ml-6 mr-6 mt-2 ">
                <br></br>
                <h3>PAYMENT BY : {getBill.payment_type} </h3>
                <h3>TOTAL : {getBill.total} Baht</h3>

                {getBill.payment_type == "VISA" ? null : (
                  <div>
                    <h3>PAID : {getBill.payment_amout} Baht</h3>
                    <h3>CHANGE : {getBill.change_money} Baht</h3>
                  </div>
                )}
              </div>
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Bill;
