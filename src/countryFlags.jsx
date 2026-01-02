import React, { useEffect, useState } from "react";

const CountryFlags = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://xcountries-backend.labs.crio.do/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {countries.map((country) => (
        <div key={country.abbr} style={{ textAlign: "center" }}>
          <img src={country.flag} alt={`Flag of ${country.name}`} width="100" />
          <h4>{country.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default CountryFlags;
