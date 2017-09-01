import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { MdSnackBar } from '@angular/material';

// TODO: invastigate where i can send notification

@Injectable()
export class ProductActions {
  public constructor(private _mdSnackBar: MdSnackBar) {}

  // tslint:disable-next-line
  public static LOAD_PRODUCTS: string = '[Product] Load Products';
  public loadProducts(): Action {
    return {
      type: ProductActions.LOAD_PRODUCTS
    };
  }

  // tslint:disable-next-line
  public static LOAD_PRODUCTS_SUCCESS = '[Product] Load Products Success';
  public loadProductsSuccess(products: Product[]) {
    this._mdSnackBar.open('Products were loaded', '', {duration: 3000});
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

  // tslint:disable-next-line
  public static ADD_PRODUCT = '[Product] Add Product';
  public addProduct(product: Product) {
    return {
      type: ProductActions.ADD_PRODUCT,
      payload: product
    };
  }

  // tslint:disable-next-line
  public static ADD_PRODUCT_SUCCESS = '[Product] Add Product Success';
  public addProductSuccess(product: Product) {
    this._mdSnackBar.open('Products were loaded', '', {duration: 3000});
    return {
      type: ProductActions.ADD_PRODUCT_SUCCESS,
      payload: product
    };
  }
}
