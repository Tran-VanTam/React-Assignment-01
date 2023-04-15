import React from "react";
import "./HotelDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HotelDetails = (props) => {
  return (
    <div className="hotel-details">
      <div className="h3-button">
        <h3>{props.name}</h3>
        <button>Reserve or Book Now!</button>
      </div>
      <p className="p-icon">
        <FontAwesomeIcon icon="fas-regular fa-location-pin" size="lg" />
        {props.address}
      </p>
      <p style={{ color: "#5c7cfa", fontSize: "18px" }}>{props.distance}</p>
      <p style={{ color: "#2f9e44", fontSize: "16px" }}>{props.price}</p>
      <div className="details-image">
        {props.photos.map((photo, index) => (
          <img key={index} src={photo} alt="" />
        ))}
      </div>
      <h3>{props.title}</h3>
      <div className="stay-price">
        <p>{props.description}</p>
        <div className="stay-price-booking">
          <h4>Perfect for a 9-night stay</h4>
          <p>
            Located in the real heart of Krakow, this property has an excellent
            location score of 9.8!
          </p>
          <p className="p-booking">
            <strong>$945</strong>(9 nights)
          </p>
          <br />
          <button>Reserve or Book Now!</button>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
