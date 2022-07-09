
import { Product } from './../../model/product-model';
import { Component, OnInit, } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  public photoSelected: number = 0;
  public listPhotos: string[] = [];
  constructor(private productService: ProductService) {

  }


  ngOnInit(): void {
    this.getGamesBanner();
    console.log('é aqui o content', this.listPhotos)
  }

  getGamesBanner() {
    this.productService.getProductList().subscribe(res => {
      for (let i = 0; i < 3; i++) {
        this.listPhotos.push(res.games[i].photos[0].url);
      }
    })
  }

  getList(): string[] {
    return this.listPhotos;
  }

  calssActive(photo: number, style: string) {
    return photo === this.photoSelected ? style : "";
  }

  prevBannerPhoto() {
    this.photoSelected + 1 === this.listPhotos.length ? 0 : this.photoSelected += 1;
  }

  nextBannerPhoto() {
    this.photoSelected === 0 ? 0 : this.photoSelected -= 1;
  }


}
