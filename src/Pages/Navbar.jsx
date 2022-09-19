import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Testing">Test</Link>
        </li>
        <li>
          <Link to="/SignIn">SignIn</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;