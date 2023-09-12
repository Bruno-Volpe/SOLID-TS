export abstract class Discount {
    abstract calculate(price: number): number;
}

export class FiftyPercentDiscount extends Discount {
    public readonly discount = 0.5;

    calculate(price: number): number {
        return price - price * this.discount;
    }
}