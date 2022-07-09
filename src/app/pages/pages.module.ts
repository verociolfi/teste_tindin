import { ProductCreateComponent } from './product/product-create/product-create.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDescComponent } from './product/product-desc/product-desc.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    ProductComponent,
    ProductDescComponent,
    ProductCreateComponent,
    ProductListComponent],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule
  ],
  exports: [HomeComponent, LoginComponent, ProductComponent, ProductDescComponent,ProductListComponent],
})
export class PagesModule { }
