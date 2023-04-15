import React, { useState } from "react";
import "./HeaderSearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DatePicker from "./DatePicker";

const HeaderSearchBar = () => {
  // Hàm xử lý sự kiện khi nhấn btn Search
  const goTosearch = (event) => {
    event.preventDefault();
    window.location.replace("/search");
  };

  // Biến lưu ngày bắt đầu và kết thúc
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // Biến trạng thái có đang chọn ngày hay không
  const [isPicker, setIspicker] = useState(false);

  // Hàm xử lý sự kiện khi nhấn vào phần ngày tháng
  const startPicker = () => {
    setIspicker(true);
  };

  // Hàm xử lý sự kiện khi thay đổi giá trị ngày tháng và tắt chọn ngày
  const changeValue = (value) => {
    setDate(value);
    setIspicker(false);
  };

  // Hàm xử lý sự kiện khi hủy chọn ngày
  const isCancel = (e) => {
    setIspicker(false);
  };

  // Trả về phần tử HTML hiển thị HeaderSearchBar với input search,
  // phần ngày tháng, số lượng người và nút search tương ứng
  return (
    <form className="search-bar">
      <div>
        <FontAwesomeIcon icon="fa-bed" />
        <input type="text" placeholder="Where are you going?"></input>
      </div>
      <div className="date-picker">
        <label onClick={startPicker}>
          <FontAwesomeIcon icon="fa fa-calendar-days" />
          {`${date[0].startDate.toLocaleDateString(
            "vn-VN"
          )} to ${date[0].endDate.toLocaleDateString("vn-VN")}`}
        </label>
        {!isPicker && ""}
        {isPicker && <DatePicker edit={isCancel} value={changeValue} />}
      </div>
      <div className="person-picker">
        <FontAwesomeIcon icon="fa-person" /> 1 adult &#183; o children &#183; 1
        room
      </div>
      <button
        style={{
          color: "#fff",
          backgroundColor: "#0e6ba8",
          border: "none",
          padding: "10px 16px",
          cursor: "pointer",
        }}
        onClick={goTosearch}
      >
        Search
      </button>
    </form>
  );
};

export default HeaderSearchBar;
