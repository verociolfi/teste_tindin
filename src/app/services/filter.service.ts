import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  text: string = "";
  constructor() { }

  getFilterText(): string {
    return this.text;
  }
}
