import React, { useState } from "react";
import "./Navbar.css";
import NavBarItem from "./NavBarItem";

const Navbar = () => {
  // Lấy dữ liệu từ file json
  const navbarItems = require("../../data/navBar.json");

  // Khởi tạo state "activeIndex"
  const [activeIndex, setActiveIndex] = useState(navbarItems[0].type);

  // Thay đổi mục active
  const handleItemClick = (activeIndex) => {
    setActiveIndex(activeIndex);
  };

  // Sự kiện khi nhấn vào tiêu đề Booking Website
  const goToHome = (event) => {
    event.preventDefault();
    window.location.replace("/");
  };

  // Cấu trúc component navbar
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#" onClick={goToHome}>
          Booking Website
        </a>
        <div>
          <button>Register</button>
          <button>Login</button>
        </div>
      </div>
      <div className="navbar-items">
        {navbarItems.map((navbarItem) => (
          <NavBarItem
            key={navbarItem.type}
            item={navbarItem}
            active={activeIndex}
            changeActive={handleItemClick}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
