import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class ProductService {

  public constructor(
    private _http: Http
  ) { }

  public getProducts(): Observable<Product[]> {
    return this._http.get(`assets/products.json`).map((res: Response) => res.json());
  }

  public getProduct(id: number): Observable<Product> {
    return this.getProducts().map((products: Product[]) => {
      return products[id]
    })
  }
}
