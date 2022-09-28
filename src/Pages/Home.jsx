import React from 'react';
import styles from "./Styles/SignIn.module.css";
import {BrowserRouter,Route,Link} from "react-router-dom";


function  Home() {
  const[Username,setUserName] = React.useState();
  const[Password,setPassword] = React.useState();
  
  return(
    <>
    <div class={styles.LoginFrame}>
    <svg data-gwd-shape="rectangle" class={styles.Rectangle}></svg>
    
    <form>
    <label id="UsernameLabel" class={styles.UsernameLabel}>Username</label>
    <input type="text" id="UsernameField" class={styles.UnameField} label="Username"/>
    
    
    <label id="PasswordFieldLabel" class={styles.PasswordLabel} for="PasswordField">Password</label>
    <input type="password" id="PasswordField" class={styles.PwordField} label="Password"/>
    
    <button class={styles.LoginButton} id="LogInButton">Log In</button>
    
    <li class={styles.NewUserLink}> <Link to="/NewUser">Register New User</Link></li>
   
    </form>
    
    
  </div>

  <div class={styles.LogoPosition} id="Welcome">
  <img src={require("../Images/Logo/BCPlaceholder.PNG")} alt="BeanCounter Company Name" id="bean-Logo-remake" class={styles.CompanyName}/>
  <img src={require("../Images/Logo/coffee-icon-png-13667.png")} alt="BeanCounter Logo" width="134" height="115" class={styles.CompanyLogo} id="bean-icon"/>
  </div>
  
 

</>
);}