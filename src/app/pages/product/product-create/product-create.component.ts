import { Router } from '@angular/router';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product-model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  constructor(private productService: ProductService,
    private router:Router) { }

  ngOnInit(): void {
  }

  public create() {
    console.log("passei aqui")
    this.productService.save().subscribe(res => {
      console.log(res);
    });
  }
  goBack(){
    this.router.navigate(['home']);

  }

}
