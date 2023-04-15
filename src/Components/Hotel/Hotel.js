import React from "react";
import "./Hotel.css";

const Hotel = (props) => {
  // Sự kiện khi click vào tên hotel -> chuyển đến trang detail
  const goToDetail = (event) => {
    event.preventDefault();
    window.location.replace("/detail");
  };

  return (
    <div className="hotel">
      <div className="hotel-image">
        <img src={props.item.image_url} alt=""></img>
      </div>
      <div className="hotel-details">
        <a href="#" onClick={goToDetail}>
          <h4>{props.item.name}</h4>
        </a>
        <p>{props.item.city}</p>
        <p>
          <strong>Starting from ${props.item.price}</strong>
        </p>
        <div className="hotel-span">
          <span>{props.item.rate}</span> {props.item.type}
        </div>
      </div>
    </div>
  );
};

export default Hotel;
