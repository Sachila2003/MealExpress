import React, { useEffect } from 'react';
import { useOrders } from '../../context/OrderContext';
import styles from './OrderCard.module.css';
import { div, li } from 'framer-motion/client';

const STATUS_FLOW = ['Confirmed', 'Cooking', 'Out for Delivery', 'Delivered'];

const OrderCard = ({ order }) => {
    const { updateOrderStatus } = useOrders();

    useEffect(() => {
        if (order.status !== 'Delivered') {
            const timer = setTimeout(() => {
                const currentIndex = STATUS_FLOW.indexOf(order.status);
                const nextStatus = STATUS_FLOW[currentIndex + 1];
                if (nextStatus) {
                    updateOrderStatus(order.id, nextStatus);
                }
            }, 7000);
            return () => clearTimeout(timer);
        }
    }, [order.status, order.id, updateOrderStatus]);

    const formattedDate = new Date(order.placedAt).toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });

    return (
        <div className={styles.OrderCard}>
            <div className={styles.header}>
                <h4>Order ID: {order.id}</h4>
                <p className={styles.date}>{formattedDate}</p>
                <span className={`${styles.status}
                ${styles[order.status.toLowerCase().replace(' ', '')]}`}>{order.status}
                </span>
            </div>
            <div className={styles.body}>
                <p><storng>Ttal:</storng> Rs. {order.total.toFixed(2)}</p>
                <p><storng>Item:</storng> {order.items.length}</p>
                <ul>
                    {order.items.map((item, index) => (
                        <li key={index}>{item.getDescription()}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default OrderCard;
