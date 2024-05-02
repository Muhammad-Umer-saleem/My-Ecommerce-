import React from 'react';
import './Navbar.css';
import NavImg from '../assets/images/logo.svg';
import SearchBarIcon from '../assets/images/bx-search.svg';
import ContactIcon from '../assets/images/bxs-contact.svg';
import HeartIcon from '../assets/images/bx-heart.svg';
import ShoppingIcon from '../assets/images/bx-shopping-bag.svg';

const Navbar = () => {
  return (
    <div id="root">
      <div className="header">
        <div className="logo">
          <img src={NavImg} alt="Company Logo" />
        </div>

         <div className="searchBar-container">
        <div className="searchBar">
          <input type="text" placeholder="Enter your product's name" />
          <div class="search-icon">
            <img src={SearchBarIcon} alt="Search Icon" />
          </div>
        </div>
      </div>

        <div className="menu-social-container">
          <i id="menu-icon" className="fas fa-bars"></i>
          <div className="Social-icons">
            <img src={ContactIcon} alt="Contact" />
            <img src={HeartIcon} alt="Heart" />
            <img src={ShoppingIcon} alt="Shopping" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
