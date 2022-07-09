import { Game } from './../model/game';
import { ListGamesModel } from './../model/list-games-model';
import { Product } from './../model/product-model';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public productSelected?: Product;
  public token: string = "";
  url: string = 'https://api-labs.tindin.com.br';
  constructor(private http: HttpClient) {

  }
  public getProductList(): Observable<ListGamesModel> {
    return this.http.get<ListGamesModel>(this.url + '/games');
  }
  public getProduct(id: string): Observable<Game> {
    return this.http.get<Game>(this.url + '/games/' + id);
  }
  public save(): Observable<Game> {
    return this.http.post<Game>(this.url + '/games', {
      "title": "God of war",
      "description": "Based in ancient history, the story follows the titular protagonist, Kratos, a Spartan warrior and later the God of War",
      "genres": ["Action", "Adventure"],
      "tags": ["GOTY", "AAA"],
      "platforms": [
          "PS3",
          "PS4",
          "PS5"
        ]
    });
  }
}
