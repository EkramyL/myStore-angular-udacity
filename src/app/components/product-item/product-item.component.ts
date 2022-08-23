import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/model/cart-item';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product = {
    id: 0,
    name: '',
    price: 0,
    url: '',
    description: '',
  };
  cartItem: CartItem = {
    productId: 0,
    name: '',
    image: '',
    quantity: 0,
    price: 0,
  };
  productQuantity: number = 1;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}
  addToCart(product: Product) {
    this.cartItem = {
      productId: product.id,
      name: product.name,
      image: product.url,
      quantity: this.productQuantity,
      price: product.price,
    };
    this.cartService.addCartItem(this.cartItem);
  }
}
