import { CartActions } from './../actions/cart';
import { Action, ActionReducer } from '@ngrx/store';

const initialState: Product[] = [];

export function cartReducer(state: Product[] = initialState, action: Action): Product[] {
  switch (action.type) {
    case CartActions.LOAD_CART_ITEMS_SUCCESS: {
      return (action as any).payload;
    }

    case CartActions.GET_CART_ITEM_SUCCESS: {
      return (action as any).payload;
    }

    default:
      return state;
  }
}
