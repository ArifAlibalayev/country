import React, { useEffect, useState } from "react";
import "./index.scss";

function CountriesComponent() {
  const [countries, setCountries] = useState([]);
  const [fakeapi, setFakeapi] = useState(countries)


  async function getData() {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    setCountries(data);

    const response = await fetch("https://restcountries.com/v3.1/all");
    const api = await response.json();
    setFakeapi(api);
  }

  // console.log(data);

  useEffect(() => {
    getData();
  }, []);


  fakeapi.filter((x) => x.name.common.toLowerCase().includes(searchInp.toLowerCase()))
  return (
    <>
      <div className="cardwrapper">
        {/* {console.log(data + "my data")} */}
        {countries.map((x, idx) => (

          <div className="card">  
          <div className="cardimg">
            <img src={x.flags.png} alt="" />
          </div>

        <ul key={idx}>
            <li><h2>{x.name.common}</h2></li>
            <li> <b>Population</b> {x.population}</li>
            <li> <b>Region:</b> {x.region}</li>
            <li><b>Capital:</b> {x.capital}</li>
          </ul>
          </div>
          
        ))}
      </div>
    </>
  );
}

export default CountriesComponent;
