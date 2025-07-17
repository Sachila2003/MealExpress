import React, { createContext, useState, useContext } from 'react';

const OrderContext = createContext(null);

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
};

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const addOrder = (orderData) => {
    const newOrder = {
      id: `ORD-${Date.now()}`,
      items: orderData.items,
      total: orderData.total,
      status: 'Confirmed',
      placedAt: new Date()
    };
    setOrders(prevOrders => [newOrder, ...prevOrders]);
  };

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(prevOrders => 
      prevOrders.map(order => 
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  const value = { orders, addOrder, updateOrderStatus };

  return (
    <OrderContext.Provider value={value}>
      {children}
    </OrderContext.Provider>
  );
};