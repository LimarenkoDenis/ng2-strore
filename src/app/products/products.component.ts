import * as CartActions from './../common/actions/cart';
import * as ProductActions from './../common/actions/product';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  public products: Observable<Product[]>;

  public constructor(
    private _store: Store<any>
  ) {
    this.products = _store.select('product');
  }

  public ngOnInit(): void {
    this._store.dispatch(new ProductActions.LoadProducts());
  }

  public addProduct(product: Product): void {
    this._store.dispatch(new CartActions.AddToCart(product));
  }

}
