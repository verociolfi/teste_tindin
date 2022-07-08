import { Product } from './../../model/product-model';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product?: Product;

  constructor(
    private router:Router) { }

  ngOnInit(): void {

    console.log(this.product);
  }

  getImageUrl(): string {
    let url = "assets/img/game-img.jpg";
    if (this.product && this.product.photos.length > 0) {
      url = this.product.photos[0].url;
    }
    return url;
  }

  public goToDetails() {
    this.router.navigate(['description'], {queryParams: { id: this.product?._id}});
  }

}
