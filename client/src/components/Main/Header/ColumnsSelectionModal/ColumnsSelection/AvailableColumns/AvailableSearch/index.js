import React from "react";
import "./AvailableSearch.scss";

const AvailableSearch = ({ setSearchableValue }) => {
   const searchChangeHandler = (value) => {
      setSearchableValue(value.trim());
   };
   return (
      <input
         className="search-input"
         type="search"
         onChange={(event) => searchChangeHandler(event.target.value)}
         placeholder="Search..."
      />
   );
};

export default AvailableSearch;
