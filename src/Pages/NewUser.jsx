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
                            <input type="text" placeholder="Enter your first name" required/>
                        </div>
                        <div class={styles.inputBox}>
                        <span class={styles.information}>Last Name</span>
                        <input type="styles.text" placeholder="Enter your last name" required/>
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
                        <input type="text" placeholder="Enter your address" required/>
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
                <div class={styles.accountType}>
                    <input type="radio" name="accountType" id="butt1"/>
                    <input type="radio" name="accountType" id="butt2"/>
                    <input type="radio" name="accountType" id="butt3"/>
                    <span class="styles.accountTitle">Account Type</span>
                    <div class={styles.category}>
                        <label for="butt1">
                            <span class={"styles.butt one"}></span>
                            <span class={"styles.accountType"}>Administrator</span>
                        </label>
                        <label for="styles.butt2">
                            <span class={"styles.butt two"}></span>
                            <span class={styles.accountType}>Manager</span>
                        </label>
                        <label for="butt3"></label>
                            <span class="styles.butt three"></span>
                            <span class="styles.accountType">Accountant</span>
                    </div>
                </div>
                <div class="styles.button">
                    <input type="button" value="Cancel" />
                    <input type="button" value="Submit"/>
                </div>
            </div>
            
        </div>)
        ;}

export default NewUser;