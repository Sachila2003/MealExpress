class FoodItemDecorator {
    constructor(foodItem) {
        this.wrappedItem = foodItem;
    }
    getName() {
        return this.wrappedItem.getName();
    }
    getDescription() {
        return this.wrappedItem.getDescription();
    }
    getPrice() {
        return this.wrappedItem.getPrice();
    }
    get type() { 
        return this.wrappedItem.type;
    }
}

export class WithExtraCheese extends FoodItemDecorator {
    constructor(foodItem) {
        super(foodItem);
    }
    getPrice() {
        return this.wrappedItem.getPrice() + 300;
    }
    getDescription() {
        return `${this.wrappedItem.getDescription()}, with Extra Cheese`;
    }
}

export class WithSpicy extends FoodItemDecorator {
    constructor(foodItem) {
        super(foodItem);
    }
    getPrice() {
        return this.wrappedItem.getPrice() + 150;
    }
    getDescription() {
        return `${this.wrappedItem.getDescription()}, made extra spicy`;
    }
}

export class WithChicken extends FoodItemDecorator {
    constructor(foodItem) {
        const allowedTypes = ["Pizza", "Kottu", "Rice"];
        if (!allowedTypes.includes(foodItem.type)) {
            throw new Error(`Chicken cannot be added to a ${foodItem.type}.`);
        }
        super(foodItem);
    }
    getPrice() {
        return this.wrappedItem.getPrice() + 400;
    }
    getDescription() {
        return `${this.wrappedItem.getDescription()}, with Chicken`;
    }
}

export class WithDoublePatty extends FoodItemDecorator {
    constructor(foodItem) {
        super(foodItem);
    }
    getPrice() {
        return this.wrappedItem.getPrice() + 200;
    }
    getDescription() {
        return `${this.wrappedItem.getDescription()}, with Double Patty`;
    }
}

export default FoodItemDecorator;