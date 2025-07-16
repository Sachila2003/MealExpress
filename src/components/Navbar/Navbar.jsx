import React from 'react';
import styles from './Navbar.module.css';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../context/CardContext';

const Navbar = () => {
  const { cartCount } = useCart();

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
              {cartCount > 0 && (
                <span className={styles.cartBadge}>{cartCount}</span>
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