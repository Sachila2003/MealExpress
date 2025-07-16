//observer pattern 

export class OrderStatus {
    constructor(orderId) {
        this.orderId = orderId;
        this.status = "pending";
        this.observers = [];
    }

    subscribe(observerFunction) {
        this.observers.push(observerFunction);
        console.log(` [Observer]A new observer Subscribed to order ${this.orderId}`);
    }

    unsubscribe(observerFunction) {
        this.observers = this.observers.filter(observer => observer !== observerFunction);
    }

    notify() {
        console.log(` [Observer]Notifying all observers about status change..`);
        this.observers.forEach(observer => observer(this.orderId, this.status));
    }

    updateStatus(newStatus) {
        this.status = newStatus;
        console.log(` [Observer]Order ${this.orderId} status updated to ${this.status}`);
        this.notify();
    }
}

export function userNotifier(orderId, status) {
    console.log(`>> USER NOTIFICATION: Order ${orderId} is now "${status}. Prepare the order!`);
}

export function kitchenNotifier(orderId, status) {
    console.log(`>> KITCHEN DASHBOARD: Order #${orderId} has been updated to "${status}". Please proceed accordingly.`);
}

export function deliveryDriverNotifier(orderId, status) {
    if (status === 'Ready for Pickup') {
        console.log(`>> DELIVERY DRIVER NOTIFICATION: Order ${orderId} is now "${status}. Pick it up!`);
    }
}

export default OrderStatus;