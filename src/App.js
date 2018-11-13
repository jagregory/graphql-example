import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
import Landing from "./Landing";
import Users from "./Users";
import Finance from "./Finance";

class App extends Component {
  render() {
    return (
      <Router>
        <Landing path="/" />
        <Users path="/users" />
        <Finance path="/finance" />
      </Router>
    );
  }
}

export default App;
