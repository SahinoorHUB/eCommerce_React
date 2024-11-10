/* eslint-disable jsx-a11y/alt-text */
// File: ../components/AppFooter.js
import React, { useEffect, useState } from "react";
import "./appHeader.css"; // Import your CSS for styling
import { Link, useLocation, useNavigate } from "react-router-dom";
import AutocompleteSearch from "../../../component/autocompleteSearch";
import useStore from "../../../store/cart.store";
import Modal from "../../../component/model/model";
import authStore from "../../../store/auth.store";
import cart from '../../../assets/images/cart.png';
import user from '../../../assets/images/user.png';

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
  const { isUserLoggedIn, updateLoginModalState, showLoginModal } = authStore();
  let navigate = useNavigate();

  const checkingCart = () => { 
    if (isUserLoggedIn()) {
       navigate("cartDetails");
    } else {
      updateLoginModalState(true)
    }
  }
  
  const closeModal = () => { 
    updateLoginModalState(false)
  };

  return (
    <>
      <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar" >
        <div className="container">
          <Link to={"/"} className="navbar-brand">
            e-Cart <span>.</span>
          </Link>
          <div className="navbar-Search">
            <AutocompleteSearch />
          </div>
 

          <div className="collapse navbar-collapse" id="navbarsFurni">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              {topNav.map((item, index) => {
                return (
                  <li
                    className={item.link === currentPath ? "active" : ""}
                    key={index}
                  >
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
                  <img src={user} />
                </Link>
              </li> 
              <li>
                <button onClick={checkingCart} className="nav-link">
                  <img src={cart} />
                  {prevItems && prevItems.length > 0 && (
                    <span className="cart-count">{prevItems.length}</span>
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Modal isOpen={showLoginModal} onClose={closeModal}>
        <h5>Modal Content</h5>
        <p>This is some content inside the modal.</p> 
      </Modal>
    </>
  );
};

export default AppHeader;
