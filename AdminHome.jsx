import React from 'react'
import styles from "./Styles/AdminHome.css"

function  AdminHome() {return(
    <div class={styles.holderBox}>
        <div class={styles.createUserBox}>
            <span class={styles.boxTitle}>Create New User</span>
            <iframe src="Pages/NewUser.jsx"></iframe>
        </div>
        <div class={styles.usersBox}>
            <span class={styles.boxTitle}>Active Users</span>
        </div>
        <div class={styles.reportsBox}>
            <span class={styles.boxTitle}>Reports</span>
        </div>
        <div class={styles.logo}>
            <img src="Images/Logo/logo.png" alt="logo" class={styles.logos}/>
        </div>
        <div class={styles.profilePic}>
            <img src="Images/Profile/profilePic.png" alt="Profile image" class={styles.images}/>
        </div>

</div>)

;}