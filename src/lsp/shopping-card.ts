import { Discount } from './discount';
import { Item } from './interfaces/card-itens'

export class ShoppingCard {
    private readonly _itens: Item[] = [];

    constructor(private readonly discount: Discount) {}

    addItem(item: Item): void {
        this._itens.push(item);
    }

    removeItem(index: number): void {
        this._itens.splice(index, 1);
    }

    get itens(): Readonly<Item[]> {
        return this._itens;
    }

    total(): number {
        return +this._itens.reduce((total, next) => total + next.price, 0).toFixed(2);
    }

    totalDiscont(): number {
        return this.discount.calculate(this.total());
    }

    isEmpty(): boolean {
        return this._itens.length === 0;
    }

    clear(): void {
        console.log('Shopping card was cleaned');
    }
}