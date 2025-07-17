import React from 'react';
import styles from './Navbar.module.css';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../context/CardContext';

import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {
  const { cartCount } = useCart();

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.navContainer} container`}>
        <ul className={styles.navLinks}>
          <li><NavLink to="/" className={({isActive}) => isActive ? styles.activeLink: ''}>Home</NavLink></li>
          <li><NavLink to="/restaurants" className={({isActive}) => isActive ? styles.activeLink: ''}>Restaurants</NavLink></li>
        </ul>

        <div className={styles.logo}>
          <NavLink to="/">MealExpress</NavLink>
        </div>

        <ul className={styles.navLinks}>
          <li><NavLink to="/my-orders" className={({isActive}) => isActive ? styles.activeLink: ''}>My Orders</NavLink></li>
          <li className={styles.cartIconWrapper}>
            <NavLink to="/checkout">
              <FaShoppingCart size={24} />
              {cartCount > 0 && (
                <span className={styles.cartBadge}>{cartCount}</span>
              )}
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.zigzagBorder}></div>
    </nav>
  );
};

export default Navbar;