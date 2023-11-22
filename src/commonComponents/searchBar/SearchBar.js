import React from "react";
import './SearchBar.css'
function SearchBar() {
  return (
    <div className="searchBar">
        <img src="../CommonImages/searchIcon.png" alt="" />
      <input type="text" placeholder="Search Users by name, date..." />
    </div>
  );
}

export default SearchBar;
