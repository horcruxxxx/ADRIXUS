import React,{useState} from "react";
import "./login.css";
import axios from "axios"

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

    function login() {
    axios
        .post("http://localhost:9002/login", user)
        .then(function(res) {
            alert(res.data.message)
            // setLoginUser(res.data.user)
            // history.push("/")
        });
    }

    // const login = () => {
    //     axios.post("http://localhost:9002/login", user)
    //     .then(res => {
    //         alert(res.data.message)
    //         setLoginUser(res.data.user)
    //         history.push("/")
    //     })
    // }

    return(
        <div className="login">
            <h1>Login-Page</h1>
            <input type="email" name="email" value={user.email} onChange={handleChange} Placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter Password"></input>
            <div className="button">Login</div>
            <div> or </div>
            <div className="button" onClick={login}>Register</div>
        </div>
    )
};

export default Login;