import React from "react";
import "./Hotels.css";
import Hotel from "./Hotel";

const Hotels = () => {
  // lấy dữ liệu từ file json
  const hotels = require("../../data/hotel_list.json");

  return (
    <div>
      <h3>Homes guests love</h3>
      <div className="hotels">
        {hotels.map((hotel) => (
          <Hotel key={hotel.name} item={hotel} />
        ))}
      </div>
    </div>
  );
};

export default Hotels;
