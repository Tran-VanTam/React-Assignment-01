import React from "react";
import "./City.css";

const City = (props) => {
  return (
    <div className="city">
      <div className="city-image">
        <img src={props.image} alt=""></img>
      </div>
      <div className="city-info">
        <h4>{props.name}</h4>
        <p>{props.subText}</p>
      </div>
    </div>
  );
};

export default City;
