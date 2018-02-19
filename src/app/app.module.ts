import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {InventoryAppComponent} from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductRowComponent } from './product-row/product-row.component';


@NgModule({
  declarations: [
    InventoryAppComponent,
    ProductsListComponent,
    ProductRowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [InventoryAppComponent]
})
export class AppModule { }
