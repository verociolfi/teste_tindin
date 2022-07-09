import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Product } from 'src/app/model/product-model';
import { Thumb, ThumbType } from 'src/app/model/thumb';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, OnChanges {

  public photoSelected: number = 0;
  @Input() product?: Product;
  listProducts: Thumb[] = [];
  constructor(private sanitizer: DomSanitizer) {

  }

  ngOnChanges(changes: SimpleChanges) {
    this.prepareList();
    console.log(this.listProducts);
  }

  ngOnInit(): void {

  }

  prepareList(): void {
    this.product?.photos.forEach(photo => {
      this.listProducts.push({ type: ThumbType.FOTO, url: photo.url,video:"" })
    });

    this.product?.videos.forEach(video => {
      let trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(video.url);
      this.listProducts.push({ type: ThumbType.VIDEO, url: "", video: trustedUrl })
    });
    console.log(this.listProducts)
  }

  calssActive(photo: number, style: string) {
    return photo === this.photoSelected ? style : "";
  }

  selectImage(photo: number) {
    this.photoSelected = photo;
  }

  prevBannerPhoto() {
    this.photoSelected + 1 === this.product?.photos?.length ? 0 : this.photoSelected += 1;
  }

  nextBannerPhoto() {
    this.photoSelected === 0 ? 0 : this.photoSelected -= 1;
  }
  isImage(item: Thumb): boolean {
    return item.type === ThumbType.FOTO;
  }
}
