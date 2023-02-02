import React from "react";
import HomeTop from "../../template/Home-top";
import TitleBar from "../../template/TitleBar";

export default function AllBills() {
  return (
    <div>
      <HomeTop kram="Codecamp's Shop" />
      <div className="container-ipad">
        <TitleBar kram="All Bills" />
        <div className="w-auto h-auto px-[12%]">
          {[{ bill_id: "fefef", total: 9999, drawer_id: "sdfeg223g3g" }].map(
            item => (
              <div className="bg-white w-full rounded-lg">
                <div className="flex justify-between ml-6 mr-6 mt-2 ">
                  <span>Bill ID : {item.bill_id}</span>
                  <span>Total: 12,220</span>
                </div>
                <div className="ml-6 mr-6 mt-5 mb-2">drawer ID : 112</div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
