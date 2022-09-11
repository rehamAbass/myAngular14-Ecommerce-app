import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICartItem, Cart, Item, ICart } from '../models/theCart';
//---------------------------------------------------------------------------
@Injectable({
  providedIn: 'root'
})
//==============================================================================
export class OrdersService {
  myCart: ICart;
  //-------------------------------------------------
  constructor(private http: HttpClient) {
    this.myCart = new Cart();
  }
  //====================================================================
  cartUpdate_finalPrices_Amounts() {
    let amount = 0;
    let finalPrice = 0;
    this.myCart.items.map((it) => {
      amount += it.amount;
      finalPrice += it.finalPrice;
    })
    //************ */
    this.myCart.items = this.myCart.items.filter((it) => it.amount !== 0 )
    console.log("Reham after filter cart = ", this.myCart.items);
    //**************** */
    this.myCart.finalAmount = amount;
    this.myCart.finalPrice = Math.round(finalPrice * 100) / 100;
    //Math.round(num * 100) / 100
    console.log("updating final price & amounts , cart = ", this.myCart);
  }
  //========================================================================
  addToCart(prod: any) {
    if (this.isProductInCart(prod) === true) {
      this.updateCounterPrices_Of_ExistedItem(prod.id, true);
    } else {
      const newItem = new Item(prod);
      this.myCart.items.push(newItem);
      console.log("reham - new item added to the cart , item  = ", newItem);
    }
    this.cartUpdate_finalPrices_Amounts();

    console.log("cart after update = ", this.myCart);
  }
  //========================================================================
  decreaseFromCart(prod: any) {
    if (this.isProductInCart(prod) === true) {
      this.updateCounterPrices_Of_ExistedItem(prod.id, false);;
      this.cartUpdate_finalPrices_Amounts();

      console.log("cart after update = ", this.myCart);
    } else {
      console.log("ERROR , there is no such item in the  cart !! item = ", prod, ", the Cart = ", this.myCart);
    }
  }
  //======================================================================

  isProductInCart(p: any) {
    const id = p.id;
    const res = this.myCart.items.filter((o: any) => o.id === id);
    if (res.length > 0) return true;
    return false;
  }
  //-------------------------------------------
  getAmount() {
    return this.myCart.finalAmount;
  }
  //-----------------------------------------
  getCart() { return this.myCart; }
  //--------------------------------------------
  updateCounterPrices_Of_ExistedItem(id: number, flagIncrease: boolean) {
    const tm = this.myCart.items.filter((x: ICartItem) => x.id === id)
    if (tm.length > 0) {
      // it was before in the cart :
      const prod = tm[0];
      let newAmount = prod.amount;
      if (flagIncrease === true) {
        newAmount = prod.amount + 1;
      } else {
        newAmount = prod.amount - 1;
      }
      if (newAmount < 0) {
        console.log("Error amount can not be less than 0 !");
        newAmount = 0;
        // throw Error("Error amount can not be less than 0 !");
      } else {
        const newFinalPrice = prod.price * newAmount;
        const newProd = { ...prod, finalPrice: newFinalPrice, amount: newAmount };
        this.myCart.items = this.myCart.items.map((x: ICartItem) => x.id === id ? newProd : x)
        // console.log("successs to update the cart items, updated item = ", newProd)
      }
    } else {
      console.log("ERROR filter didnt find the existed item !Error !"); return;
    }
  }
}
//========================================================================================
