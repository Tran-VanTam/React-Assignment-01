import React from "react";
import "./NavBarItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Khai báo một functional component NavBarItem nhận props là item và active và function changeActive
const NavBarItem = (props) => {
  // Khai báo hàm xử lý sự kiện onClickNavItemHandler khi click vào NavBarItem
  const onClickNavItemHandler = (event) => {
    if (event.target.textContent.trim()); // Nếu có nội dung bên trong thẻ HTML được click
    props.changeActive(event.target.textContent.trim()); // Gọi hàm changeActive truyền vào nội dung đó
  };
// Trả về phần tử HTML hiển thị NavBarItem với class navbar-items, 
// class active (nếu đang active), và icon và text tương ứng
  return (
    <div
      className={`navbar-items ${
        props.active === props.item.type ? "active" : ""
      }`}
      onClick={onClickNavItemHandler}
    >
      <div className="active">
        <i className="icon">
          <FontAwesomeIcon icon={`fa-solid ${props.item.icon}`} />
        </i>
        <span className="text">{props.item.type}</span>
      </div>
    </div>
  );
};

export default NavBarItem;
