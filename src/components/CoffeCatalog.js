import React, { useEffect, useState } from "react";
import CoffeCatalogItem from "./CoffeCatalogItem";

const CoffeCatalog = () => {
  const [coffeeCatalog, setCoffeeCatalog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCoffedata() {
      const res = await fetch("http://localhost:3000/bestsellers");
      const coffee = await res.json();
      console.log(coffee);
      setCoffeeCatalog(coffee);
      setLoading(false);
    }
    getCoffedata();
    return () => setCoffeeCatalog([]);
  }, []);
  if (loading) {
    return "...Loading";
  } else {
    return (
      <div class="best__wrapper">
        {coffeeCatalog.map((item) => {
          return (
            <CoffeCatalogItem
              price={item.price}
              name={item.name}
              imgUrl={item.url}
              countryExist={false}
              country={null}
            ></CoffeCatalogItem>
          );
        })}
      </div>
    );
  }
};

export default CoffeCatalog;
