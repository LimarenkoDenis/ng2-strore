import { Action } from '@ngrx/store';

export const LOAD_CART_ITEMS: string = '[Cart] Load Cart Items';
export const LOAD_CART_ITEMS_SUCCESS: string = '[Cart] Load Cart Items Success';
export const GET_CART_ITEM: string = '[Cart] Load Cart Item';
export const GET_CART_ITEM_SUCCESS: string = '[Cart] Load Cart Item Success';
export const ADD_TO_CART: string = '[Cart] Add Product To Cart';
export const DELETE_ITEM: string = '[Cart] Delete Item';
export const REDUCE_ITEM: string = '[Cart] Reduce Item';
export const INCREASE_ITEM: string = '[Cart] Increase Item';

export class LoadCartItems implements Action {
  public readonly type: string = LOAD_CART_ITEMS;
  public constructor(public payload?: Product[]) { }
}

// tslint:disable-next-line
export class LoadCartItemsSuccess implements Action {
  public readonly type: string = LOAD_CART_ITEMS_SUCCESS;
  public constructor(public payload: Product[]) { }
}

// tslint:disable-next-line
export class GetCartItem implements Action {
  public readonly type: string = GET_CART_ITEM;
  public constructor(public payload: string) { }
}

// tslint:disable-next-line
export class GetCartItemSuccess implements Action {
  public readonly type: string = GET_CART_ITEM_SUCCESS;
  public constructor(public payload: Product) { }
}

// tslint:disable-next-line
export class AddToCart implements Action {
  public readonly type: string = ADD_TO_CART;
  public constructor(public payload: Product) { }
}

// tslint:disable-next-line
export class DeleteItem implements Action {
  public readonly type: string = DELETE_ITEM;
  public constructor(public payload: Product) { }
}

// tslint:disable-next-line
export class ReduceItem implements Action {
  public readonly type: string = REDUCE_ITEM;
  public constructor(public payload: Product) { }
}

// tslint:disable-next-line
export class IncreaseItem implements Action {
  public readonly type: string = INCREASE_ITEM;
  public constructor(public payload: Product) { }
}

export type Actions
  = LoadCartItems
  | LoadCartItemsSuccess
  | GetCartItem
  | GetCartItemSuccess
  | AddToCart
  | DeleteItem
  | ReduceItem
  | IncreaseItem;
