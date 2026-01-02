import React, { useEffect, useState } from "react";

const CountryFlags = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://xcountries-backend.labs.crio.do/all")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      {countries.map((country) => (
        <div key={country.abbr}>
          {/* Country name */}
          <h4>{country.name}</h4>

          {/* Flag image */}
          <img src={country.flag} alt={`Flag of ${country.name}`} />
        </div>
      ))}
    </div>
  );
};

export default CountryFlags;
