import { ActionReducerMap } from '@ngrx/store';

import { productReducer } from './product';
import { cartReducer } from './cart';
import { menuReducer } from './menu';
import { authReducer } from './auth';

// tslint:disable-next-line
export const reducers: ActionReducerMap<any> = {
  product: productReducer,
  cart: cartReducer,
  menu: menuReducer,
  auth: authReducer
};
