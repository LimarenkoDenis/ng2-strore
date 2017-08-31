import { ProductActions } from './../common/actions/product';
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
    private _store: Store<any>,
    private _productActions: ProductActions,
  ) {
    this.products = _store.select('product');
  }

  public ngOnInit(): void {
    this._store.dispatch(this._productActions.loadProducts());
  }

  // public getProduct(): void {
  //   this._productService.getProducts().subscribe((products: Product[]) => this.products = products);
  // }

  // public addProduct(product: Product): void {
  //   this._cartService.Item = {product, action: 'add' };
  // }

}
