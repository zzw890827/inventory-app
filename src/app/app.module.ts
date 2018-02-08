import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {InventoryAppComponent} from './app.component';


@NgModule({
  declarations: [
    InventoryAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [InventoryAppComponent]
})
export class AppModule { }
