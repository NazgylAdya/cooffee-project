import { React, useContext } from "react";
import { Link } from "react-router-dom";
import {
  INCREASE_COUNT,
  DECREASE_COUNT,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
} from "../context/Types";
import magazineContext from "../context/magazine/MagazineContext";
const CoffeePageCatalogItem = ({ id, price, country, imgUrl, name }) => {
  const [state, dispatch] = useContext(magazineContext);
  const dollarToTenge = 450;
  const priceValue = price.slice(0, -1) * dollarToTenge;
  const addToCart = () => {
    dispatch({
      type: ADD_PRODUCT,
      payload: { name, country, price: priceValue, id },
    });
    console.log(state);
  };
  const removeToCart = () => {
    dispatch({
      type: REMOVE_PRODUCT,
      payload: id,
    });
    console.log(state);
  };

  const startCount = () => {
    dispatch({
      type: INCREASE_COUNT,
      payload: priceValue,
    });
  };

  return (
    <div>
      <Link to={`/coffePage/${id}`}>
        <div className="shop__item" key={id}>
          <img src={imgUrl} alt="coffee" />
          <div className="shop__item-title">{name}</div>
          <div className="shop__item-price">{country}</div>
          <div className="shop__item-price">{price}$</div>
          <button onClick={() => startCount()}>By me!</button>
          <button onClick={() => addToCart()}>Add to Cart!</button>
          {state.products.findIndex((item) => {
            return item.id === id;
          }) !== -1 ? (
            <button onClick={() => removeToCart()}>Remove to Cart!</button>
          ) : (
            <></>
          )}
        </div>
      </Link>
    </div>
  );
};
export default CoffeePageCatalogItem;
