import React from "react";
import "./Footer.css";
import {
  AiFillHome,
  AiFillMail,
  AiFillPhone,
  AiFillFacebook,
} from "react-icons/ai";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-box">
        <div className="contact">
          <h1>Contact us</h1>
          <p>
            Need to get in touch with us? Either fill out the form with your
            inquiry or find the department email you’d like to contact below
          </p>
        </div>
        <div className="submit">
          <div className="name">
            <input type="text" />
            <p className="firstName">First name</p>
            <input type="text" />
            <p className="lastName">Last name</p>
          </div>
          <div className="mail-box">
            <input className="mail" type="text" />
            <p className="email">Email</p>
          </div>
          <div className="feedback-box">
            <textarea className="feedback" />
            <p className="feedback-placholder">What can we help you with?</p>
          </div>
          <button className="button">Submit</button>
        </div>
      </div>
      <div className="footer">
        <div className="footerBox">
          <div className="contact-us">
            <div className="contact-box">
              <div className="flex">
                <AiFillHome />
                <p className="txt">
                  Ulanbator, Sukhbaatar district, 14250, Seoul Street
                </p>
              </div>
              <div className="flex">
                <AiFillMail />
                <p className="txt">info@gmail.com</p>
              </div>
              <div className="flex">
                <AiFillPhone />
                <p className="txt">+976 99779977</p>
              </div>
              <div className="flex">
                <AiFillFacebook />
                <p className="txt">Name school</p>
              </div>
            </div>
          </div>
          <div className="about">
            <div className="contact-box">
              <h2>School name</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                quasi blanditiis minima nam temporibus culpa placeat! Adipisci
                cumque corrupti quos, harum quam cum debitis dolores, quidem
                repellat maiores, nemo optio!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
