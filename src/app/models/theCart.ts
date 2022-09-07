//==================================================================
export interface ICart {
    [x: string]: any;
    items: ICartItem[];
    finalAmount: number;
    finalPrice: number;
}
//==================================================================
export interface ICartItem {
    // items: any;
    id: number;
    title: string;
    price: number;
    amount: number;
    finalPrice: number;
    image: string;
}
//----------------------------------------------
export class Item implements ICartItem {
    // items: any;
    id: number;
    title: string;
    price: number;
    amount: number;
    finalPrice: number;
    image: string;
    constructor(product: any) {
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.amount = 1;
        this.finalPrice = this.price;
        this.image = product.image;
    }
}
// //================================================================
export class Cart implements ICart {

    items: ICartItem[];
    finalAmount: number;
    finalPrice: number;
    constructor() {
        this.items = [];
        this.finalAmount = 0;
        this.finalPrice = 0;
    }

}
// //======================================================================