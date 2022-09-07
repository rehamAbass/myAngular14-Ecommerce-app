
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
  import { AppRoutingModule } from './app-routing.module';

  // import {RouterModule} from '@angular/router'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
 import { MatIconModule } from '@angular/material/icon';
import { CartModule } from './cart/cart.module';
import { ProductModule } from './product/product.module';
import { HomeModule } from './home/home.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // RouterModule,
    CartModule,
    ProductModule,
    HomeModule,
    MatIconModule, 
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
///////////////////////////
