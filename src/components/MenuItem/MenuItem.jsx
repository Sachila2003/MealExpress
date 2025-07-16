import React, { useState } from 'react';
import styles from './MenuItem.module.css';

import { createFoodItem } from '../../patterns/FoodFactory.js';
import shoppingCart from '../../patterns/singletonCart.js'; 

const MenuItem = ({ item }) => {
  const [selectedToppings, setSelectedToppings] = useState({});

  const handleCheckboxChange = (toppingName) => {
    setSelectedToppings(prevState => ({
      ...prevState,
      [toppingName]: !prevState[toppingName]
    }));
  };

  const handleAddToCart = () => {
    let foodItem = createFoodItem(item.type, item.name, item.description, item.price);
    
    if (item.availableToppings) {
      item.availableToppings.forEach(topping => {
        if (selectedToppings[topping.name]) {
          const DecoratorClass = topping.decorator;
          if (DecoratorClass) { 
            foodItem = new DecoratorClass(foodItem);
          }
        }
      });
    }

    shoppingCart.addItem(foodItem);
    alert(`"${foodItem.getDescription()}" was added to your cart!`);
    
    console.log('--- Current Cart State ---');
    console.log('Items:', shoppingCart.getItems().map(i => i.getDescription())); 
    console.log('Total Price:', shoppingCart.getTotal());
    console.log('--------------------------');
  };

  return (
    <div className={styles.menuItem}>
      <div className={styles.itemDetails}>
        <h3 className={styles.itemName}>{item.name}</h3>
        <p className={styles.itemDescription}>{item.description}</p>
        
        {item.availableToppings && item.availableToppings.length > 0 && (
          <div className={styles.toppings}>
            <h4>Add-ons:</h4>
            {item.availableToppings.map(topping => (
              <label key={topping.name} className={styles.checkboxLabel}>
                <input 
                  type="checkbox"
                  checked={!!selectedToppings[topping.name]}
                  onChange={() => handleCheckboxChange(topping.name)}
                />
                {topping.name} (+Rs. {topping.price})
              </label>
            ))}
          </div>
        )}
      </div>

      <div className={styles.itemActions}>
        <span className={styles.itemPrice}>Rs. {item.price}</span>
        <button className={styles.addButton} onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MenuItem;