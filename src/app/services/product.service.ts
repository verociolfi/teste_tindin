import { ListGamesModel } from './../model/list-games-model';
import { Product } from './../model/product-model';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public productSelected?: Product;
  url: string = 'https://api-labs.tindin.com.br';
  constructor(private http: HttpClient) { }
  public getProductList(): Observable<ListGamesModel> {
    return this.http.get<ListGamesModel>(this.url + '/games');
  }
  public getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(this.url + '/games/' + id);
  }

}
