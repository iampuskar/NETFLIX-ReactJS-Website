import React from 'react'
import "./login.scss"

const Login = () => {
    return (
        <div className="login">
            <div className="top">
              <div className="wrapper">
                
                  <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
                  alt="" />
              </div>
            </div>
           <div className="container">
           <form>
               <h1>Sign In</h1>
               <input type="email" placeholder="Email or phone number" />
               <input type="password" placeholder="Enter your password" />
               <button className="loginButton">Sign In</button>
               <span>New to netflix? <b>Sign Up Now</b></span>
               <small>This page is protected by google reCAPTCHA to ensure you are not a bot <b>Learn More</b></small>
           </form>
           </div>
        </div>
    );
}

export default Login
