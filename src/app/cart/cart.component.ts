import { CartActions } from './../common/actions/cart';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  public sum: number = 0;
  public cart: Observable<Product[]>;

  public constructor(
    private _store: Store<any>,
    private _cartActions: CartActions,
  ) {
    this.cart = _store.select('cart');
  }

  public ngOnInit(): void {
    this._store.dispatch(this._cartActions.loadCartItems());
    this._store.select('cart').subscribe((cart: Product[]) => this.calculateTotal(cart));
  }

  public removeItem(product: Product): void {
    this._store.dispatch(this._cartActions.deleteItem(product));
  }

  public reduceItem(product: Product): void {
    this._store.dispatch(this._cartActions.reduceItem(product));
  }

  public increaseItem(product: Product): void {
    this._store.dispatch(this._cartActions.increaseItem(product));
  }

  private calculateTotal(cart: Product[]): void {
    this.sum = 0;
    cart.forEach((item: Product) => {
     this.sum += item.amount * item.price;
    });
  }
}