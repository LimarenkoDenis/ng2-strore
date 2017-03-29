import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

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
    });
  }

  public removeItem(product: Product) {
    this._cartService.addItem = {product, action: 'remove'};
  }
}
