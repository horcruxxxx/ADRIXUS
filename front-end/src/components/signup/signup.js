import React from "react";
import "./signup.css";

const Signup =()=>{
    return(
        <div className="signup">
            <h1>SignUp-Page</h1>
            <input type="text" placeholder="Enter First Name"></input>
            <input type="text" placeholder="Enter Last Name"></input>
            <input type="email" Placeholder="Enter your Email"></input>
            <input type="password" placeholder="Enter Password"></input>
            
            <div className="button">Register</div>
        </div>
    )
};

export default Signup;