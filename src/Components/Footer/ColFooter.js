import React from "react";
import "./ColFooter.css";

const ColFooter = (props) => {
  return (
    <ul className="col-footer">
      {props.item.map((item) => (
        <li key={item}>
          <a href="#">{item}</a>
        </li>
      ))}
    </ul>
  );
};

export default ColFooter;
