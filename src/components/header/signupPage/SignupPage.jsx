import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../login/Login";
import axios from "axios";
import "./SignupPage.css";

function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState("false");

  const history = useNavigate();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSingUp = async () => {
    const res = await axios.post("http://localhost:4005/user", {
      username,
      password,
    });
    const data = await res.data;

    if (data.type == "success") {
      setStatus("success");
      history("/login");
    } else {
      setStatus("failed");
    }
  };

  return (
    <div className="signUpContainer">
      <div className="from">
        <h2 className="h2">SIGN UP</h2>
        <input className="input1" type="text" onChange={handleUsername} />
        <p className="signEmail">Username</p>
        <input className="input2" type="text" onChange={handlePassword} />
        <p className="signPassword">Password</p>
        <input
          className="input2"
          type="text"
          onChange={handleConfirmPassword}
        />
        <p className="signPassword">Confirm Password</p>
        <button className="signupButton">SIGN UP</button>
        <div className="line1"></div>
        <div className="or">OR</div>
        <div className="line2"></div>
        <p className="login">
          already a user? <Login />
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
