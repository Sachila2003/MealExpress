// src/patterns/SingletonCart.js

class ShoppingCart {
    static #instance;

    constructor() {
        if (ShoppingCart.#instance) {
            return ShoppingCart.#instance;
        }
        this.items = [];
        console.log("[Singleton] ShoppingCart instance created for the first time.");
        ShoppingCart.#instance = this;
    }

    addItem(item) {
        this.items.push(item);
        console.log(`[Cart] Added: ${item.getDescription()}`);
    }

    removeItem(index) {
        if (this.items[index]) {
            const removedItem = this.items.splice(index, 1);
            console.log(`[Cart] Removed: ${removedItem[0].getDescription()}`);
        }
    }

    getItems() {
        return this.items;
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.getPrice(), 0);
    }

    clearCart() {
        // Correct way to empty an array on a frozen object
        this.items.length = 0; 
        console.log("[Cart] Cart has been cleared.");
    }
}

const shoppingCartInstance = new ShoppingCart();
Object.freeze(shoppingCartInstance);
export default shoppingCartInstance;