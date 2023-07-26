import React, { useEffect, useState } from "react";
import CoffeePageCatalogItem from "./CoffeePageCatalogItem";
import { Link } from "react-router-dom";

const CoffeePageWrapper = ({ coffeeCatalog }) => {
  return (
    <div className="shop__wrapper">
      {coffeeCatalog.map((item) => {
        return (
          // <Link to={`/coffePage/${item.id}`}>
          <CoffeePageCatalogItem
            id={item.id}
            price={item.price}
            name={item.name}
            imgUrl={item.url}
            country={item.country}
          ></CoffeePageCatalogItem>
          // </Link>
        );
      })}
    </div>
  );
};

export default CoffeePageWrapper;
