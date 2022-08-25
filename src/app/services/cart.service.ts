import { Injectable } from '@angular/core';
import { find } from 'rxjs';
import { CartItem } from '../model/cart-item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: CartItem[] = [];
  cartDetail = {
    name: '',
    totalPrice: 0,
  };

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

  resetCartItems(): CartItem[] {
    this.cartItems = [];
    return this.cartItems;
  }

  removeCartItem(cartItem: CartItem): CartItem[] {
    // this.cartItems.filter((item) => item.productId !== cartItem.productId);
    // return this.cartItems;
    let i = this.cartItems.findIndex((p) => p.productId === cartItem.productId);
    if (i !== -1) {
      this.cartItems.splice(i, 1);
    }
    return this.cartItems;
  }

  setCartInfo(name: string, price: number) {
    this.cartDetail = {
      name: name,
      totalPrice: price,
    };
    return this.cartDetail;
  }

  getCartInfo() {
    return this.cartDetail;
  }
}
