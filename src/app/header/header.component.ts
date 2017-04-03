import { CartService } from './../shared/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public amount: number = 0;

  public constructor(
    private _cartService: CartService
  ) {}

  public ngOnInit(): void {
    this._cartService.getItems.subscribe((cart: Product[]) => {
      console.log(cart);
      this.amount = cart.length;
    });
  }
}
