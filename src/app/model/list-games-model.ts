import { Product } from './product-model';
export class ListGamesModel {
  games: Product[];
  totalSize: number;
  constructor(games: Product[], totalSize: number) {
    this.games = games;
    this.totalSize = totalSize;
  }
}
