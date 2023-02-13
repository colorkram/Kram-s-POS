import React from "react";
import { AuthContext } from "./AuthContext";
import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function IfNotAuth() {
  const { authenticatedUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authenticatedUser) {
      navigate("/=");
    }
  }, []);
  return <div></div>;
}

export default IfNotAuth;
