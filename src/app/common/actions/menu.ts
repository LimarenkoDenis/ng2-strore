import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class MenuActions {

  // tslint:disable-next-line
  public static TOGGLE_MENU: string = '[Menu] Toggle menu';
  public toggleManu(): Action {
    return {
      type: MenuActions.TOGGLE_MENU
    };
  }

  // tslint:disable-next-line
  public static CLOSE_MENU: string = '[Menu] Close menu';
  public closeMenu() {
    return {
      type: MenuActions.CLOSE_MENU,
    };
  }

}
