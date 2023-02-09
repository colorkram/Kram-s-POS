import { createContext, useEffect, useState } from "react";
import React from "react";

export const DrawerContext = createContext();

export default function DrawerContextProvider({ children }) {
  useEffect(() => {}, []);

  return <DrawerContext.Provider value={{}}>{children}</DrawerContext.Provider>;
}
