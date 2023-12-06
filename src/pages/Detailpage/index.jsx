import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./index.scss"

function Details() {
  const [dataDetails, setDataDetails] = useState([]);
  let { name } = useParams();

  async function getData(name) {
    const data = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const res = await data.json();
    setDataDetails(res);
  }

  useEffect(() => {
    getData(name);
  }, []);

  return (
    <section className="Details">
      <div className="backbtn">
        <button>
          {" "}
          <NavLink to={"/"}
          className={true ? "open" : "pending"}
          >
            <i class="fa-solid fa-arrow-left"></i> Back
          </NavLink>
        </button>
      </div>

      <div className="DetailBox">
        {dataDetails.map((country) => (
          <div className="DetailWrapper">
            <div className="imgDetail">
              <img src={country.flags.png} />
            </div>
            <div className="contentDetail">
              <div className="content1">
                <h2>{country.name.common}</h2>
                <p><span>Native name : </span>{country.name?.nativeName?.common}</p>
                <p><span>Currency :</span> {country.currencies?.name}</p>
                <p><span>Population: </span>{country.population.toLocaleString("en-US")}</p>
                <p><span>Region: </span>{country.region}</p>
                <p><span>Sub Region: </span>{country.subregion}</p>
              </div>
             
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Details;
