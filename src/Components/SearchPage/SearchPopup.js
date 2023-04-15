import React, { useState } from "react";
import "./SearchPopup.css";

const SearchPopup = () => {
  // Biến lưu ngày bắt đầu và kết thúc
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div className="search-popup">
      <div>
        <h4>Search</h4>
        <label htmlFor="Destination">Destination</label>
        <br />
        <input type="text" id="Destination"></input>
        <br />
        <label htmlFor="check-in-date">Check-in Date</label>
        <br />
        <input
          type="text"
          id="check-in-date"
          placeholder={`${date[0].startDate.toLocaleDateString(
            "vn-VN"
          )} to ${date[0].endDate.toLocaleDateString("vn-VN")}`}
        ></input>
      </div>
      <h5>Options</h5>
      <div className="form-container">
        <form>
          <label>
            Min price per night
            <input type="text" />
          </label>
          <label>
            Max price per night
            <input type="text" />
          </label>
          <label>
            Adult
            <input type="number" placeholder="1" />
          </label>
          <label>
            Children
            <input type="number" placeholder="0" />
          </label>
          <label>
            Room
            <input type="number" placeholder="1" />
          </label>
        </form>
      </div>
      <button>Search</button>
    </div>
  );
};

export default SearchPopup;
