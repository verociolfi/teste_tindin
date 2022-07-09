import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product-model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: any;
  constructor() { }

  ngOnInit(): void {
  }

}
