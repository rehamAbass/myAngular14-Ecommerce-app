
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FetchService {
  public list: any
  private url = 'https://fakestoreapi.com/products';
  constructor(private httpClient: HttpClient) { }
  getProducts() {
    if (!this.list) {
      this.list = this.httpClient.get(this.url);
    }
    return this.list;
  }
}


// import { Injectable } from '@angular/core';
// import { map } from 'rxjs/operators';
// import { HttpClient } from '@angular/common/http';
// import 'rxjs/Rx';
// @Injectable({
//   providedIn: 'root'
// })
// export class FetchService {
//   public list:any
//    private url = 'https://fakestoreapi.com/products';
//   constructor(private httpClient: HttpClient) { } 
//   getProducts(){
//     if(!this.list){
//       let arr = this.httpClient.get(this.url).pipe(
//         map((res: any) => res.json()));
//       const brr = arr.pipe(map((p: any) => ({ ...p, price: 10 * p.price })))

//       this.list = brr
//         }
//     return this.list;
//   }
// }


