import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const instance = axios.create({
    baseURL: "https://bloodhub3.herokuapp.com", // The base URL for the API
    headers: {
      "Access-Control-Allow-Origin": "https://chimerical-pothos-a8dbfd.netlify.app", // Allow requests from this domain
    },
  });

export default function Home() {

    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loginError, setloginError] = useState("");
    
    const login = (e) => {

        if (email !== "" && password !== "") {
            // console.log("ok")
            console.log(email,password)
            instance.post("https://bloodhub3.herokuapp.com/login", {
                user_email:email,
                user_password:password

            }).then((response) => {

                console.log(response.data);
                if(response.data.error){
                    setloginError(response.data.error)
                }
                else if(response.data.success){
                    navigate("/userDash");
                }

            });
        }
        else{
            setloginError("please enter your email/password")
        }
    }

    const loginAdmin = (e) => {
        if (email !== "" && password !== "") {
            // console.log("ok")
            console.log(email,password)
            axios.post("https://bloodhub3.herokuapp.com/loginAdmin", {
                user_email:email,
                user_password:password

            }).then((response) => {

                console.log(response.data);
                if(response.data.error){
                    setloginError(response.data.error)
                }
                else if(response.data.success){
                    navigate("/AdminDash");
                }

            });
        }
        else{
            setloginError("please enter your email/password")
        }
    }
   

    return (
        <div className="App">
            <div className="temp">
                <button className="btn btn-danger signup_toggle">
                    <Link to="/signup"> Sign Up </Link>
                </button>
            </div>
            <div className="sign-in ">
                <h2>Welcome to Bloodhub</h2>
                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        name="email"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        name="password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>
                <div className="d-grid">
                    <button className="btn btn-danger" onClick={login}>
                        Log In
                    </button>
                </div>
                <br></br>
                <div className="d-grid">
                    <button className="btn btn-danger" onClick={loginAdmin}>
                        Log In as admin
                    </button>
                </div>
            </div>
            <h3>{loginError}</h3>
        </div>
    );
}
