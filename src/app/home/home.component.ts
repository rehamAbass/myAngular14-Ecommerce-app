import { Component, OnInit } from '@angular/core';
import { ICartItem, ICart } from '../models/theCart';
import { FetchService } from '../services/fetch.service';
import { OrdersService } from '../services/orders.service';
import Swal from 'sweetalert2';
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
  constructor(private serviceFetch: FetchService,
    private serviceOrder: OrdersService) { }
  // ==========================================================================
  ngOnInit() {
    this.serviceFetch.getProducts()
      .subscribe((response: any) => {
        this.products = response
        console.log("products = ", response);
      });

    this.myCart = this.serviceOrder.getCart()
    // console.log("Items I got from orders service, to the home page = ", res);
    // this.myCart = res;
    // })
  }
  //===============================================================================
  // ==========================================================================
  incItem(p: any) {
    // console.log("added to cart , product = ", p)
    // this.flagZero = false;
    this.serviceOrder.addToCart(p);
    // setTimeout(() => {
    this.myCart = this.serviceOrder.getCart();
    // }, 500)
      Swal.fire({
          html: '<pre>' +'Thank you ,added to cart 🥰 '  + '</pre>',
          icon: "success",
          iconColor:'#00ff00',
//           title: "Thank you ,added to cart 🥰 ",
           showConfirmButton: false,
                 backdrop: `rgba(0,100,0,0.3)`,
        })
  }
  // ==========================================================================
  decItem(p: any) {
    // console.log("deleted, product = ", p)
    if(this.serviceOrder.decreaseFromCart(p) === true){
    // setTimeout(() => {
    this.myCart = this.serviceOrder.getCart();
    // }, 500)
      Swal.fire({
          html: '<pre>' +'removed from cart 😔 '  + '</pre>',
          icon: "success",
          iconColor:'#ff0000',
//           title: "removed from cart 😔 ",
//           text: "",
           showConfirmButton: false,
             backdrop: `rgba(100,0,0,0.3)`,
        })
    }
    else{
    
      Swal.fire({
         html: '<pre>' +'Can`t remove this item, Not in Cart '  + '</pre>',
        icon:"warning",
        iconColor :"red",
//         title:"Sorry can not remove this item , It is not in the cart at all",
        showConfirmButton: true,
      })
    }
  }
  // ==========================================================================
  pass(p:any){

    console.log("in home , function pass , p = ", p);
  }
  //================================================================
}

