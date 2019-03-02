import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../interfaces/product.interface';

@Injectable({
    providedIn: "root"
})
export class CartService {
    private _cartQuantity = new BehaviorSubject<number>(null);
    private _carts = new BehaviorSubject<IProduct[]>(Array());

    constructor() { }

    increment(product: IProduct) {
        let q = this._cartQuantity.getValue();

        const carts = this._carts.getValue();
        const index = carts.findIndex(x => x._id === product._id);
        if (index !== -1) {
            carts[index].Quantity++;
        } else {
            product.Quantity = 1;
            carts.push(product);
        }
        q++;
        this._cartQuantity.next(q);
        this._carts.next(carts);
    }

    decrement(product: IProduct) {
        let q = this._cartQuantity.getValue();

        const carts = this._carts.getValue();
        const index = carts.findIndex(x => x._id === product._id);
        if (index !== -1) {
            q--;
            if (carts[index].Quantity > 0) {
                carts[index].Quantity--;
            } else {
                carts.splice(index, 1);
            }
        }
        this._carts.next(carts);
        this._cartQuantity.next(q);
    }

    getCarts() {
        return this._carts.asObservable();
    }

    getCartQuantity() {
        return this._cartQuantity.asObservable();
    }
}