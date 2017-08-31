import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class CartActions {
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

}
