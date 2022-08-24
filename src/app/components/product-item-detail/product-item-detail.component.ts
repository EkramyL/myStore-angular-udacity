import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/model/cart-item';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  product: Product = {
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
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'));
    this.product = this.productService.getProduct(id);
  }

  addToCart(product: Product) {
    this.cartItem = {
      productId: product.id,
      name: product.name,
      image: product.url,
      quantity: this.productQuantity,
      price: product.price,
    };
    this.cartService.addCartItem(this.cartItem);
    alert(`${this.product.name} is added to your cart`);
  }
}
