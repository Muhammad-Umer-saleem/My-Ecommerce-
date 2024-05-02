import React, { useState } from 'react';
import './Navbar.css';
import NavImg from '../assets/images/logo.svg';
import { Heart, ShoppingBag, User, Search } from 'lucide-react';
import { X } from 'lucide-react';

const Navbar = () => {
  const [isBoxOpen, setIsBoxOpen] = useState(false);

  const toggleBox = () => {
    setIsBoxOpen(!isBoxOpen);
  };

  return (
    <div id="root">
      <div className="header">
        <div className="logo">
          <img src={NavImg} alt="Company Logo" />
        </div>

        <div className="searchBar-container">
          <div className="searchBar">
            <input type="text" placeholder="Search for products" />
            <div className="search-icon">
              <Search />
            </div>
          </div>
        </div>

        <div className="menu-social-container">
          <i id="menu-icon" onClick={toggleBox}>
            {isBoxOpen ? <X size={30} /> : <i className="fas fa-bars"></i>}
          </i>
        </div>
      </div>

      {isBoxOpen && (
        <div className="backdrop" onClick={toggleBox}></div>
      )}

      <div className={`slide-in-box ${isBoxOpen ? 'open' : ''}`}>
        <div className="social-icons-with-names">
          <div className="icon-item">
            <Heart size={30} />
            <span>Favorites</span>
          </div>
          <div className="icon-item">
            <User size={30} />
            <span>Profile</span>
          </div>
          <div className="icon-item">
            <ShoppingBag size={30} />
            <span>Cart</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;