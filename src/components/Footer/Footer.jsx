import React from "react";
import styles from "./Footer.module.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { style } from "framer-motion/client";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.footerContainer} container`}>
                <div className={styles.footerColumn}>
                    <h3 className={styles.logo}>MealExpress</h3>
                    <p className={styles.aboutText}>Bringing your favorite local cuisines right to your doorstep. Fresh, fast, and reliable.</p>
                </div>
                <div className={styles.footerColumn}>
                    <h4 className={styles.columnTitle}>Quick Links</h4>
                    <ul className={styles.linkList}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Restaurants</a></li>
                        <li><a href="#">My Orders</a></li>
                        {/* <li><a href="#">About Us</a></li> */}
                    </ul>
                </div>
                <div className={styles.footerColumn}>
                    <h4 className={styles.columnTitle}>Follow Us</h4>
                    <p>Stay connected for the latest updates and offers.</p>
                    <div className={styles.socialIcons}>
                        <a href="#" aria-label="Facebook"><FaFacebook /></a>
                        <a href="#" aria-label="Instagram"><FaInstagram /></a>
                        <a href="#" aria-label="Twitter"><FaTwitter /></a>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>© {new Date().getFullYear()} MealExpress. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;