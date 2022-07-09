import { Product } from './../../../model/product-model';
import { Game } from './../../../model/game';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-desc',
  templateUrl: './product-desc.component.html',
  styleUrls: ['./product-desc.component.css']
})
export class ProductDescComponent implements OnInit {
  private id: string = "";
  public product?: Product;
  public loading:boolean = false;

  constructor(
    private activeRoute: ActivatedRoute,
    private productService: ProductService,
    private router:Router) { }

  ngOnInit(): void {
    this.showProductDescription();
  }

  public showProductDescription() {
    this.loading = true;
    this.activeRoute.queryParams.subscribe(res => {
      this.id = res['id'];
      this.productService.getProduct(this.id).subscribe(product => {
        this.product = product.game;
        console.log(this.product);
        this.loading = false;
      });
    })
  }

  goTohome() {
    this.router.navigate(['home']);
  }



}
