import "./App.css";
import Login from "./componant/Login";
import Register from "./componant/Register";
import Home from "./componant/Home";
import React from "react";
import MenuBar from "./template/Order";
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
