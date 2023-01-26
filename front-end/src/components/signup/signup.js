import React,{useState} from "react";
import "./signup.css";

const Signup =()=>{
    
    const [ user, setUser] = useState({         //creating hook for maintaing all input elements.
        fname: "",
        lname:"",
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

    // const handleChange = event => {
    //     const { name, value } = event.target
    //     setUser({
    //         ...user,
    //         [name]: value
    //     })
    // }

    return(
        <div className="signup">
            <h1>SignUp-Page</h1>
            <input type="text" name="fname" value={user.fname} onChange={handleChange} placeholder="Enter First Name"></input>
            <input type="text" name="lname" value={user.lname} onChange={handleChange} placeholder="Enter Last Name"></input>
            <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter Password"></input>
            
            <div className="button">Register</div>
        </div>
    )
};

export default Signup;