import React from "react";
import HotelDetails from "./HotelDetails";
import "./HotelDetail.css";

const HotelDetail = () => {
  // lấy dữ liệu từ file json
  const hotelDetail = require("../../data/detail.json");

  return (
    <div className="HotelDetail">
      {hotelDetail.map((detail) => (
        <HotelDetails
          key={detail.name}
          name={detail.name}
          address={detail.address}
          distance={detail.distance}
          price={detail.price}
          photos={detail.photos}
          title={detail.title}
          description={detail.description}
        />
      ))}
    </div>
  );
};

export default HotelDetail;
