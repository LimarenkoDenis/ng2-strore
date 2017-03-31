import { CartService } from './../cart.service';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  public products: Product[] = [];
  public tab: string[] = [];

  public constructor(
    private _productService: ProductService,
    private _cartService: CartService
  ) {}

  public ngOnInit(): void {
    this.getProduct();
  }

  public getProduct(): void {
    this._productService.getTab().subscribe((tab: string[]) => this.tab = tab);
    this._productService.getProducts().subscribe((products: Product[]) => this.products = products);
  }

  public addProduct(product: Product): void {
    this._cartService.Item = {product, action: 'add' };
  }

}
