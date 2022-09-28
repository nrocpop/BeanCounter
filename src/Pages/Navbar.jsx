import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import ManagerView from './ManagerView'

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
        <li>
          <Link to="/AdminView">admin</Link>
        </li>
        <li>
          <Link to="/AccountantView">accountant</Link>
        </li>
        <li>
          <Link to="/ManagerView">manager</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;