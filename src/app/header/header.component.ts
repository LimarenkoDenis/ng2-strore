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
  public amount: number = 0;

  public constructor(
    private _store: Store<any>,
    private _menuActions: MenuActions
  ) {
  }

  public ngOnInit(): void {
    this.menuActive$.subscribe((menuActive: boolean) => this.menuActive = menuActive);
    this._store.select('cart').subscribe((product: Product[]) => this.amount = product.length);
  }

  public toogleMenu(): void {
    this._store.dispatch(this._menuActions.toggleManu());
  }
}
