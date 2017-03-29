import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/scan';
type ProductWithAction = { product: Product, action: 'add'|'remove'};

@Injectable()
export class CartService {

  private _cart$$: Subject<ProductWithAction> = new Subject();

  public constructor() { }

  public set Item(product: ProductWithAction) {
    this._cart$$.next(product);
  }

  public get getItems(): Observable<Product[]> {
    return this._cart$$.scan((acc: Product[], item: ProductWithAction) => {
      if (item.action === 'add') {
        if (acc.includes(item.product)) {
          const index: number = acc.indexOf(item.product);
          acc[index].amount++;
          return acc;
        }
        acc.push(item.product);
      }
      if (item.action === 'remove') {
          const index: number = acc.indexOf(item.product);
          acc.splice(index, 1);
      }
      return acc;
    }, []);
  }

}

