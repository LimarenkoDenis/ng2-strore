import { MenuActions } from './../actions/menu';
import { Action } from '@ngrx/store';

export function menuReducer(state: boolean = true, action: Action): boolean {
  switch (action.type) {
    case MenuActions.TOGGLE_MENU: {
      return !state;
    }

    case MenuActions.CLOSE_MENU: {
      return false;
    }

    default: {
      return false;
    }
  }
}
