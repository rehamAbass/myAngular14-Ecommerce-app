import { Component, OnInit } from '@angular/core';
import { ICart, Cart, Item, ICartItem } from '../models/theCart';
import { OrdersService } from '../services/orders.service';
import Swal from 'sweetalert2';

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
    Swal.fire({
          html: '<pre>' +'Thank you ,added to cart 🥰 '  + '</pre>',
          icon: "success",
          iconColor:'#00ffff',
//                  '#33ff00',
          //title: "Thank you ,added to cart 🥰 ",
          //text: "",
           showConfirmButton: false,
                 backdrop: `rgba(0,100,0,0.3)`,
        })
  }
  // ==========================================================================
  decrease(it: Item) {
    this.service.decreaseFromCart(it);
    // setTimeout(() => {
    this.myCart = this.service.getCart();
    // }, 300)
           Swal.fire({
              html: '<pre>' +'removed from cart 😔 '  + '</pre>',
          icon: "success",
          iconColor:'#ff6000',
//              '#ff0077',
//           title: "removed from cart 😔 ",
//           text: "",
           showConfirmButton: false,
             backdrop: `rgba(100,0,0,0.3)`,
        })
  }

  removeFromCart(it: Item) {
    console.log(" Hey from remove from cart , prod = ", it.title)
    this.service.deleteProduct(it);
    this.myCart = this.service.getCart();
    Swal.fire({
        html: '<pre>' +'removed from cart 😔 '  + '</pre>',
          icon: "success",
          iconColor:'rgb(0,0,0)',
//              '#ff0077',
//           title: "removed from cart 😔 ",
//           text: "",
           showConfirmButton: false,
             backdrop: `rgba(0,0,0,0.3)`,
        })
  }
  // ==========================================================================
}
//======================================================================

