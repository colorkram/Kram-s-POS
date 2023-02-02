import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import HomeTop from "../template/Home-top";

function Register() {
  return (
    <div>
      <div className="container-ipad">
        <HomeTop kram="Create Owner Accout" />

        <div className="register-from">
          <div className="h-[300px]"></div>
          <input
            style={{ borderRadius: 100 }}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Input Shop’s Name"
          />
          <br />
          <input
            style={{ borderRadius: 100 }}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Username"
          />
          <br />
          <input
            style={{ borderRadius: 100 }}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Password"
          />
          <br />
          <input
            style={{ borderRadius: 100 }}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Confirm Password"
          />
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
