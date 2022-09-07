import { Component, OnInit } from '@angular/core';
import { ICartItem, ICart } from '../models/theCart';
import { FetchService } from '../services/fetch.service';
import { OrdersService } from '../services/orders.service';
// import { IProduct } from '../models/product';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
// ======================================================
export class HomeComponent implements OnInit {
  // public const all: any
  products: any
  // flagZeroAmount: boolean
  myCart!: ICart;
  // ==========================================================================
  constructor(private service1: FetchService,
    private service2: OrdersService) { }
  // ==========================================================================
  ngOnInit() {
    this.service1.getProducts()
      .subscribe((response: any) => {
        this.products = response
        console.log("products = ", response);
      });

    this.myCart = this.service2.getCart()
    // console.log("Items I got from orders service, to the home page = ", res);
    // this.myCart = res;
    // })
  }
  //===============================================================================
  // ==========================================================================
  incItem(p: any) {
    // console.log("added to cart , product = ", p)
    // this.flagZero = false;
    this.service2.addToCart(p);
    // setTimeout(() => {
    this.myCart = this.service2.getCart();
    // }, 500)
  }
  // ==========================================================================
  decItem(p: any) {
    // console.log("deleted, product = ", p)
    this.service2.decreaseFromCart(p);
    // setTimeout(() => {
    this.myCart = this.service2.getCart();
    // }, 500)
  }
  // ==========================================================================
}

