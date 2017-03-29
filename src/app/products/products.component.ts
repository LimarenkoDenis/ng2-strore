import { Component, EventEmitter, Input,  OnInit, Output  } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input()
  public tab: string[];

  @Input()
  public products: Product[];

  @Output()
  public add: EventEmitter<Product> = new EventEmitter<Product>();

  public constructor() { }

  public ngOnInit(): void {
  }


  public addProduct(product: Product): void {
    this.add.emit(product);
  }
}
