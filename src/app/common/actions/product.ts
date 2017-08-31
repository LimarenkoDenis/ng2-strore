import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class ProductActions {
  public static LOAD_PRODUCTS: string = '[Product] Load Products';
  public loadProducts(): Action {
    return {
      type: ProductActions.LOAD_PRODUCTS
    };
  }

  // tslint:disable-next-line
  public static LOAD_PRODUCTS_SUCCESS = '[Product] Load Products Success';
  public loadProductsSuccess(products: Product[]) {
    return {
      type: ProductActions.LOAD_PRODUCTS_SUCCESS,
      payload: products
    };
  }

  // tslint:disable-next-line
  public static GET_PRODUCT = '[Product] Get Product';
  public getProduct(id: string) {
    return {
      type: ProductActions.GET_PRODUCT,
      payload: id
    };
  }

  // tslint:disable-next-line
  public static GET_PRODUCT_SUCCESS = '[Product] Get Product Success';
  public getProductSuccess(product: Product) {
    return {
      type: ProductActions.GET_PRODUCT_SUCCESS,
      payload: product
    };
  }

}
