import React from "react";
import "./searchBar.css";

import { FiSearch } from "react-icons/fi";

function SearchBar(props) {
  return (
    <div className="search_container">
      <div className="search_items">
        <FiSearch className="search_icon" />
        <input
          className="search_input"
          type="text"
          placeholder="search country"
        />
      </div>
    </div>
  );
}

export default SearchBar;
