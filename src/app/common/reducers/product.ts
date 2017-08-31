import { ProductActions } from './../actions/product';
import { Action, ActionReducer } from '@ngrx/store';

const initialState: Product[] = [];

export function productReducer(state: Product[] = initialState, action: Action): Product[] {
  console.log(action.type);

  switch (action.type) {

    case ProductActions.LOAD_PRODUCTS_SUCCESS: {
      return (action as any).payload;
    }

    case ProductActions.GET_PRODUCT_SUCCESS: {
      return (action as any).payload;
    }

    default:
      return state;
  }
}
