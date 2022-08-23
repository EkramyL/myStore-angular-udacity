import { Injectable } from '@angular/core';
import { find } from 'rxjs';
import { CartItem } from '../model/cart-item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: CartItem[] = [];
  constructor() {}
  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  addCartItem(cartItem: CartItem): CartItem[] {
    let i = this.cartItems.findIndex(
      (item) => item.productId === cartItem.productId
    );
    if (i === -1) {
      this.cartItems.push(cartItem);
    } else {
      this.cartItems[i].quantity += cartItem.quantity;
    }
    return this.cartItems;
  }
}
