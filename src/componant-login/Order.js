import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import HomeTop from "../template/Home-top";
import CategoryBanner from "../template/Category-Banner";

function Menu() {
  return (
    <div className="Menu-container flex justify-center mt-26">
      <dev></dev>
      <div className="w-60 h-auto bg-white border border-gray-200 rounded-lg shadow bg-gray-800 border-gray-700s ">
        <div href="#">
          <img
            className="p-auto rounded-t-lg w-60 h-60 "
            src="https://scontent.fbkk2-7.fna.fbcdn.net/v/t1.15752-9/327945158_905801307332038_5601218947446989512_n.png?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHEvNr_kSZb5glV9eO2p0FRtVgV26WftHm1WBXbpZ-0efXi_8xmWCZKoPlBXVjWPcVB1C4GWL27GWWZ_ng-9Up7&_nc_ohc=g8ki8Latr8IAX-mh5x0&_nc_ht=scontent.fbkk2-7.fna&oh=03_AdScqEuCs7x76HpL-q_Wlis2XlwWbsMBdg5SDrFUHCsrhA&oe=6401B0EA"
            alt="product image"
          />
        </div>

        <div className="px-3 pb-3">
          <a href="#">
            <h5 className="text-xl tracking-tight text-gray-900 flex justify-center">
              Jusaran
            </h5>
          </a>
          <div className="flex justify-between">
            <span className="text-3xl font-bold text-gray-900  text-red">
              20 บาท
            </span>
            <a
              href="#"
              className="text-white bg-blue-700 font-medium rounded-lg text-sm px-2 py-2 text-center  bg-blue-600  hover:bg-blue-700  focus:ring-blue-800"
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
