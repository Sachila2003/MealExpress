//use factory pattern
class FoodItem {
    constructor(name,description,price){
        this.name=name;
        this.description=description;
        this.price=price;
    }
    getName(){
        return this.name;
    }
    getDescription(){
        return this.description;
    }
    getPrice(){
        return this.price;
    }
}

class Pizza extends FoodItem{
    constructor(name,description,price){
        super(name,description,price);
        this.type = "Pizza";
    }
}

class Burger extends FoodItem{
    constructor(name,description,price){
        super(name,description,price);
        this.type = "Burger";
    }
}
 class Rice extends FoodItem{
    constructor(name,description,price){
        super(name,description,price);
        this.type = "Rice";
    }
}

class Kottu extends FoodItem{
    constructor(name,description,price){
        super(name,description,price);
        this.type = "Kottu";
    }
}

export function createFoodItem(type,name,description,price){
    switch(type){
        case "Pizza":
            return new Pizza(name,description,price);
        case "Burger":
            return new Burger(name,description,price);
        case "Rice":
            return new Rice(name,description,price);
        case "Kottu":
            return new Kottu(name,description,price);
        default:
            throw new Error(`Food type "${type}" is not recognized.`);
    }
}

export default createFoodItem;