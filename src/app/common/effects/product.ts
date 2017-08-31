import { ProductService } from './../../shared/services/product.service';
import { ProductActions } from './../actions/product';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class ProductEffects {

  @Effect()
  public loadProducts$: Observable<Action> = this.actions$
    .ofType(ProductActions.LOAD_PRODUCTS)
    .switchMap(() => this._productService.getProducts())
    .map((products: Product[]) => this._productActions.loadProductsSuccess(products));

  @Effect()
  public getProduct$: Observable<Action> = this.actions$
    .ofType(ProductActions.GET_PRODUCT)
    .map((action: Action) => (action as any).payload)
    .switchMap((id: string) => this._productService.getProduct(id))
    .map((product: Product) => this._productActions.getProductSuccess(product));

  public constructor(
    private actions$: Actions,
    private _productActions: ProductActions,
    private _productService: ProductService
  ) {}
}
