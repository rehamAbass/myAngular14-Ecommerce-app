import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchService } from '../services/fetch.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
////////////////////////////////
export class ProductComponent {
  id: number = 2
  p: any = null
  list: any
  //=============================================================================
  tryMe() {
     if (this.p === null) return false;
    return true;
  }
  //==================================================================
  ngOnInit() {
    this.tryMe();
  }
  //==================================================================
  constructor(private route: ActivatedRoute, private service: FetchService) {
    this.service.getProducts().subscribe((response: any) => {
      this.list = response;
    });
    //---------------
     this.route.params.subscribe(params => {
      this.id = params['id'];
      this.p = this.list[(this.id - 1)]
    })
  }
  //============================================================================
}