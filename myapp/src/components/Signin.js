import React from "react";
import Axios from "axios";

import cookiess from "universal-cookie";
import { useState } from "react";

import { useHistory } from "react-router-dom";

const cookies = new cookiess();

export default function Signin() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const history = useHistory();
  const addToDB = (e) => {
    e.preventDefault();
    Axios.post(
      "http://localhost:3001/login",
      {
        email,
        password,
      },
      {
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    history.push("/dashboard");
    console.log("login  successfully");
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center mt5">login</h1>

        <form method="POST">
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
              onChange={(e) => setemail(e.target.value)}
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
              onChange={(e) => setpassword(e.target.value)}
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
          <button onClick={addToDB} type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
