import React, { useState } from "react";
import "./index.scss";

function Search() {
  const [search, setSearch] = useState();

  function SearchFunc(e) {
    const searchItem = e.target.value;
    setSearch(searchItem);
  }


  
  return (
    <section className="Search">
      <div className="inputBox">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          placeholder=" Search for a country ... "
          value={search}
          onChange={SearchFunc}
        />
      </div>
      <div className="filterBox">
        <select>
          <option value="defa" disabled hidden>
            Filter By Region
          </option>
          <option value="1">Africa</option>
          <option value="2">America</option>
          <option value="3">Asia</option>
          <option value="4">Europe</option>
          <option value="5">Oceania</option>
        </select>
      </div>
    </section>
  );
}

export default Search;
