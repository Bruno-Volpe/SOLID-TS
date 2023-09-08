type Item = {
    name: string;
    price: number;
}

export class ShoppingCardLegacy {
    private readonly _itens: Item[] = [];
    private _orderStatus: 'open' | 'closed' = 'open';

    addItem(item: Item): void {
        this._itens.push(item);
    }

    removeItem(index: number): void {
        this._itens.splice(index, 1);
    }

    get itens(): Readonly<Item[]> {
        return this._itens;
    }

    get orderStatus(): 'open' | 'closed' {
        return this._orderStatus;
    }

    total(): number {
        return +this._itens.reduce((total, next) => total + next.price, 0).toFixed(2);
    }

    isEmpty(): boolean {
        return this._itens.length === 0;
    }

    sendMessage(msg: string): void {
        console.log('Message sent: ', msg);
    }

    saveOrder(): void {
        console.log('Order saved successfully');
    }

    clear(): void {
        console.log('Shopping card was cleaned');
    }

    checkout(): void {
        if (this.isEmpty()) {
            console.log('Your shopping card is empty');
            return;
        }
        this._orderStatus = 'closed';
        this.sendMessage('Your order has been received');
        this.saveOrder();
        this.clear();
    }
}