import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/scan';
import { UtilsService } from './utils.service';
type ProductWithAction = { product: Product, action: 'add'|'remove'|'increase'|'reduce'};

@Injectable()
export class CartService {

  private _cart$$: Subject<ProductWithAction> = new Subject();

  public constructor(
    private _utilsService: UtilsService
  ) { }

  public set Item(product: ProductWithAction) {
    this._cart$$.next(product);
  }

  public get getItems(): Observable<Product[]> {
    return this._cart$$.scan((acc: Product[], item: ProductWithAction, index: number) => {
      if (item.action === 'add') {
        if (acc.includes(item.product)) {
          const index: number = acc.indexOf(item.product);
          acc[index].amount++;
          this._utilsService.pushMessage(`+1`);
          return acc;
        }
        acc.push(item.product);
        this._utilsService.pushMessage(`Added to cart`);
      }
      if (item.action === 'remove') {
          const index: number = acc.indexOf(item.product);
          acc.splice(index, 1);
          this._utilsService.pushMessage('Removed from Cart');
      }
      if (item.action === 'increase') {
          const index: number = acc.indexOf(item.product);
          acc[index].amount++;
          this._utilsService.pushMessage(`+1`);
      }
      if (item.action === 'reduce') {
          const index: number = acc.indexOf(item.product);
          if (acc[index].amount === 0) {
            acc.splice(index, 1);
            this._utilsService.pushMessage('Removed from Cart');
            return acc;
          }
          acc[index].amount--;
          this._utilsService.pushMessage(`-1`);
      }
      return acc;
    }, []);
  }

}
