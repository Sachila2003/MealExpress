import React from 'react';
import { useParams } from 'react-router-dom';
import { menus } from '../../data/menus';
import styles from './MenuPage.module.css';
import MenuItem from '../MenuItem/MenuItem';

const MenuPage = () => {
  const { id } = useParams();
  const menuData = menus[id];

  if (!menuData) {
    return (
      <div className="container" style={{padding: '5rem 0', textAlign: 'center'}}>
        <h2>Oops! Restaurant not found.</h2>
        <p>Please check the URL or go back to the homepage.</p>
      </div>
    );
  }

  return (
    <div className={`${styles.menuPage} container`}>
      <h1 className={styles.restaurantTitle}>{menuData.restaurantName}</h1>
      <div className={styles.menuGrid}>
        {menuData.items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;