import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { SearchLoggedComponent } from './search-logged/search-logged.component';
import { BannerComponent } from './banner/banner.component';



@NgModule({
  declarations: [FooterComponent, SearchComponent, BannerComponent, SearchLoggedComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [FooterComponent, SearchComponent, BannerComponent, SearchLoggedComponent],
})
export class SharedModule { }
