import { AngularFireAuth } from 'angularfire2/auth';
import { AuthActions } from './../common/actions/auth';
import { MenuActions } from './../common/actions/menu';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()
  public menuActive$: Observable<boolean>;

  public menuActive: boolean;
  public user: User;

  public amount: number = 0;

  public constructor(
    private _store: Store<any>,
    private _menuActions: MenuActions,
    private _authActions: AuthActions,
    private afAuth: AngularFireAuth,
  ) {
  }

  public ngOnInit(): void {
    this.afAuth.authState.subscribe((user: User) => {
      this.user = user;
    });
    this.menuActive$.subscribe((menuActive: boolean) => this.menuActive = menuActive);
    this._store.select('cart').subscribe((product: Product[]) => this.amount = product.length);
  }

  public toogleMenu(): void {
    this._store.dispatch(this._menuActions.toggleManu());
  }

  public logout(): void {
    this._store.dispatch(this._authActions.logout());
  }
}
