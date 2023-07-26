import React, { useContext } from "react";
import { Link } from "react-router-dom";
import magazineContext from "../context/magazine/MagazineContext";

const Header = () => {
  const [state, dispatch] = useContext(magazineContext);
  return (
    <div>
      <ul className="header">
        <li className="header__item">
          <Link to={`/`}>
            <img src="logo/Logo.svg" alt="logo" />
          </Link>
        </li>
        <li className="header__item">
          <Link to={`/coffeePage`}>Our coffee</Link>
        </li>
        <li className="header__item">
          <a href="#">For your pleasure</a>
        </li>
      </ul>
      <p>My count is:{state.count}</p>
      <p>My cart:{state.products.length}</p>
    </div>
  );
};

export default Header;
