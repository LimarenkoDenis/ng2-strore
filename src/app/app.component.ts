import { CartService } from './cart.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  public sum: number = 0;
  public details: FormGroup;

  public constructor(
    private _productService: ProductService,
    private _fb: FormBuilder,
    private _CartService: CartService
  ) {
    this.details = this._fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', [Validators.required]]
    });
  }

  public calculateTotal(cart: Product[]): void {
    cart.forEach((item: Product) => {
     this.sum = + item.amount * item.price;
    });
  }

  public createOrder(order: FormGroup): void {
    console.log(order.value);
  }
}
