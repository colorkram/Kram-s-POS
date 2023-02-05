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

  const [errorShopName, setErrorShopName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorRePassword, setErrorRePassword] = useState("");

  const [userNameColor, SetUserNameColor] = useState("");
  const [emailColor, setEmailColor] = useState("");

  const validateForm = e => {
    e.preventDefault();

    if (shopName.length > 3) {
      setErrorShopName("");
      SetUserNameColor("green");
    } else {
      setErrorShopName("ชื่อร้านไม่ถูกต้อง");
      SetUserNameColor("red");
    }

    if (email.includes("@") && email.includes(".")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setErrorEmail("รูปแบบ Email ไม่ถูกต้อง");
      setEmailColor("red");
    }
  };
  return (
    <div>
      <div className="container-ipad">
        <HomeTop kram="Create Owner Accout" />

        <div className="register-from">
          <div className="h-[300px]"></div>
          <form className="form" onSubmit={validateForm}>
            <input
              style={{ borderRadius: 100, borderColor: userNameColor }}
              type="text"
              className="form-control"
              placeholder="Input Shop’s Name"
              value={shopName}
              onChange={e => setShopName(e.target.value)}
              // style={{ }}
            />
            {/* {console.log(shopName)} */}
            <small style={{ color: userNameColor }}>{errorShopName}</small>
            <br />
            <input
              style={{ borderRadius: 100, borderColor: emailColor }}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <small style={{ color: emailColor }}>{errorEmail}</small>

            <br />
            <input
              style={{ borderRadius: 100, borderColor: userNameColor }}
              className="form-control"
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <small>{errorPassword}</small>

            <br />
            <input
              style={{ borderRadius: 100, borderColor: userNameColor }}
              className="form-control"
              placeholder="Confirm Password"
              type="password"
              value={repassword}
              onChange={e => setRePassword(e.target.value)}
            />
            <small>{errorRePassword}</small>

            <br />
            <br />
            <br />
            <button
              type="submit"
              className="sub-but"
              style={{ marginLeft: 20, height: 56 }}
            >
              Submit
            </button>
          </form>
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
