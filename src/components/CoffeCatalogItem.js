import React from "react";
import CatalogItem from "../img/CatalogItem.png";

const CoffeCatalogItem = ({ price, country, imgUrl, name, countryExist }) => {
  if (countryExist) {
    return (
      <div>
        <div class="best__item">
          <img src={imgUrl} alt="coffee" />
          <div class="best__item-title">{name}</div>
          <div class="best__item-price">{country}$</div>
          <div class="best__item-price">{price}$</div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div class="best__item">
          <img src={imgUrl} alt="coffee" />
          <div class="best__item-title">{name}</div>
          <div class="best__item-price">{price}$</div>
        </div>
      </div>
    );
  }
};

export default CoffeCatalogItem;
