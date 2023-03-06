import React from "react";
import "./LoginPage.css";
import Signup from "../signup/Signup";

function LoginPage() {
  return (
    <div className="signUpContainer">
      <div className="from">
        <h2 className="h2">LOGIN</h2>
        <input className="input1" type="text" />
        <p className="signEmail">Email</p>
        <input className="input2" type="text" />
        <p className="signPassword">Password</p>
        <h3 className="status">Status</h3>
        <button className="signupButton">LOGIN</button>
        <div className="line1"></div>
        <div className="or">OR</div>
        <div className="line2"></div>
        <p className="login">
          Need an account?
          <Signup />
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
