import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import HomeTop from "../template/Home-top";
import { useState } from "react";

function Register() {
  const [shopName, setShopName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");

  const [errorShopName, setErrorShopName] = useState("รูปแบบไม่ถูกต้อง");
  const [errorEmail, setErrorEmail] = useState("รูปแบบไม่ถูกต้อง");
  const [errorPassword, setErrorPassword] = useState("รูปแบบไม่ถูกต้อง");
  const [errorRePassword, setErrorRePassword] = useState("รูปแบบไม่ถูกต้อง");
  return (
    <div>
      <div className="container-ipad">
        <HomeTop kram="Create Owner Accout" />

        <div className="register-from">
          <div className="h-[300px]"></div>
          <input
            style={{ borderRadius: 100 }}
            type="text"
            className="form-control"
            placeholder="Input Shop’s Name"
            value={shopName}
            onChange={e => setShopName(e.target.value)}
          />
          {/* {console.log(shopName)} */}
          <small>{errorShopName}</small>
          <br />
          <input
            style={{ borderRadius: 100 }}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Username"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <small>{errorEmail}</small>

          <br />
          <input
            style={{ borderRadius: 100 }}
            className="form-control"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <small>{errorPassword}</small>

          <br />
          <input
            style={{ borderRadius: 100 }}
            className="form-control"
            placeholder="Confirm Password"
            value={repassword}
            onChange={e => setRePassword(e.target.value)}
          />
          <small>{errorRePassword}</small>

          <br />
          <br />
          <br />
          <button
            type="button"
            className="sub-but"
            style={{ marginLeft: 20, height: 56 }}
          >
            Submit
          </button>
          <br />
          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <input
              type="checkbox"
              className="form-check-input "
              id="exampleCheck1"
            />

            <label className="form-check-label" for="exampleCheck1">
              &nbsp;&nbsp;Please check it
            </label>
            {/* <FontAwesomeIcon icon="faCoffee" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
