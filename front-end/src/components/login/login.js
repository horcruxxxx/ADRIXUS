import React from "react";
import "./login.css";

const Login =()=>{
    return(
        <div className="login">
            <h1>Login-Page</h1>
            <input type="email" Placeholder="Enter your Email"></input>
            <input type="password" placeholder="Enter Password"></input>
            <div className="button">Login</div>
            <div> or </div>
            <div className="button">Register</div>
        </div>
    )
};

export default Login;