import { CartService } from './../cart.service';
import { ProductService } from './../product.service';
import { Component, EventEmitter, Input,  OnInit, Output  } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  public products: Product[];
  public tab: string[];

  public constructor(
    private _productService: ProductService,
    private _cartService: CartService
  ) {

  }
  public ngOnInit(): void {
    this.getProduct();
  }

  public getProduct(): void {
    this._productService.getProducts().subscribe((products: Product[]) => this.products = products);
    this._productService.getTab().subscribe((tab: string[]) => this.tab = tab);
  }

  public addProduct(product: Product): void {
    this._cartService.Item = {product, action: 'add' };
  }

}
