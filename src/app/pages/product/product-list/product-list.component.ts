import { FilterService } from './../../../services/filter.service';
import { LoginService } from './../../../services/login.service';
import { ProductService } from './../../../services/product.service';
import { Product } from './../../../model/product-model';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public listProducts: Product[] = [];
  public showMore: number = 8;
  loading: boolean = true;
  constructor(
    private productService: ProductService,
    private loginService: LoginService,
    public filterService: FilterService) {
    this.loginService.verifyLogged();
  }

  ngOnInit(): void {
    this.loadList();
  }

  getList(): Product[] {
    if (this.filterService.text.length <= 3) {
      return this.listProducts;
    }
    let text = this.filterService.text;
    return this.listProducts.filter(function (str) { return str.title.includes(text); });
  }

  public loadList() {
    this.productService.getProductList().subscribe(res => {
      this.listProducts = res.games;
      this.setLoadingListProducts(false);
    });
  }

  increaseShowMore() {
    this.showMore = this.showMore + 8;
  }

  setLoadingListProducts(loading: boolean) {
    this.loading = loading;
  }

}
