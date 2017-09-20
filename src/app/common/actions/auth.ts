import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class AuthActions {
  public constructor() {}

  // tslint:disable-next-line
  public static LOGIN: string = '[Login] Login ..';
  public login(user: User) {
    return {
      type: AuthActions.LOGIN,
      payload: user
    };
  }

  // tslint:disable-next-line
  public static LOGIN_SUCCESS = '[Login] login Success';
  public loginSuccess(user: User) {
    return {
      type: AuthActions.LOGIN_SUCCESS,
      payload: user
    };
  }

  // tslint:disable-next-line
  public static LOGIN_FAIL = '[Login] login Fail';
  public loginFail(err: Error) {
    return {
      type: AuthActions.LOGIN_FAIL,
      payload: err
    };
  }

  // tslint:disable-next-line
  public static LOGOUT = '[Logout] Logout ..';
  public logout() {
    return {
      type: AuthActions.LOGOUT,
    };
  }

  // tslint:disable-next-line
  public static LOGOUT_SUCCESS = '[Login] Logout Success';
  public logoutSuccess() {
    return {
      type: AuthActions.LOGOUT_SUCCESS,
    };
  }

  // tslint:disable-next-line
  public static LOGIOUT_FAIL = '[Login] Logout Fail';
  public logoutFail() {
    return {
      type: AuthActions.LOGIOUT_FAIL,
    };
  }

}
