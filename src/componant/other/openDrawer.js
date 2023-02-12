import React from "react";
import { DrawerContext } from "../../contexts/DrawerContext";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function OpenDrawer() {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    start_money: "",
  });
  const submit = async paymentType => {
    try {
      const resBill = await axios.post("http://localhost:8888/drawer/drawer", {
        // user แนบมาให้แยู๋แล้ว
        // open_date: currentDate,
        start_money: input.start_money,
      });

      await navigate(`/`);
      // refresh();
    } catch (err) {
      console.log(err);
    }
  };
  const handleChangleinput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div className=" ml-[150px] text-center pt-[30px] w-[500px] h-[300px] bg-white text-2xl">
      <div class=" text-center pt-[30px] bg-white text-2xl">
        กรุณาใส่เงินเปิดรอบ
      </div>
      <input
        className="bg-sky-100/75  mt-[50px] w-[250px] h-[50px]"
        placeholder="Baht / บาท"
        onChange={handleChangleinput}
        name="start_money"
        value={input.start_money}
      />
      <br />
      <br />
      <div className="flex justify-between ml-[100px] w-[300px]">
        <button type="button" class="btn btn-success" onClick={submit}>
          เปิดรอบ
        </button>
        <button className="btn" type="button">
          ยกเลิก
        </button>
      </div>
    </div>
  );
}

export default OpenDrawer;
