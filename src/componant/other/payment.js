import React, { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import HomeTop from "../../template/Home-top";
import TitleBar from "../../template/TitleBar";
import { DrawerContext } from "../../contexts/DrawerContext";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { confirm } from "react-confirm-box";

function Payment() {
  const refresh = () => window.location.reload(true);
  // const [abc, setAbc] = useState(123);
  const navigate = useNavigate();
  // const items = {
  //   bath: 1000,
  // };
  const {
    drawerData,
    getCurrentDrawer,
    selectOrder,
    drawerDataLength,
    setSelectOrder,
  } = useContext(DrawerContext);
  const { getUserData } = useContext(AuthContext);
  // console.log("kram:" + selectOrder);
  // const [totalAmout, setTotalAmout] = useState("");
  let total = [...selectOrder];

  const pricesSum = e => {
    let sum = 0;
    e.forEach(item => (sum += Number(item.price)));

    return Number(sum);
  };

  const sum = pricesSum(total);
  // console.log("dadv" + drawerData);
  const [changeMoney, setChangeMoney] = useState(0);
  const [input, setInput] = useState({
    // change_money: "",
    payment_amout: "",
    // drawer_id: "",
    // payment_type: "",
    // menu_id: "",
    // item_price: "",
  });
  const Visa = async e => {
    // setฺ...(e.target.value);

    await setInput({ ...input, payment_amout: e });

    // submit("VISA");
  };
  useEffect(() => {
    Visa(sum);
  }, [1]);
  const submit = async paymentType => {
    try {
      await axios.post("http://localhost:8888/bill/bill", {
        // user แนบมาให้แยู๋แล้ว
        user_id: "25",
        total: sum,
        payment_amout: input.payment_amout,
        change_money: sum - input.payment_amout,
        drawer_id: drawerData.drawer_id,
        selectOrder: selectOrder,
        payment_type: paymentType,
      });

      await navigate("/home?test=");
      refresh();
    } catch (err) {}
  };
  console.log("mock" + input.payment_amout);
  // const submit = ()
  const handleChangleinput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="container-ipad">
        <HomeTop kram="Create Owner Accout" />
        <div className="bigDiv flex h-[1025px]">
          <div className="menuSideBar w-full ">
            <div className="mt-[95px] p-[8px]">
              {/* [{ Menu_Name: "ขนมปัง", total: 10, count_Price: 100 }] */}
              {selectOrder.map(item => (
                <div className="bg-white w-full rounded-lg">
                  <div className="flex justify-between ml-6 mr-6 mt-2 ">
                    <span>Menu : {item.menu_name}</span>
                    <span>Total: {item.price}</span>
                  </div>
                  <div className="ml-6 mr-6 mt-5 mb-2">drawer ID : 112</div>
                </div>
              ))}
              {/* {JSON.stringify(selectOrder)} */}
            </div>
          </div>
          <div className="BillDetel bg-white w-full  ">
            <TitleBar kram="Payment" />
            <div className="flex justify-center pt-[60px] text-[38px] mb-6">
              Total
            </div>
            <div className="flex justify-center  text-[38px] mb-6">{sum}</div>
            <br />
            <br />
            <br />
            <label
              for="MONEY"
              class="block mb-2 text-sm font-medium text-gray-900 flex justify-center"
            >
              MONEY
            </label>
            <input
              type="text"
              id="small-input"
              name="payment_amout"
              value={input.payment_amout}
              placeholder={sum}
              onChange={handleChangleinput}
              class="block w-[250px]  p-[20px] ml-[65px] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-lg text-center   bg-gray-200   border-white-600   placeholder-white-400   text-black  "
            />
            <label
              for="MONEY"
              class="block mb-2 text-sm font-medium text-gray-900 flex justify-center"
            >
              Bath
            </label>
            <div className="flex justify-center mt-20">
              <button
                type="button"
                className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 mr-2 mb-2"
                onClick={() => submit("VISA")}
              >
                <svg
                  aria-hidden="true"
                  className="w-10 h-3 mr-2 -ml-1"
                  viewBox="0 0 660 203"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M233.003 199.762L266.362 4.002H319.72L286.336 199.762H233.003V199.762ZM479.113 8.222C468.544 4.256 451.978 0 431.292 0C378.566 0 341.429 26.551 341.111 64.604C340.814 92.733 367.626 108.426 387.865 117.789C408.636 127.387 415.617 133.505 415.517 142.072C415.384 155.195 398.931 161.187 383.593 161.187C362.238 161.187 350.892 158.22 333.368 150.914L326.49 147.803L319.003 191.625C331.466 197.092 354.511 201.824 378.441 202.07C434.531 202.07 470.943 175.822 471.357 135.185C471.556 112.915 457.341 95.97 426.556 81.997C407.906 72.941 396.484 66.898 396.605 57.728C396.605 49.591 406.273 40.89 427.165 40.89C444.611 40.619 457.253 44.424 467.101 48.39L471.882 50.649L479.113 8.222V8.222ZM616.423 3.99899H575.193C562.421 3.99899 552.861 7.485 547.253 20.233L468.008 199.633H524.039C524.039 199.633 533.198 175.512 535.27 170.215C541.393 170.215 595.825 170.299 603.606 170.299C605.202 177.153 610.098 199.633 610.098 199.633H659.61L616.423 3.993V3.99899ZM551.006 130.409C555.42 119.13 572.266 75.685 572.266 75.685C571.952 76.206 576.647 64.351 579.34 57.001L582.946 73.879C582.946 73.879 593.163 120.608 595.299 130.406H551.006V130.409V130.409ZM187.706 3.99899L135.467 137.499L129.902 110.37C120.176 79.096 89.8774 45.213 56.0044 28.25L103.771 199.45L160.226 199.387L244.23 3.99699L187.706 3.996"
                    fill="#0E4595"
                  />
                  <path
                    d="M86.723 3.99219H0.682003L0 8.06519C66.939 24.2692 111.23 63.4282 129.62 110.485L110.911 20.5252C107.682 8.12918 98.314 4.42918 86.725 3.99718"
                    fill="#F2AE14"
                  />
                </svg>
                Pay with Visa
              </button>
            </div>
            <div className="flex justify-center mt-20">
              <button
                type="button"
                className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 mr-2 mb-2"
                onClick={() => submit("CASH")}
              >
                Pay with CASH
              </button>
            </div>
            <div className="flex justify-center pt-[60px] text-[38px] mb-6 text-red-600">
              VOID
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
