import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/model/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  totalPrice: number = 0;
  cartItems: CartItem[] = [];
  fullName: string = '';
  address: string = '';
  creditCardNumber: string = '';

  constructor(private cartService: CartService, private router: Router) {
    this.totalPrice = this.getTotalPrice();
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.getTotalPrice();
  }
  getTotalPrice() {
    this.totalPrice = 0;
    this.cartItems.map((item) => {
      if (item.quantity === 0) {
        this.removeFromCart(item);
      }
      this.totalPrice += item.price * item.quantity;
    });
    return this.totalPrice;
  }
  removeFromCart(theItem: CartItem) {
    this.cartService.removeCartItem(theItem);
    this.cartItems = this.cartService.getCartItems();
    this.getTotalPrice();
    alert(`${theItem.name} is going to be removed`);
  }
  onSubmit(name: string, price: number) {
    this.cartService.setCartInfo(name, price);
    this.router.navigate(['confirmation']);
  }
}
