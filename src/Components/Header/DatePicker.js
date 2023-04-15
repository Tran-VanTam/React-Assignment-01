import React, { useState } from "react";
import "./DatePicker.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";

const DatePicker = (props) => {
  // Khai báo biến state để lưu ngày bắt đầu và ngày kết thúc
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // Chuyền giá trị mới về cho component searchbar
  const newValue = (event) => {
    event.preventDefault();
    props.value(state);
  };

  // hủy chọn giá trị mới
  const cancelPick = (event) => {
    event.preventDefault();
    props.edit(false);
  };

  return (
    <div className="Date-picker">
      <DateRange
        editableDateInputs={true}
        onChange={(item) => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
        className="date"
        minDate={new Date()}
      />
      <div>
        <button onClick={cancelPick}>Cancel</button>
        <button onClick={newValue}>Confirm</button>
      </div>
    </div>
  );
};

export default DatePicker;
