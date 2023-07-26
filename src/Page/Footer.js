import React from "react";
import CoffePage from "./CoffePage";
import { Link } from "react-router-dom";
import LogoCoffee from "../img/coffee-beans.svg";

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-lg-5 offset-lg-4">
              <ul class="footer">
                <li class="footer__item">
                  <Link to={"/"}>
                    <img src={LogoCoffee} alt="logo" />
                    Coffee house
                  </Link>
                </li>
                <li class="footer__item">
                  <Link to={`/coffeePage`}>Our coffee</Link>
                </li>
                <li class="footer__item">
                  <Link to={`/goodsPage`}>For your pleasure</Link>
                </li>
              </ul>
            </div>
          </div>
          <img
            class="beanslogo"
            src="logo/Beans_logo_dark.svg"
            alt="Beans logo"
          />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
