import React from "react";
import "./RoomType.css";

const RoomType = (props) => {
  return (
    <div className="room-type">
      <div className="room-type-image">
        <img src={props.image} alt=""></img>
      </div>
      <div className="room-info">
        <strong>{props.name}</strong>
        <p>{props.count} hotels</p>
      </div>
    </div>
  );
};

export default RoomType;
