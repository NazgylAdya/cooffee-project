import React, { useEffect, useState } from "react";
import Footer from "../Page/Footer";
import Header from "../Page/Header";
import { useParams } from "react-router-dom";

export default function OneCoffeePage() {
  const { id } = useParams();
  const [oneCoffee, setOneCoffee] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCoffedata() {
      const res = await fetch(`http://localhost:3030/coffee/${id}`);
      const coffee = await res.json();
      console.log(coffee);
      setLoading(false);
      setOneCoffee(coffee);
    }
    getCoffedata();
    return () => setOneCoffee([]);
  }, []);
  if (loading) {
    return "...Loading";
  } else {
    return (
      <>
        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-6"></div>
            </div>
            <h1 className="title-big">Our Coffee</h1>
          </div>
        </div>
        <section className="shop">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 offset-1">
                <img
                  className="shop__girl"
                  src="img/coffee_item.jpg"
                  alt="coffee_item"
                />
              </div>
              <div className="col-lg-4">
                <div className="title">About it</div>
                <img
                  className="beanslogo"
                  src="logo/Beans_logo_dark.svg"
                  alt="Beans logo"
                />
                <div className="shop__point">
                  <span>Country:</span>
                  {oneCoffee.country}
                </div>
                <div className="shop__point">
                  <span>Description:</span>
                  {oneCoffee.description}
                </div>
                <div className="shop__point">
                  <span>Price:</span>
                  <span className="shop__point-price">{oneCoffee.price}$</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
