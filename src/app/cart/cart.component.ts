import { Component, OnInit } from '@angular/core';
import { ICart, Cart, Item, ICartItem } from '../models/theCart';
import { OrdersService } from '../services/orders.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss',
    '../app.component.scss'
  ]
})
//================================================================
export class CartComponent implements OnInit {
  // items: ICartItem[];
  // finalAmount: number;
  // finalPrice: number;
  myCart!: ICart;
  //-----------------
  constructor(private service: OrdersService) {
    // this.items = [];
    // this.finalAmount = 0;
    // this.finalPrice = 0;
  }
  //-------------------
  ngOnInit(): void {
    this.myCart = this.service.getCart()
    // console.log("in Cart compo, myCard  from service = ", res);
    // this.myCart = res;
    // })
  }
  // ==========================================================================
  increase(it: Item) {
    this.service.addToCart(it);
    // setTimeout(() => {
    this.myCart = this.service.getCart();
    // this.items = this.myCart.items;
    // this.finalAmount = this.myCart.finalAmount;
    // this.finalPrice = this.myCart.finalPrice;
    // }, 300)
  }
  // ==========================================================================
  decrease(it: Item) {
    this.service.decreaseFromCart(it);
    // setTimeout(() => {
    this.myCart = this.service.getCart();
    // }, 300)
  }
  // ==========================================================================
}
//======================================================================

