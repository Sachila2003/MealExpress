class FoodProduct {
    constructor() {
        this.parts = [];
        this.price = 0;
    }

    add(part, price) {
        this.parts.push(part);
        this.price += price;
    }

    describe() {
        console.log(`Product consists of: ${this.parts.join(', ')}. Total: Rs. ${this.price}`);
    }
}

class FoodBuilder {
    constructor() {
        this.product = new FoodProduct();
    }

    setSize(size){
        return this;
    }
    addTopping(topping){
        return this;
    }
    build() {
        return this.product;
    }
}

export class PizzaBuilder extends FoodBuilder{
    constructor(){
        super();
        this.product.add("Pizza Base",1000);
    }

    setCrust(crust) {
        this.product.add(`Crust: ${crust}`,200);
        return this;
    }

    setSize(size){
        this.product.add(`Size: ${size}`,300);
        return this;
    }

    addTopping(topping){
        this.product.add(`Topping: ${topping}`,150);
        return this;
    }
}

export class BurgerBuilder extends FoodBuilder{
    constructor(){
        super();
        this.product.add("Burger Buns",500);
    }

    addPatty(type){
        this.product.add(`Patty: ${type}`,400)
        return this;
    }

    addCheese(){
        this.product.add("Cheese Slice", 100);
        return this;
    }

    addTopping(topping){
        this.product.add(`Topping: ${topping}`,50);
        return this;
    }
}

export class KottuBuilder extends FoodBuilder{
    constructor(){
        super();
        this.product.add("Plain Kottu Roti", 600);
    }

    addMeat(meatType) {
        this.product.add(`Meat: ${meatType}`,300);
        return this;
    }

    makeSpicy(level) {
        this.product.add(`Spicy Level: ${level}`,100);
        return this;
    }

    addExtraCheese() {
        this.product.add("Extra Cheese", 200);
        return this;
    }
}

export class FoodDirector {
    constructMeatLoversPizza(builder) {
        console.log("[Director] Instructing builder to make a Meat Lovers Pizza...");
        builder
            .setSize("Large")
            .setCrust("Thick")
            .addTopping("Pepperoni")
            .addTopping("Sausage");
    }

    constructCheesyChickenKottu(builder) {
        console.log("[Director] Instructing builder to make a Cheesy Chicken Kottu...");
        builder
            .addMeat("Chicken")
            .makeSpicy("Medium")
            .addExtraCheese();
    }
}

export default FoodDirector;