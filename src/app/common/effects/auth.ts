import { Router } from '@angular/router';
import { LoginService } from './../../shared/services/login.service';
import { AuthActions } from './../actions/auth';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthEffects {

  @Effect()
  public login$: Observable<Action> = this.actions$
    .ofType(AuthActions.LOGIN)
    .map((action: any) => action.payload)
    .switchMap((data: User) => {
      return this._loginService.login(data)
      .map((user: User) => this._authActions.loginSuccess(user))
      .do(() => this._router.navigate(['/']))
      .catch((err: Error) => {
        // tslint:disable-next-line
        console.log(err);
        return Observable.of(this._authActions.loginFail(err));
      });
    });

    @Effect()
    public logout$: Observable<Action> = this.actions$
      .ofType(AuthActions.LOGOUT)
      .map((action: any) => action.payload)
      .switchMap(() => {
        return this._loginService.logout()
        .map((user: any) => this._authActions.logoutSuccess())
        .do(() => this._router.navigate(['/']))
        .catch((err: Error) => {
          // tslint:disable-next-line
          console.log(err);
          return Observable.of(this._authActions.logoutFail());
        });
      });

  public constructor(
    private actions$: Actions,
    private _authActions: AuthActions,
    private _loginService: LoginService,
    private _router: Router
  ) {}
}

