import { Injectable } from '@angular/core';
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
    this.cartItems.push(cartItem);
    return this.cartItems;
  }
}
