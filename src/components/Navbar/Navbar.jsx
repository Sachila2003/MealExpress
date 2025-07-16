import React from 'react';
import styles from './Navbar.module.css';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const cartItemCount = 0;

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.navContainer} container`}>
        <ul className={styles.navLinks}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Restaurants</a></li>
        </ul>

        <div className={styles.logo}>
          <a href="#">MealExpress</a>
        </div>

        <ul className={styles.navLinks}>
          <li><a href="#">My Orders</a></li>
          <li className={styles.cartIconWrapper}>
            <a href="#">
              <FaShoppingCart size={24} />
              {cartItemCount > 0 && (
                <span className={styles.cartBadge}>{cartItemCount}</span>
              )}
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.zigzagBorder}></div>
    </nav>
  );
};

export default Navbar;