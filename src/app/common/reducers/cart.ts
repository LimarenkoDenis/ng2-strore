import { CartActions } from './../actions/cart';
import { Action, ActionReducer } from '@ngrx/store';

const initialState: Product[] = [
  {
    "id": 0,
    "title": "Cola",
    "description": "fwrkgfhergk",
    "photo": "http://thejizn.com/wp-content/uploads/2016/06/coca-cola-stash-can-12-oz-1_1.jpg",
    "price": 12,
    "amount": 1,
    "type": "drink"
  },
  {
    "id": 1,
    "title": "Pepsi",
    "description": "fwrkgfhergk",
    "photo": "http://thejizn.com/wp-content/uploads/2016/06/coca-cola-stash-can-12-oz-1_1.jpg",
    "price": 10,
    "amount": 1,
    "type": "drink"
  },
  {
    "id": 3,
    "title": "Big Mac",
    "description": "fwrkgfhergk",
    "photo": "http://thejizn.com/wp-content/uploads/2016/06/coca-cola-stash-can-12-oz-1_1.jpg",
    "price": 22,
    "amount": 1,
    "type": "sandwich"
  }
];

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
        const updatedItem: Product = {...(action as any).payload, amount: (action as any).payload.amount + 1};
        products.splice(itemIndex, 1, updatedItem);
        return [...products];
      }
      return [...products, ...(action as any).payload];
    }

    case CartActions.DELETE_ITEM: {
      const itemIndex: number = products.findIndex((product: Product) => product.id === (action as any).payload.id);
      products.splice(itemIndex, 1);
      return [...products];
    }

    case CartActions.REDUCE_ITEM: {
      const itemIndex: number = products.findIndex((product: Product) => product.id === (action as any).payload.id);
      if ((action as any).payload.amount === 0) {
        products.splice(itemIndex, 1);
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
