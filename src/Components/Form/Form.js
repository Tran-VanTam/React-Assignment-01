import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="form">
      <h2>Save time, save money!</h2>
      <p>Sign up and we'll send the best deals to you</p>
      <input type="text" placeholder="Your Email"></input>
      <button>Subscribe</button>
    </div>
  );
};

export default Form;
