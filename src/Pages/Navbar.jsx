import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import styles from "./Styles/Navbar.css"

function Navbar() {
  return (
    <nav>
      
      <div class={styles.navBar}>
        <a class={styles.active} href="#home">Home</a>
        <a href="#users">Users</a>
        <a href="#contact">Reports</a>
        <a href="#about">Profile</a>
        <div class={styles.navPic}>
            <img src="src\Images\Logo\headeridk.jpg" width={100} height={100}/>
        </div>
        <div class={styles.profilePic}>
            <img src="src\Images\Logo\profilePic.png" width={100} height={100}/>
        </div>
        <div class={styles.logoPic}>
            <img src="src\Images\Logo\logo2.png" width={100} height={100} />
        </div>
    </div>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Testing">Test</Link>
        </li>
        <li>
          <Link to="/SignIn">SignIn</Link>
        </li>
      </ul> */}
    </nav>
  );
}

export default Navbar;