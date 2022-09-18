import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import products from '../home/home.component';
import { FetchService } from '../services/fetch.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
////////////////////////////////
export class ProductComponent {
  id: any
  p: any
  list: any
  // flaglist: boolean
  // flagid: boolean
  flag: boolean
  //========================================================================================================
  ngOnInit() {
    // this.id = this.getId();
    // const theList = this.getList();
    // this.list = theList;
    // const pp = this.getProd();
    // this.p = pp;

    const myPromise = new Promise(() => {

      this.getId();
      this.getList();
      setTimeout(() => {
        console.log("success , list = ", this.list)
      }, 100);
      setTimeout(
        () => { this.getProd() }, 200);
      setTimeout(() => {
        this.flag = true;
      }, 300);
    })
  }
  //================================================================
  getList() {
    this.service.getProducts().subscribe((response: any) => {
      // console.log("in getList res = ", response);
      this.list = response.map((x: any) => x);
    });
    // return this.list;
  }
  //===================================================================
  getId() {
    let t = 90
    this.route.params.subscribe(params => {
      t = params['id'];
      // console.log('params[id] = ', t);
    })
    if (t !== 90) { this.id = t; }
    this.id = t;
    // return t;
  }
  //====================================================================
  getProd() {
    var m = this.list[(this.id - 1)]
    console.log(" p = ", m);
    // return m;
    this.p = m;
  }
  //==================================================================
  constructor(private route: ActivatedRoute, private service: FetchService) {
    this.id = 90;
    this.list = [this.p];
    // this.flaglist = false
    // this.flagid = false
    this.flag = false
  }
  //============================================================================       
}

// import { Component, OnInit, Input } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { FetchService } from '../services/fetch.service';

// @Component({
//   selector: 'app-product',
//   templateUrl: './product.component.html',
//   styleUrls: ['./product.component.scss']
// })
// ////////////////////////////////
// export class ProductComponent {
//   id: number = 2
//   p: any = null
//   list: any
//   //=============================================================================
//   tryMe() {
//      if (this.p === null) return false;
//     return true;
//   }
//   //==================================================================
//   ngOnInit() {
//     this.tryMe();
//   }
//   //==================================================================
//   constructor(private route: ActivatedRoute, private service: FetchService) {
//     this.service.getProducts().subscribe((response: any) => {
//       this.list = response;
//     });
//     //---------------
//      this.route.params.subscribe(params => {
//       this.id = params['id'];
//       this.p = this.list[(this.id - 1)]
//     })
//   }
//   //============================================================================
// }
