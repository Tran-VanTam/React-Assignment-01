import React from "react";
import HeaderSearchBar from "./HeaderSearchBar";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div>
          <h1> A lifetime of discounts? It's Genius</h1>
          <p>
            Get rewarded for your travels - unlock instant saving of 10% or more
            with a free account
          </p>
          <button>sign in / Register</button>
        </div>
      </header>
      {/* Thanh tim kiem */}
      <HeaderSearchBar />
    </div>
  );
};

export default Header;
