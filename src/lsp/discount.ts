export abstract class Discount {
    protected discount = 0;

    calculate(price: number): unknown { // Isso quebraria, pois em qualquer outro lugar que isot seria usado, seria necessario utilizar um typeguard 
        return price - price * this.discount;
    }
}

export class FiftyPercentDiscount extends Discount {
    protected readonly discount = 0.5;
}