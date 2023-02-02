import React from "react";
import HomeTop from "../../template/Home-top";
import TitleBar from "../../template/TitleBar";

export default function Report() {
  return (
    <div>
      <HomeTop kram="Codecamp's Shop" />
      <div className="container-ipad">
        <TitleBar kram="Report" />
        <div className="w-auto h-auto px-[12%]">
          {[{ drawer_id: "fefef", total: 9999, Date_start: "12/12/2023" }].map(
            item => (
              <div className="bg-white w-full rounded-lg">
                <div className="flex justify-between ml-6 mr-6 mt-2 ">
                  <span>Drawer ID : {item.drawer_id}</span>
                  <span>Total: {item.total}</span>
                </div>
                <div className="ml-6 mr-6 mt-5 mb-2">
                  drawer ID : {item.Date_start}
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
