import React,{useState}from 'react'
import styles from "./Styles/NewUser.module.css"
import {Auth} from 'aws-amplify'


//    async function signUp(){
//     try{
//             const {user} = await Auth.signUp({
//                 username,
//                 password,
//                 attributes:{
//                     address,
//                     phone_number,
//                     given_name,
//                     family_name,
//                     email,
//                     birthdate,
//                 },
//                 autoSignIn:{
//                     enabled: false,
//                 }

//             });
//             console.log(user);
//         }
//     catch(err){
//         console.log('error signing up',err);
//     }
// }


export default function  NewUser() {
    
    const [firstName,setFirstName] = useState();
    const [lastName,setLastname] = useState();
    const [dob,setDob] = useState();
    const [phone,setPhone] = useState();
    const [address,SetAddress] = useState();
    const [acctType,setAcctType] = useState();
 
    return(

    <div class={styles.holderBox}>
        <div class={styles.title}></div>
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
                    <input type="radio" name="account-type" id="radio-one"/>
                    <input type="radio" name="account-type" id="radio-two"/>
                    <input type="radio" name="account-type" id="radio-three"/>
                    <span class="styles.account-title">Account Type</span>
                    <div class={styles.category}>
                        <label for="radio-one">
                            <span class="styles.radio-one"></span>
                            <span class="styles.account-type">Administrator</span>
                        </label>
                        <label for="styles.radio-two">
                            <span class="styles.radio-two"></span>
                            <span class="styles.account-type">Manager</span>
                        </label>
                        <label for="radio-three"></label>
                            <span class="styles.radio-three"></span>
                            <span class="styles.account-type">Accountant</span>
                    </div>
                </div>
                <div class="styles.button">
                    <input type="button" value="Register"/>
                </div>
            </div>
            
        </div>)
        ;}
    

