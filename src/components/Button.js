import React, { useEffect, useState } from "react";
import ButtonItem from "./ButtonItem";

export default function Button({ selectedCountry, setSelectedCountry }) {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    function getCountryData() {
      const country = ["Brazil", "Kenya", "Columbia"];
      console.log(country);
      setCountryData(country);
    }
    getCountryData();
    return () => setCountryData([]);
  }, []);

  return (
    <div>
      {countryData.map((item) => {
        return (
          <ButtonItem
            country={item}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          ></ButtonItem>
        );
      })}
    </div>
  );
}
