
import { Component, OnInit } from '@angular/core';
// import { FetchService } from './services/fetch.service';
import { OrdersService } from './services/orders.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
//---------------------------------------------
export class AppComponent implements OnInit {

  products: any;
  counter!: number;
  constructor(private service: OrdersService) {
    // this.counter = 0
  }
  //--------------------------------------------------
  ngOnInit() {
    this.counter = this.service.getCart().finalAmount;
  }
  //---------------------------------------------------
}