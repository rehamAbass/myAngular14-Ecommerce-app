
import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
// import { FetchService } from './services/fetch.service';
import { OrdersService } from './services/orders.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
//---------------------------------------------
export class AppComponent implements OnInit, AfterViewInit {
  products: any;
  counter!: number;
  @ViewChild('numberProd', { static: false }) divCounter!: ElementRef;
  //=====================================================================================


  constructor(private service: OrdersService, private myrender: Renderer2) {
    // this.counter = 0
  }
  //--------------------------------------------------
  ngOnInit() {
    this.counter = this.service.getCart().finalAmount;


    // this.myrender.setValue('numberProd', JSON.stringify(this.counter))
  }
  //---------------------------------------------------
  updateCounter() {
    this.counter = this.service.getAmount();
    return true;
  }
  ngAfterViewInit() {
    // console.log(" Hey I am  in - ng After View Init");
  }
  //===================================================================================
}