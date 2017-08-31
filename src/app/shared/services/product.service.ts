import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { DOMAIN } from '../../config';

@Injectable()
export class ProductService {

  public constructor(
    private _http: Http
  ) { }

  public getProducts(): Observable<Product[]> {
    return this._http.get(`http://localhost:3000/products`).map((res: Response) => res.json());
  }

  public getProduct(id: string): Observable<Product> {
    return this.getProducts().map((products: Product[]) => {
      return products[id];
    });
  }

  public addProduct(product: Product): Observable<Product> {
    // return Observable.of(product);
    // const headers = new Headers({
    //   'Content-Type': 'application/json'
    // });
    const productJson: string = JSON.stringify(product);
    return this._http.post(`http://localhost:3000/products`, product)
    .map((res: Response) => {
      console.log(res);

      return res.json()
    });
  }
}
