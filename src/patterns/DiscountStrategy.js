//strategy pattern
//discout hdgnn use krnne

export function percentageDiscount(totalAmount){
    console.log("[Strategy] Applying 10% Percentage Discout");
    return totalAmount * 0.10;
}

export function flatAmountDiscount(totalAmount){
    if(totalAmount >= 5000) {
        console.log("[Strategy] Applying Rs. 500 Flat Discount");
        return 500;
    }
    console.log("[Strategy] Cart total is less than Rs. 5000. Flat discount not applied.");
    return 0;
}

export function seasonalDiscount(totalAmount){
    console.log("[Strategy] Applying 15% Seasonal Discount");
    return totalAmount * 0.15;
}

export class DiscountContext{
    constructor(){
        this.strategy = null;
    }

    setStrategy(strategyFunction){
        console.log("[Context] Strategy has been set.");
        this.strategy = strategyFunction;
    }

    calculateDiscount(totalAmount){
        if(this.strategy){
            return this.strategy(totalAmount);
        }
        console.log("[Context] No discount strategy is set.");
        return 0;
    }
}

export default DiscountContext;