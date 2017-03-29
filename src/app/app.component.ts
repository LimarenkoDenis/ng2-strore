import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public sum: number = 0;
  public details: FormGroup;
  public products: Product[];
  public tab: string[];
  public cart: Product[] = [];

  public constructor(
    private _productService: ProductService,
    private _fb: FormBuilder
  ) {
    this.details = this._fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', [Validators.required]]
    });
  }

  public ngOnInit(): void {
    this.getProduct();
  }

  public getProduct(): void {
    this._productService.getProducts().subscribe((products: Product[]) => this.products = products);
    this._productService.getTab().subscribe((tab: string[]) => this.tab = tab);
  }

  public addProduct(product: Product): void {
    if (this.cart.includes(product)) {
      const index: number = this.cart.indexOf(product);
      this.cart[index].amount++;
      this.calculateTotal(this.cart);
      return;
    }
    this.cart.push(product);
    this.calculateTotal(this.cart);
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
