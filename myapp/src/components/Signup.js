import React from "react";
import { useState } from "react";

import Axios from "axios";

export default function Signup() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const addToDB = (e) => {
    e.preventDefault();

    Axios.post("http://localhost:3001/register", {
      email: email,
      password: password,
    });
    console.log("data posted successfully");
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center mt5">Signup</h1>

        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" onClick={addToDB} className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
