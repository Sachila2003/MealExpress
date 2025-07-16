import React from 'react';
import styles from './Card.module.css';
import { motion } from 'framer-motion';

const Card = ({title, description, imageUrl, onClick}) => {
    return (
        <motion.div 
        className={styles.card}
        onClick={onClick}
        whileHover={{ scale: 1.03, y: -5}}
        transition={{type: "spring", stiffness: 300}}
        >
            <div className={styles.imageContainer}>
                <img src={imageUrl} alt={title}  className={styles.cardImage}/>
            </div>
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDescription}>{description}</p>
            </div>
        </motion.div>
    );
};

export default Card;

