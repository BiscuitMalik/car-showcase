"use client";
import React from "react";
import { SearchManufacture } from ".";
import { useState } from "react";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const onSubmitHandler = () => {
    console.log("hello");
  };

  return (
    <form className="searchbar" onSubmit={onSubmitHandler}>
      <div className="searchbar___item">
        <SearchManufacture
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
