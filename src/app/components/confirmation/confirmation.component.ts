import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  cartDetail = {
    name: '',
    totalPrice: 0,
  };
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartDetail = this.cartService.getCartInfo();
  }
}
