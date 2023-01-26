import React,{useState} from "react";
import "./login.css";

const Login =()=>{

    const [ user, setUser] = useState({         //creating hook for maintaing all input elements.
        email:"",
        password:""
    });

    function handleChange(event) {
        const { name, value } = event.target
        setUser({
            ...user,
            [name]: value
        })
    }  

    return(
        <div className="login">
            <h1>Login-Page</h1>
            <input type="email" name="email" value={user.email} onChange={handleChange} Placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter Password"></input>
            <div className="button">Login</div>
            <div> or </div>
            <div className="button">Register</div>
        </div>
    )
};

export default Login;