import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProductService {

  public constructor(
    private _db: AngularFireDatabase
  ) { }

  public getProducts(): Observable<Product[]> {
    return this._db.list('/products')
    .catch(() => {
      // tslint:disable-next-line
      console.log(`Can't load produvts`);
      return Observable.of([]);
    });
  }

  public getProduct(id: string): Observable<Product> {
    return this._db.object(`/products/${id}`)
    .catch(() => {
      // tslint:disable-next-line
      console.log(`Can't load products`);
      return Observable.of([]);
    });
  }

  public addProduct(product: Product): Observable<Product> {
    return this._db.list(`/products`).push(product)
    .catch(() => {
      // tslint:disable-next-line
      console.log(`Can't add produvts`);
    });
  }
}
