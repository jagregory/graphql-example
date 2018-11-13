import React from "react";
import { Link } from "@reach/router";

const Landing = () => (
  <div>
    <h1>Welcome!</h1>

    <ul>
      <li>
        <Link to="/users">Users</Link>
      </li>
      <li>
        <Link to="/finance">Finance</Link>
      </li>
    </ul>
  </div>
);

export default Landing;
