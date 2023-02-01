import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function Register() {
  return (
    <div>
      <div className="container-ipad">
        <div className="head-head relative">
          <br />
          <h1>Create Owner Accout</h1>
          <FontAwesomeIcon
            icon={faHome}
            className="absolute top-[32px] left-[32px] text-white text-[28px]"
          />
        </div>

        <div className="register-from">
          {/* <h1>test</h1> */}
          <input
            style={{ borderRadius: 100 }}
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Input Shop’s Name"
          />
          <br />
          <input
            style={{ borderRadius: 100 }}
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Username"
          />
          <br />
          <input
            style={{ borderRadius: 100 }}
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Password"
          />
          <br />
          <input
            style={{ borderRadius: 100 }}
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Confirm Password"
          />
          <br />
          <br />
          <br />

          <button
            type="button"
            class="sub-but"
            style={{ marginLeft: 20, height: 56 }}
          >
            Submit
          </button>
          <br />
          <br />

          <div style={{ display: "flex", justifyContent: "center" }}>
            <input
              type="checkbox"
              class="form-check-input "
              id="exampleCheck1"
            />

            <label class="form-check-label" for="exampleCheck1">
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
