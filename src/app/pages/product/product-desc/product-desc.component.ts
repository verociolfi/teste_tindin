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
  constructor(
    private activeRoute: ActivatedRoute,
    private productService: ProductService,
    private router:Router) { }

  ngOnInit(): void {
    this.showProductDescription();
  }

  public showProductDescription() {
    this.activeRoute.queryParams.subscribe(res => {
      this.id = res['id'];
      this.productService.getProduct(this.id).subscribe(res => {
        console.log(res);
      });
    })
  }

  goTohome() {
    this.router.navigate(['home']);
  }

}
