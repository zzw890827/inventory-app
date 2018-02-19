import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {InventoryAppComponent} from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';


@NgModule({
  declarations: [
    InventoryAppComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [InventoryAppComponent]
})
export class AppModule { }
