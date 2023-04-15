import React from "react";
import "./CityList.css";
import City from "./City";

const CityList = () => {
  // lấy dữ liệu từ file json
  const cities = require("../../data/city.json");

  return (
    <div className="city-list">
      {cities.map((city) => (
        <City 
        key={city.name} 
        name={city.name} 
        image={city.image} 
        subText={city.subText}/>
      ))}
    </div>
  );
};

export default CityList;
