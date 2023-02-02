import "./App.css";
import Login from "./componant-login/Login";
import Register from "./componant-login/Register";
import Home from "./componant-login/Home";
import React from "react";
import MenuBar from "./componant-login/Order";
import { Router } from "react-router-dom";
import Routes from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
