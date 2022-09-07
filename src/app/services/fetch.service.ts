import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FetchService {
  public list:any
   private url = 'https://fakestoreapi.com/products';
  constructor(private httpClient: HttpClient) { } 
  getProducts(){
    if(!this.list){
      this.list = this.httpClient.get(this.url);
        }
    return this.list;
  }
}


