import * as CartActions from './../common/actions/cart';
import { Store } from '@ngrx/store';
import { ProductService } from './../shared/services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public product: Product;

  public constructor(
    private route: ActivatedRoute,
    private _productService: ProductService,
    private _store: Store<any>,
  ) { }

  public ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this._productService.getProduct(params['id']))
      .subscribe(product => {
        this.product = product;
      });
  }

  public addProduct(product: Product): void {
    this._store.dispatch(new CartActions.AddToCart(product));
  }
}
