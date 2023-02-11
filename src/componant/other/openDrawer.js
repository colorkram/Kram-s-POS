import React from "react";

function OpenDrawer() {
  return (
    <div className=" ml-[150px] text-center pt-[30px] w-[500px] h-[300px] bg-white text-2xl">
      <div class=" text-center pt-[30px] bg-white text-2xl">
        กรุณาใส่เงินเปิดรอบ
      </div>
      <input
        className="bg-sky-100/75  mt-[50px] w-[250px] h-[50px]"
        placeholder="Baht / บาท"
      />
      <br />
      <br />
      <div className="flex justify-between ml-[100px] w-[300px]">
        <button type="button" class="btn btn-success">
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
