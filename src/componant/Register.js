import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import HomeTop from "../template/Home-top";
import { useState } from "react";
import axios from "axios";

function Register() {
  const [input, setInput] = useState({
    shop_name: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
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
  const [passwordColor, setPasswordColor] = useState("");
  const [rePasswordColor, setRePasswordColor] = useState("");

  const validateForm = async e => {
    try {
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
      if (password.length >= 6) {
        setErrorPassword("");
        setPasswordColor("green");
        if (repassword != "" && repassword === password) {
          setErrorRePassword(" ");
          setErrorRePassword("");
          setPasswordColor("green");
        } else setErrorRePassword("กรุณากยืนยัน password ให้ถูกต้อง");
      } else {
        setErrorPassword("พาสเวิร์ดต้องมากกว่า 6 ตัวอักษร");
        setErrorRePassword("กรุณากยืนยัน password");
        setPasswordColor("red");
        setRePasswordColor("red");
      }
      await axios.post("http://localhost:8888/register/register", {
        shop_name: input.shop_name,
        username: input.username,
        password: input.password,
      });
      navigate("/login");
    } catch (err) {}
  };

  const handleChangleinputShopname = e => {
    setShopName(e.target.value);
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleChangleinputEmail = e => {
    setEmail(e.target.value);
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleChangleinputPassword = e => {
    setPassword(e.target.value);
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleChangleinputRePassword = e => {
    setRePassword(e.target.value);
    setInput({ ...input, [e.target.name]: e.target.value });
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
              onChange={handleChangleinputShopname}
              name="shop_name"
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
              value={input.email}
              name="username"
              onChange={handleChangleinputEmail}
            />
            <small style={{ color: emailColor }}>{errorEmail}</small>

            <br />
            <input
              style={{ borderRadius: 100, borderColor: passwordColor }}
              className="form-control"
              type="password"
              placeholder="Password"
              value={password}
              name="password"
              onChange={handleChangleinputPassword}
            />
            <small style={{ color: passwordColor }}>{errorPassword}</small>

            <br />
            <input
              style={{ borderRadius: 100, borderColor: rePasswordColor }}
              className="form-control"
              placeholder="Confirm Password"
              type="password"
              value={repassword}
              onChange={handleChangleinputRePassword}
            />
            <small style={{ color: rePasswordColor }}>{errorRePassword}</small>

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
