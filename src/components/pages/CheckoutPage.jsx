import React, { useState, useMemo } from 'react';
import { useCart } from '../../context/CardContext';
import { useOrders } from '../../context/OrderContext';
import styles from './CheckoutPage.module.css';
import { FaTrashAlt, FaTags, FaPaperPlane } from 'react-icons/fa';

//import strategy and facade ptterns
import { DiscountContext, percentageDiscount, flatAmountDiscount, seasonalDiscount } from '../../patterns/DiscountStrategy.js';
import { OrderFacade } from '../../patterns/Facade.js';
import { div, style } from 'framer-motion/client';

//simple map to link proco codes
const promoCodeStategies = {
    'SAVE10': percentageDiscount,
    'FLAT500': flatAmountDiscount,
    'SEASONAL': seasonalDiscount,
};

const CheckoutPage = () => {
    const { cartItems, cartTotal, removeItemFromCart, cartCount, clearCart } = useCart();
    const { addOrder } = useOrders();
    //promo code input and calculate descount
    const [promocode, setPromocode] = useState('');
    const [discount, setDiscount] = useState(0);
    

    //final total

    const finalTotal = useMemo(() => cartTotal - discount, [cartTotal, discount]);

    //handle applying the promo code
    const handleApplyPromoCode = () => {
        const strategy = promoCodeStategies[promocode.toUpperCase()];

        if (strategy) {
            const discountCalculator = new DiscountContext();
            discountCalculator.setStrategy(strategy);
            const calculateDiscount = discountCalculator.calculateDiscount(cartTotal);
            setDiscount(calculateDiscount);
            alert('Promo code applied successfully!');
        } else {
            alert('Invalid promo code!');
            setDiscount(0);
        }
    };

    //handle order place
    const handlePlaceOrder = () => {
        const orderFacade = new OrderFacade();
        const success = orderFacade.placeOrder(finalTotal);

        if (success) {
            addOrder({
                items: cartItems,
                total: finalTotal,
                status: 'Confirmed',
                placedAt: new Date()
            });
            alert('Your order has been placed successfully!');
            clearCart();
        } else {
            alert('There was an error placing your order. Please try again.');
        }
    };

    if (cartCount === 0) {
        return (
            <div className={`${styles.CheckoutPage} container ${styles.emptyCart}`}>
                <h2>Your Cart is Empty</h2>
            </div>
        );
    }

    return (
        <div className={`${styles.CheckoutPage} container`}>
            <h1 className={styles.pageTitle}>Your Shopping cart</h1>
            <div className={styles.cartGrid}>
                <div className={styles.cartItems}>
                    {cartItems.map((item, index) => (
                        <div key={index} className={styles.cartItem}>
                            <div className={styles.itemInfo}>
                                <p className={styles.itemName}>{item.getDescription()}</p>
                                <p className={styles.itemPrice}>Rs. {item.getPrice().toFixed(2)}</p>
                            </div>
                            <button className={styles.removeButton}
                                onClick={() => removeItemFromCart(index)}
                                aria-label="Remove item"> <FaTrashAlt /></button>
                        </div>
                    ))}
                </div>
                {/* Order Summary Section with new promo code input */}
                <div className={styles.summary}>
                    <h2 className={styles.summaryTitle}>Order Summary</h2>

                    <div className={styles.promoSection}>
                        <input type="text"
                            placeholder="Enter Promo Code"
                            className={styles.promoInput}
                            value={promocode}
                            onChange={(e) => setPromocode(e.target.value)} />
                        <button className={styles.applyButton} onClick={handleApplyPromoCode}>
                            <FaTags style={{ marginRight: '8px' }} /> Apply</button>
                    </div>

                    <div className={styles.summaryLine}>
                        <span>Subtotal</span>
                        <span>Rs. {cartTotal.toFixed(2)}</span>
                    </div>
                    <div className={`${styles.summaryLine} ${styles.discountLine}`}>
                        <span>Discount</span>
                        <span>Rs. {discount.toFixed(2)}</span>
                    </div>
                    <div className={`${styles.summaryLine} ${styles.total}`}>
                        <span>Final Total</span>
                        <span>Rs. {finalTotal.toFixed(2)}</span>
                    </div>
                    <button
                        className={styles.placeOrderButton}
                        onClick={handlePlaceOrder}
                    >
                        <FaPaperPlane style={{ marginRight: '8px' }} />Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;