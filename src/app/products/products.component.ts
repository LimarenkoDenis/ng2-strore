import { NotificationService } from './../shared/services/notifications.service';
import { CartService } from './../shared/services/cart.service';
import { ProductService } from './../shared/services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  public products: Product[] = [];

  public constructor(
    private _productService: ProductService,
    private _cartService: CartService,
    private _notificationsService: NotificationService,
  ) {}

  public ngOnInit(): void {
    this.getProduct();
  }

  public getProduct(): void {
    this._productService.getProducts().subscribe((products: Product[]) => this.products = products);
  }

  public addProduct(product: Product): void {
    this._cartService.Item = {product, action: 'add' };
    this._notificationsService.successNotification();
  }
}
