import React from "react";
import { useOrders } from "../../context/OrderContext";
import OrderCard from "../OrderCard/OrderCard";
import styles from "./MyOrdersPage.module.css";
import { div, p } from "framer-motion/client";

const MyOrdersPage = () => {
    const { orders } = useOrders();

    return (
        <div className={`${styles.MyOrdersPage} container`}>
            <h1>My Orders History</h1>
            {orders.length === 0 ? (
                <p>You have not placed any orders yet.</p>
            ) : (
                <div className={styles.ordersList}>
                    {orders.map(order => (
                        <OrderCard key={order.id} order={order} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyOrdersPage;