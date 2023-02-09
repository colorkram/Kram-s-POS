import { createContext, useEffect, useState } from "react";
import React from "react";
import axios from "axios";

export const DrawerContext = createContext();

export default function DrawerContextProvider({ children }) {
  const [drawerData, setdrawerData] = useState(null);
  const [drawerDataLength, setdrawerDataLength] = useState(0);

  const getCurrentDrawer = async () => {
    const res = await axios.get(`http://localhost:8888/drawer/currentdrawer/`);
    console.log(res.data);
    setdrawerData(res.data);
  };

  const [selectOrder, setSelectOrder] = useState([]);

  function getOrder(item) {
    const newList = [...selectOrder];
    newList.push(item);
    setSelectOrder(newList);
    setdrawerDataLength(newList.length);
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
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
}
