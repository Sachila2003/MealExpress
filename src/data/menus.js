import { 
    WithExtraCheese, 
    WithSpicy, 
    WithChicken, 
    WithDoublePatty 
} from '../patterns/FoodDecorator';

export const menus = {
    1: { // Pizza Haven
        restaurantName: 'Pizza Haven',
        items: [
            {
                id: 'p1', type: 'Pizza', name: 'Margherita', 
                description: 'Classic cheese and tomato', price: 1800,
                availableToppings: [
                    { name: 'Extra Cheese', price: 300, decorator: WithExtraCheese },
                    { name: 'Make it Spicy', price: 150, decorator: WithSpicy },
                ]
            },
            {
                id: 'p2', type: 'Pizza', name: 'Pepperoni', 
                description: 'Loaded with pepperoni slices', price: 2200,
                availableToppings: [
                    { name: 'Extra Cheese', price: 300, decorator: WithExtraCheese },
                    { name: 'Add Chicken', price: 400, decorator: WithChicken },
                ]
            },
        ]
    },
    2: { // Burger Paradise
        restaurantName: 'Burger Paradise',
        items: [
            {
                id: 'b1', type: 'Burger', name: 'Classic Beef', 
                description: 'Juicy beef patty with special sauce', price: 1500,
                availableToppings: [
                    { name: 'Add Double Patty', price: 500, decorator: WithDoublePatty },
                    { name: 'Add Extra Cheese', price: 150, decorator: WithExtraCheese },
                ]
            },
            {
                id: 'b2', type: 'Burger', name: 'Veggie', 
                description: 'Loaded with vegetables', price: 1200,
                availableToppings: [
                    { name: 'Add Extra Cheese', price: 150, decorator: WithExtraCheese },
                ]
            },
            {
                id: 'b3', type: 'Burger', name: 'Chicken', 
                description: 'Loaded with chicken', price: 1300,
                availableToppings: [
                    { name: 'Add Extra Cheese', price: 150, decorator: WithExtraCheese },
                ]
            },
            {
                id: 'b4', type: 'Burger', name: 'Cheese', 
                description: 'Loaded with cheese', price: 1400,
                availableToppings: [
                    { name: 'Add Extra Cheese', price: 150, decorator: WithExtraCheese },
                ]
            },
        ]
    },
    3: { // Kottu Kingdom
        restaurantName: 'Kottu Kingdom',
        items: [
            {
                id: 'k1', type: 'Kottu', name: 'Classic Kottu', 
                description: 'Classic chicken and vegetable kottu', price: 950,
                availableToppings: [
                    { name: 'Make it Spicy', price: 150, decorator: WithSpicy },
                    { name: 'Add Extra Cheese', price: 200, decorator: WithExtraCheese },
                ]
            },
            {
                id: 'k2', type: 'Kottu', name: 'Mixed Kottu', 
                description: 'Classic chicken, Seafood and vegetable kottu', price: 1400,
                availableToppings: [
                    { name: 'Make it Spicy', price: 150, decorator: WithSpicy },
                    { name: 'Add Extra Chicken', price: 400, decorator: WithChicken },
                ]
            },
        ]
    },
    4: { // The Rice Bowl
        restaurantName: 'The Rice Bowl',
        items: [
            {
                id: 'r1', type: 'Rice', name: 'Chicken Fried Rice', 
                description: 'Wok-tossed rice with chicken and veggies', price: 1000,
                availableToppings: [
                    { name: 'Add Extra Cheese', price: 150, decorator: WithExtraCheese },
                    { name: 'Add Extra Chicken', price: 400, decorator: WithChicken },
                ]
            },
            {
                id: 'r2', type: 'Rice', name: 'Vegetable Fried Rice', 
                description: 'Wok-tossed rice with vegetables', price: 600,
                availableToppings: [
                    { name: 'Make it Spicy', price: 150, decorator: WithSpicy },
                ]
            },
            {
                id: 'r3', type: 'Rice', name: 'Mixed Fried Rice', 
                description: 'Wok-tossed rice with chicken and veggies', price: 1000,
                availableToppings: [
                    { name: 'Make it Spicy', price: 150, decorator: WithSpicy },
                    { name: 'Add Extra Chicken', price: 400, decorator: WithChicken },
                ]
            },
        ]
    },
};