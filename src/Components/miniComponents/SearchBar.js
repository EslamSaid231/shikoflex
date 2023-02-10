import React, { useState } from "react";
import "../Styles/SearchBar.css";
import "tachyons";
export default function SearchBar({ Search }) {
  return (
    <div className="tc pt4 ">
      <input
        className="w-40 h-75-l SearchBar"
        onChange={Search}
        placeholder="Search for a movie"
      />
    </div>
  );
}

//  const [searchValue, setSearchValue] = useState("");
//  const handleSubmit = (e) => {
//    e.preventDefault();
//    callback(searchValue);
//  };
//  console.log(searchValue);
