import { CartActions } from './../actions/cart';
import { Action, ActionReducer } from '@ngrx/store';

const initialState: Product[] = [];

export function cartReducer(products: Product[] = initialState, action: {type: string, payload: Product}): Product[] {
  switch (action.type) {
    case CartActions.LOAD_CART_ITEMS_SUCCESS: {
      return (action as any).payload;
    }

    case CartActions.GET_CART_ITEM_SUCCESS: {
      return (action as any).payload;
    }

    case CartActions.ADD_TO_CART: {
      const itemIndex: number = products.findIndex((product: Product) => product.id === (action as any).payload.id);
      if (itemIndex !== -1) {
        const updatedItem: Product = {...(action as any).payload, amount: products[itemIndex].amount + 1};
        products.splice(itemIndex, 1, updatedItem);
        return [...products];
      }
      return [...products, ...{...(action as any).payload, amount: 1}];
    }

    case CartActions.DELETE_ITEM: {
      const itemIndex: number = products.findIndex((product: Product) => product.id === (action as any).payload.id);
      products.splice(itemIndex, 1);
      return [...products];
    }

    case CartActions.REDUCE_ITEM: {
      const itemIndex: number = products.findIndex((product: Product) => product.id === (action as any).payload.id);
      if ((action as any).payload.amount === 0) {
        // products.splice(itemIndex, 1);
        return [...products];
      }
      const updatedItem: Product = {...(action as any).payload, amount: (action as any).payload.amount - 1};
      products.splice(itemIndex, 1, updatedItem);
      return [...products];
    }

    case CartActions.INCREASE_ITEM: {
      const itemIndex: number = products.findIndex((product: Product) => product.id === (action as any).payload.id);
      const updatedItem: Product = {...(action as any).payload, amount: (action as any).payload.amount + 1};
      products.splice(itemIndex, 1, updatedItem);
      return [...products];
    }

    default:
      return products;
  }
}
