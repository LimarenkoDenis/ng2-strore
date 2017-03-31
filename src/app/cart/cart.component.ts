import { CartService } from './../shared/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  public sum: number = 0;
  public cart: Product[] = [];

  public constructor(
    private _cartService: CartService
  ) { }

  public ngOnInit(): void {
    this.getCartItems();
  }

  public getCartItems(): void {
    this._cartService.getItems.subscribe((cart: Product[]) => {
      this.cart = cart;
      this.calculateTotal(this.cart);
    });
  }

  public removeItem(product: Product): void {
    this._cartService.Item = { product, action: 'remove'};
  }

  public reduceItem(product: Product): void {
    this._cartService.Item = { product, action: 'reduce'};
  }

  public increaseItem(product: Product): void {
    this._cartService.Item = { product, action: 'increase'};
  }

  private calculateTotal(cart: Product[]): void {
    this.sum = 0;
    cart.forEach((item: Product) => {
     this.sum += item.amount * item.price;
    });
  }
}
