import { MenuActions } from './common/actions/menu';
import { Component, HostListener, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilsService } from './shared/services/utils.service';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public details: FormGroup;
  public menuActive$: Observable<boolean>;

  public constructor(
    private _utilsService: UtilsService,
    public snackBar: MdSnackBar,
    private _fb: FormBuilder,
    private _store: Store<any>,
    private _menuActions: MenuActions,
  ) {
    this.menuActive$ = _store.select('menu');
    this.details = this._fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', [Validators.required]]
    });
  }

  public ngOnInit(): void {

  }

  public toogleMenu(): void {
    this._store.dispatch(this._menuActions.closeMenu());
  }

  public createOrder(order: FormGroup): void {
    console.log(order.value);
  }

  private _showMessageBar(msg: string): void {
    this.snackBar.open(msg, '', {
      duration: 2000,
    });
  }

}
