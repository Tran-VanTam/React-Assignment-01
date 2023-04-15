import React from "react";
import "./SearchList.css";
import SearchListItem from "./SearchListItem";
import SearchPopup from "./SearchPopup";

const SearchList = () => {
  // lấy dữ liệu từ file json
  const searchLists = require("../../data/search.json");

  return (
    <div className="search-list">
      <div>
        <SearchPopup />
      </div>
      <div>
        {searchLists.map((searchList) => (
          <SearchListItem
            key={searchList.name}
            name={searchList.name}
            image_url={searchList.image_url}
            distance={searchList.distance}
            tag={searchList.tag}
            type={searchList.type}
            description={searchList.description}
            free_cancel={searchList.free_cancel}
            price={searchList.price}
            rate={searchList.rate}
            rate_text={searchList.rate_text}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchList;
