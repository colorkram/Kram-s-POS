import { createContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import React from "react";

import * as authApi from "../apis/auth-api";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authenticatedUser, setAuthenticatedUser] = useState(
    getAccessToken() ? true : null,
  );

  useEffect(() => {
    const fetchAuthUser = async () => {
      try {
        // const res = await authApi.getMe();
        const token = await getAccessToken();
        const user = await jwtDecode(token);
        setAuthenticatedUser(user);
        console.log("user", user);
        //  ไปหน้า home
      } catch (err) {
        removeAccessToken();
        // Go login
      }
    };
    if (getAccessToken()) {
      console.log("5555");
      fetchAuthUser();
    }
  }, []);

  const getUserData = async () => {
    try {
      // const res = await authApi.getMe();
      const token = await getAccessToken();
      const user = await jwtDecode(token);
      return user;
      //  ไปหน้า home
    } catch (err) {
      return false;
    }
  };

  const login = async (username, password) => {
    const res = await authApi.login({ username, password });
    setAccessToken(res.data.token);
    setAuthenticatedUser(jwtDecode(res.data.token));
  };

  const logout = () => {
    removeAccessToken();
    setAuthenticatedUser(null);
  };

  const updateProfile = data => {
    setAuthenticatedUser({ ...authenticatedUser, ...data });
  };

  const [test, setTest] = useState("test1");
  const testFunction = a => {
    alert("test");
  };

  return (
    <AuthContext.Provider
      value={{
        authenticatedUser,
        login,
        logout,
        updateProfile,
        getUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
