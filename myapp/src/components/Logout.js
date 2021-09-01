import React from "react";

import { useEffect } from "react";
import { useHistory } from "react-router";

import Axios from "axios";

export default function Logout() {
  const history = useHistory();
  useEffect(() => {
    Axios.get("http://localhost:3001/logout", { withCredentials: true })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    history.push("/login");
  }, []);

  return <div></div>;
}
