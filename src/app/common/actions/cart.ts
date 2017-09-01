import { MdSnackBar } from '@angular/material';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class CartActions {
  public constructor (private _mdSnackBar: MdSnackBar) {}

  // tslint:disable-next-line
  public static LOAD_CART_ITEMS: string = '[Cart] Load Cart Items';
  public loadCartItems(): Action {
    return {
      type: CartActions.LOAD_CART_ITEMS
    };
  }

  // tslint:disable-next-line
  public static LOAD_CART_ITEMS_SUCCESS = '[Cart] Load Cart Items Success';
  public loadCartItemsSuccess(products: Product[]) {
    return {
      type: CartActions.LOAD_CART_ITEMS_SUCCESS,
      payload: products
    };
  }

  // tslint:disable-next-line
  public static GET_CART_ITEM = '[Cart] Load Cart Item';
  public getCartItem(id: string) {
    return {
      type: CartActions.GET_CART_ITEM,
      payload: id
    };
  }

  // tslint:disable-next-line
  public static GET_CART_ITEM_SUCCESS = '[Cart] Load Cart Item Success';
  public getCartItemSuccess(product: Product) {
    return {
      type: CartActions.GET_CART_ITEM_SUCCESS,
      payload: product
    };
  }

  // tslint:disable-next-line
  public static ADD_TO_CART = '[Cart] Add Product To Cart';
  public addToCart(product: Product) {
    this._mdSnackBar.open('+1', 'x', {duration: 2000});
    return {
      type: CartActions.ADD_TO_CART,
      payload: product
    };
  }

  // tslint:disable-next-line
  public static DELETE_ITEM = '[Cart] Delete Item';
  public deleteItem(product: Product) {
    this._mdSnackBar.open('Item was deleted from cart', 'x', {duration: 2000});
    return {
      type: CartActions.DELETE_ITEM,
      payload: product
    };
  }

  // tslint:disable-next-line
  public static REDUCE_ITEM = '[Cart] Reduce Item';
  public reduceItem(product: Product) {
    return {
      type: CartActions.REDUCE_ITEM,
      payload: product
    };
  }

  // tslint:disable-next-line
  public static INCREASE_ITEM = '[Cart] Increase Item';
  public increaseItem(product: Product) {
    return {
      type: CartActions.INCREASE_ITEM,
      payload: product
    };
  }
}
