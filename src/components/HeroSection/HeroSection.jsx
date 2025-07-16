import React, { useState, useEffect } from 'react';
import styles from './HeroSection.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg',
  'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg', 
  'https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg'
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => 
        (prevIndex + 1) % images.length 
      );
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className={styles.hero}>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex} 
          className={styles.backgroundImage}
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.5, ease: 'easeOut' } }}
          exit={{ opacity: 0, transition: { duration: 1.5, ease: 'easeIn' } }}
        />
      </AnimatePresence>

      <div className={styles.overlay}></div>
      <div className={`${styles.content} container`}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          <h1 className={styles.title}>
            Order Your Crave. <br /> We Deliver The Flavor.
          </h1>
          <p className={styles.subtitle}>
            Experience the best food from top-rated local restaurants, delivered right to your door.
          </p>
          <button className={styles.ctaButton}>
            EXPLORE RESTAURANTS
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;