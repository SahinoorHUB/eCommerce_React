/* eslint-disable jsx-a11y/alt-text */
// File: ../components/AppFooter.js
import React from "react";
import "./appHeader.css"; // Import your CSS for styling
import { Link } from "react-router-dom";
import AutocompleteSearch from "../../../component/autocompleteSearch";
import useStore from "../../../store/cart.store";

const AppHeader = () => {
  const prevItems = useStore((state: any) => state.items);

  return (
    <nav
      className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
      arial-label="Furni navigation bar"
    >
      <div className="container">
        <Link to={""} className="navbar-brand">
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
            <li className="nav-item active">
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/products"} className="nav-link">
                Shop
              </Link>
            </li>
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
