import React, { useState } from 'react';
import './Navbar.css';
import NavImg from '../assets/images/logo.svg';
import { Heart, ShoppingBag, User, Search, X, Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="navbar">
      <div className="header-wrapper">
        <div className="header">
          <div className="logo">
            <img src={NavImg} alt="Company Logo" />
          </div>

          <div className="searchBar-container">
            <div className="searchBar">
              <input type="text" placeholder="Search for products" />
              <div className="search-icon">
                <Search size={20} />
              </div>
            </div>
          </div>

          <div className="menu-container" onClick={toggleMenu}>
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </div>

          <div className="social-icons">
            <Heart size={30} />
            <ShoppingBag size={30} />
            <User size={30} />
          </div>
        </div>
      </div>

      {isMenuOpen && <div className="backdrop" onClick={toggleMenu} />}

      <div className={`centered-box ${isMenuOpen ? 'open' : ''}`}>
        <div className="social-icons-with-names">
          <div className="icon-item" onClick={toggleMenu}>
            <Heart size={30} />
            <span>Favorites</span>
          </div>
          <div class="icon-item" onClick={toggleMenu}>
            <ShoppingBag size={30} />
            <span>Cart</span>
          </div>
          <div className="icon-item" onClick={toggleMenu}>
            <User size={30} />
            <span>Profile</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;