
import React from 'react'
import styles from "./Styles/NewUser.module.css"

function  NewUser() {return(

    <div class={styles.holderBox}>
        <div class={styles.title}>Create New User</div>
            <div className = {styles.components}>
            
                <form action="#"/>
                    <div class={styles.userInformation}>
                        <div class={styles.inputBox}>
                         <span class={styles.information}>First Name</span>
                            <input type="text" placeholder="Enter first name" required/>
                        </div>
                        <div class={styles.inputBox}>
                        <span class={styles.information}>Last Name</span>
                        <input type="styles.text" placeholder="Enter last name" required/>
                        </div>
                        <div class={styles.inputBox}>
                        <span class={styles.information}>Date of Birth</span>
                        <input type="date" required/>
                        </div>
                        <div class={styles.inputBox}>
                        <span class={styles.information}>Phone Number</span>
                        <input type="tel" placeholder="(___) ___-_____" required/>
                        </div>
                        <div class={styles.inputBox}>
                        <span class={styles.information}>Street Address</span>
                        <input type="text" placeholder="Enter address" required/>
                        </div>
                        <div class={styles.inputBox}>
                        <span class={styles.information}>City</span>
                        <input type="text" placeholder="Enter city" required/>
                        </div>
                        <div class={styles.inputBox}>
                        <span class={styles.information}>State</span>
                        <input type="text" placeholder="Enter state" required/>
                        </div>
                        <div class={styles.inputBox}>
                        <span class={styles.information}>ZIP/Postal Code</span>
                        <input type="text" placeholder="Enter ZIP/Postal code" required/>
                        </div>
                    </div>
                <div class={styles.accountDetails}>
                    <input type="radio" name="accountType" id={styles.butt1}/>
                    <input type="radio" name="accountType" id={styles.butt2}/>
                    <input type="radio" name="accountType" id={styles.butt3}/>
                    <span class={styles.accountTitle}>Account Type</span>
                    <div class={styles.category}>
                        <label htmlFor={styles.butt1}>
                            <span class={styles.butt}></span>
                            <span class={styles.accountType}>Administrator</span>
                        </label>
                        <label for={styles.butt2}>
                            <span class={styles.butt}></span>
                            <span class={styles.accountType}>Manager</span>
                        </label>
                        <label htmlFor={styles.butt3}>
                            <span class={styles.butt}></span>
                            <span class={styles.accountType}>Accountant</span>
                        </label>
                    </div>
                </div>
                <div class={styles.button}>
                    <input type={styles.button}value="Cancel" />
                    <input type={styles.button} value="Submit"/>
                </div>
            </div>
            
        </div>)
        ;}

export default NewUser;