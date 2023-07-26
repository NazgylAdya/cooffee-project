import React, { useEffect, useState } from "react";
import CoffeePageWrapper from "./CoffeePageWrapper";

export default function CoffeePageCatalog({ searchValue, selectedCountry }) {
  const [coffeeCatalog, setCoffeeCatalog] = useState([]);
  const [loading, setLoading] = useState(true);

  const [cleanData, setCleanData] = useState([]);
  useEffect(() => {
    async function getCoffedata() {
      const res = await fetch("http://localhost:3030/coffee");
      const coffee = await res.json();
      console.log(coffee);
      setCoffeeCatalog(coffee);
      setLoading(false);
      setCleanData(coffee);
    }
    getCoffedata();
    return () => setCoffeeCatalog([]);
  }, []);
  if (loading) {
    return "...Loading";
  } else {
    if (searchValue === "") {
      if (selectedCountry.length === 0) {
        return (
          <CoffeePageWrapper coffeeCatalog={cleanData}></CoffeePageWrapper>
        );
      } else {
        console.log("else");
        return (
          <CoffeePageWrapper
            coffeeCatalog={cleanData.filter((item) => {
              console.log(item);
              if (selectedCountry.includes(item.country)) {
                return item;
              }
            })}
          ></CoffeePageWrapper>
        );
      }
    } else {
      return (
        <CoffeePageWrapper
          coffeeCatalog={coffeeCatalog
            .filter(
              (item) =>
                item.country
                  .toLowerCase()
                  .includes(searchValue.toLowerCase()) ||
                item.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .filter((item) => {
              if (selectedCountry.length === 0) {
                return item;
              } else {
                if (selectedCountry.includes(item.country)) {
                  return item;
                }
              }
            })}
        ></CoffeePageWrapper>
      );
    }
  }
}
