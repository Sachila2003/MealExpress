import ShoppingCart from "./SingletonCart";
import {OrderStatus, kitchenNotifier, userNotifier} from "./OrderObserver";

const PaymentSystem = {
    processPayment(amount) {
        console.log(`[PaymentSystem] Processing payment of Rs. ${amount}...`);
        return true;
    }
};

const InventorySystem = {
    updateStock(items){
        console.log(`[InventorySystem] Updating stock for ${items.length} items..`);
        return true;
    }
};

export class OrderFacade {
    placeOrder(finalTotal) {
        console.log("\--FACEDE: Starting order placement process ---");

        const items = ShoppingCart.getItems();
        const total = ShoppingCart.getTotal();

        if (items.length === 0) {
            console.log("Facade Error: Cannot place an order with an empty cart.");
            return false;
        }

        const paymentSuccessfull = PaymentSystem.processPayment(finalTotal);
        if (!paymentSuccessfull) {
            console.log("Facade Error: Payment failed. Order placement cancelled.");
            return false;
        }

        const stockUpdated = InventorySystem.updateStock(items);
        if (!stockUpdated) {
            console.log("Facade Error: Could not update inventory.");
            return false;
        }

        const orderId = `ORD-${Date.now()}`;
        const order = new OrderStatus(orderId);

        order.subscribe(userNotifier);
        order.subscribe(kitchenNotifier);

        order.updateStatus('Confirmed');

        ShoppingCart.clearCart();

        console.log("-- FACADE: orderplaced successfully! ---");
        return true;
        
    }
}