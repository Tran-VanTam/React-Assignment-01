import React from "react";
import "./SearchListItem.css";

const SearchListItem = (props) => {
  return (
    <div className="search-list-item">
      <div className="search-list-img">
        <img src={props.image_url} alt="" />
      </div>
      <div className="search-list-k2">
        <h2 style={{ color: "#5c7cfa", fontSize: "22px" }}>{props.name}</h2>
        <p>{props.distance} from center</p>
        <span className="search-list-k2-span">{props.tag}</span>
        <p>
          <strong>{props.description}</strong>
        </p>
        <p>{props.type}</p>
        <p style={{ color: "#37b24d" }}>
          {props.free_cancel ? "Free cancellation" : ""}
          {props.free_cancel ? <br /> : ""}
          {props.free_cancel
            ? "You can cancel later, so lock in this great price today!"
            : ""}
        </p>
      </div>
      <div className="search-list-k3">
        <div className="rate-text-rate">
          <h4>{props.rate_text}</h4>
          <p>{props.rate}</p>
        </div>
        <p style={{ fontSize: "24px" }}>
          <strong>$ {props.price}</strong>
        </p>
        <p>Includes taxes and fees</p>
        <button>See availabbility</button>
      </div>
    </div>
  );
};

export default SearchListItem;
