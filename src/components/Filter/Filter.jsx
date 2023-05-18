import React from "react";
import styles from "./Filter.module.css";

const Filter = ({ onFilterChange, filterValue }) => {
  function handleFilterChange(e) {
    onFilterChange(e.target.value);
  }

  return (
    <input
      onInput={handleFilterChange}
      type="text"
      placeholder="Search..."
      value={filterValue}
    />
  );
};

export default Filter;
