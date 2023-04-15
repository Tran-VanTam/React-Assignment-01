import React from "react";
import "./Footer.css";
import ColFooter from "./ColFooter";

const Footer = () => {
  const footers = require("../../data/footer.json");

  return (
    <div className="footer">
      {footers.map((col) => (
        <ColFooter key={col.col_number} item={col.col_values} />
      ))}
    </div>
  );
};

export default Footer;
