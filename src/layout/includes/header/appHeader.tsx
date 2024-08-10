/* eslint-disable jsx-a11y/alt-text */
// File: ../components/AppFooter.js
import React, { useEffect } from "react";
import "./appHeader.css"; // Import your CSS for styling
import { Link, useLocation } from "react-router-dom";
import AutocompleteSearch from "../../../component/autocompleteSearch";
import useStore from "../../../store/cart.store";

const topNav = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Shop",
    link: "/products",
  },
];

const AppHeader = () => {
  const prevItems = useStore((state: any) => state.items);

  const location = useLocation();
  const currentPath = location.pathname; 

  return (
    <nav
      className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
      arial-label="Furni navigation bar"
    >
      <div className="container">
        <Link to={"/"} className="navbar-brand">
          e-Cart <span>.</span>
        </Link>
        <div className="navbar-Search">
          <AutocompleteSearch />
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsFurni"
          aria-controls="navbarsFurni"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsFurni">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            {topNav.map((item, index) => {
              return (
                <li className={item.link === currentPath ? 'active' : ''} key={index}>
                  <Link to={item.link} className="nav-link">
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li>
              <Link className="nav-link" to={""}>
                <img src="https://raw.githubusercontent.com/SahinoorHUB/eCommerce_React/main/src/assets/images/user.png" />
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={"cartDetails"}>
                <img src="https://raw.githubusercontent.com/SahinoorHUB/eCommerce_React/main/src/assets/images/cart.png" />
                {prevItems && prevItems.length > 0 && (
                  <span className="cart-count">{prevItems.length}</span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AppHeader;
