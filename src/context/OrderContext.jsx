import React, {createContext, useState, useContext} from "react";

const OrderContect = createContext();

export const useOrders = () => {
    return useContext(OrderContect);
};

