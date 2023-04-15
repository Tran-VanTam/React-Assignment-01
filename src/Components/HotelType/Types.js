import React from "react";
import "./Types.css";
import RoomType from "./RoomType";

const Types = () => {
  // lấy dữ liệu từ file json
  const type = require("../../data/type.json");

  return (
    <div className="hotel">
      <h3>Browse by property type</h3>
      <div className="hotel-type">
        {type.map((type) => (
          <RoomType
            key={type.name}
            name={type.name}
            count={type.count}
            image={type.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Types;
