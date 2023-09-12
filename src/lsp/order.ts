import { Persistance } from './persistence';
import { Messaging } from './messaging';
import { ShoppingCard } from "./shopping-card";

export class Order {
    private _orderStatus: 'open' | 'closed' = 'open';

    constructor(private readonly cart: ShoppingCard, private readonly messaging: Messaging, private readonly persistance: Persistance) {}

    get orderStatus(): 'open' | 'closed' {
        return this._orderStatus;
    }

    checkout(): void {
        if (this.cart.isEmpty()) {
            console.log('Your shopping card is empty');
            return;
        }
        this._orderStatus = 'closed';
        this.messaging.sendMessage('Your order has been received');
        this.persistance.saveOrder();
        this.cart.clear();
    }
}