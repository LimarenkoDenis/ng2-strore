import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public amount: number = 0;

  public constructor(
    private _store: Store<any>,
  ) {}

  public ngOnInit(): void {
    this._store.select('cart').subscribe((product: Product[]) => this.amount = product.length);
  }
}
