import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProductService {
  // api
  public products: Product[] = [
    {
      id: 0,
      title: 'Cola',
      description: 'fwrkgfhergk',
      price: 12,
      amount: 1,
      type: 'drink'
    },
    {
      id: 1,
      title: 'Pepsi',
      description: 'fwrkgfhergk',
      price: 10,
      amount: 1,
      type: 'drink'
    },
    {
      id: 3,
      title: 'Big Mac',
      description: 'fwrkgfhergk',
      price: 22,
      amount: 1,
      type: 'sandwich'
    },
    {
      id: 4,
      title: 'Big Tasty',
      description: 'fwrkgfhergk',
      price: 45,
      amount: 1,
      type: 'sandwich'
    },
    {
      id: 5,
      title: 'pie',
      description: 'fwrkgfhergk',
      price: 10,
      amount: 1,
      type: 'dessert'
    },
    {
      id: 6,
      title: 'chocolate',
      description: 'fwrkgfhergk',
      price: 22,
      amount: 1,
      type: 'dessert'
    },
    {
      id: 7,
      title: 'ice cream',
      description: 'fwrkgfhergk',
      price: 45,
      amount: 1,
      type: 'dessert'
    }
  ];
  public tab: string[] = ['drink', 'sandwich', 'dessert', 'drink', 'sandwich', 'dessert', 'drink', 'sandwich', 'dessert'];
  public constructor() { }

  public getProducts(): Observable<Product[]> {
    return Observable.of(this.products);
  }
  public getTab(): Observable<string[]> {
    return Observable.of(this.tab);
  }
}
