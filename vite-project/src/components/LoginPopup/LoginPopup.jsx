import React, { useState } from 'react'
import'./LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({setshowLogin}) => {

    const[currstate,setCurrState]=useState("Login")
  return (
    <div className='login-popup'>
       <form  className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currstate}</h2>
            <img onClick={()=>setshowLogin(false)}src={assets.cross_icon} alt=""/>
        </div>
        <div className="login-popup-inputs">
            {currstate==="Login"?<></>:<input type="text" placeholder="Your Name" required/>}
            <input type="email" placeholder="Your Email" required/>
            <input type="password" placeholder="Password" required/>
        </div>
        <button>{currstate==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>By Continuing, i agree to the terms of use & privacy policy</p>
        </div>
        {currstate==="Login"
        ?<p>Create a new acoount?<span onClick={()=>setCurrState("Sign Up")}> Click here</span></p>
        :<p>Already have an account?<span onClick={()=>setCurrState("Login")}> Login here</span></p>
        }
       </form>
    </div>
  )
}

export default LoginPopup
