import React from 'react';
import styles from './FeaturedRestaurants.module.css';
import { featuredRestaurants } from '../../data/restaurants';
import Card from '../Card/Card';

import { useNavigate } from 'react-router-dom';

const FeaturedRestaurants = () => {
  const navigate = useNavigate();

  const handleCardClick = (restaurantId) => {
    console.log(`Navigating to restaurant with id: ${restaurantId}`);
    navigate(`/restaurant/${restaurantId}`);
  };

  return (
    <section className={styles.featuredSection}>
      <div className="container">
        <div className={styles.titleWrapper}>
          <span className={styles.subtitle}>Find Your Favorite</span>
          <h2 className={styles.title}>Top Rated Restaurants</h2>
        </div>
        <div className={styles.grid}>
          {featuredRestaurants.map(restaurant => (
            <Card 
              key={restaurant.id}
              title={restaurant.name}
              description={restaurant.description}
              imageUrl={restaurant.imageUrl}
              onClick={() => handleCardClick(restaurant.id)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRestaurants;