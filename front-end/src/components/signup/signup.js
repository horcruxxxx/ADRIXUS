import React,{useState} from "react";
import axios from "axios";
import "./signup.css";
// import { useHistory } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Signup =()=>{
    
    // const history = useHistory();
    const navigate = useNavigate();

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

    function register() {
        const { fname, lname, email, password } = user;
        if (fname && lname && email && password) {
            // alert("hogya")
          axios
            .post("http://localhost:9002/register", user)
            .then((res) => {
              alert(res.data.message);
              navigate('/login');
              // history.push("/login");
            });
        } else {
          alert("Invalid input");
        }
      }

    return(
        <div className="signup">
            <h1>SignUp-Page</h1>
            <input type="text" name="fname" value={user.fname} onChange={handleChange} placeholder="Enter First Name"></input>
            <input type="text" name="lname" value={user.lname} onChange={handleChange} placeholder="Enter Last Name"></input>
            <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter Password"></input>
            
            <div className="button" onClick={register}>Register</div>
            <div> or </div>

            {/* <div className="button" onClick={() => history.push("/login")}>Login</div> */}
            <div className="button" onClick={() => navigate('/login')}>Login</div>
        </div>
    )
};

export default Signup;