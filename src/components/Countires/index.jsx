import React, { useEffect, useState } from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

function CountriesComponent() {
  const [countries, setCountries] = useState([]);
  const [apiCategory, setApiCategory] = useState([]);
  const [search, setSearch] = useState("");

  async function getData() {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    setCountries(data);
    setApiCategory(data);
  }

  useEffect(() => {
    getData();
  }, []);

  function handleInput(e) {
    const searchString = e.target.value.toLowerCase();
    setSearch(searchString);

    const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchString)
    );
    setApiCategory(filteredCountries);
  }

  return (
    <>
      <section className="Search">
      <div className="inputBox">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder=" Search for a country ... "
            value={search}
            onChange={handleInput}
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

      <div className="cardwrapper">
        {apiCategory.map((country, idx) => (
          <div className="card" key={idx}>
            <div className="cardimg">
              <img src={country.flags.png} alt="" />
              
            </div>
            <ul>
              <li>
              <NavLink to={`/Details/${country.name.common}`} className={true ? "open" : "pending"}><h2>{country.name.common}</h2></NavLink>
              </li>
              <li>
                <b>Population</b> {country.population}
              </li>
              <li>
                <b>Region:</b> {country.region}
              </li>
              <li>
                <b>Capital:</b> {country.capital}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default CountriesComponent;
