import { createContext, useEffect, useState } from "react";
import React from "react";
import axios from "axios";

export const DrawerContext = createContext();

export default function DrawerContextProvider({ children }) {
  const [drawerData, setdrawerData] = useState(null);

  const getCurrentDrawer = async () => {
    const res = await axios.get(`http://localhost:8888/drawer/currentdrawer/`);
    console.log(res.data);
    setdrawerData(res.data);
    console.log("test " + JSON.stringify(res.data));
  };
  const [drawerDataLength, setdrawerDataLength] = useState(0);

  // อันล่างนี้ สำรหับเลือกเมนู
  const [selectOrder, setSelectOrder] = useState([]);
  function getOrder(item) {
    const newList = [...selectOrder];

    const fineItem = newList.find(i => i.menu_id == item.menu_id);

    if (fineItem) {
      fineItem.qty += 1;
    } else {
      newList.push({ ...item, qty: 1 });
    }
    let count = 0;
    newList.forEach(i => {
      count += i.qty;
    });
    setSelectOrder(newList);
    setdrawerDataLength(count);
  }

  // console.log(getCurrentDrawer);

  return (
    <DrawerContext.Provider
      value={{
        drawerData,
        getCurrentDrawer,
        getOrder,
        selectOrder,
        drawerDataLength,
        setSelectOrder,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
}
