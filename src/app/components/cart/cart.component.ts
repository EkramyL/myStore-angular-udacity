import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/model/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  totalPrice: number = 0;
  cartItems: CartItem[] = [
    // {
    //   productId: 2,
    //   name: 'headphone',
    //   image:
    //     'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    //   price: 99.9,
    //   quantity: 3,
    // },
    // {
    //   productId: 3,
    //   name: 'backpack',
    //   image:
    //     'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    //   price: 69.9,
    //   quantity: 2,
    // },
  ];

  constructor(private cartService: CartService) {
    this.totalPrice = this.getTotalPrice();
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.getTotalPrice();
  }
  getTotalPrice() {
    this.totalPrice = 0;
    this.cartItems.map((item) => {
      this.totalPrice += item.price * item.quantity;
    });
    return this.totalPrice;
  }
}
