import "./App.css";

import Signup from "./components/Signup";
import Header from "./components/Header";
import { Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

import Logout from "./components/Logout";

import Signin from "./components/Signin";
function App() {
  return (
    <div>
      <Header />

      <Route path="/register">
        <Signup />
      </Route>

      <Route path="/login">
        <Signin />
      </Route>
      <Route path="/logout">
        <Logout />
      </Route>

      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </div>
  );
}

export default App;
