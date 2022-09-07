import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {CartComponent}  from './cart.component';
  import {RouterModule} from '@angular/router'



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports:[
    CartComponent
  ]
})
export class CartModule { }
