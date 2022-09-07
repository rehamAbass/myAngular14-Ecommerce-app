import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from './product/product.component';
import {HomeComponent} from './home/home.component';
import {CartComponent} from './cart/cart.component';

const routes: Routes = [
{ path:'', component:HomeComponent},


{ path:'product/:id' , component:ProductComponent},
// { path:'product/:id' , component:ProductComponent},

{ path:'cart', component:CartComponent},
{path:'**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
