export class Cart {
  cartItemId: number;
  Id:number;
  Urlimage: string;
  title: string;
  price: number;
  quantity: number;

  constructor(cartItemId: number, Id:number=0, Urlimage: string=" ", title: string=" ", price: number=0,quantity:number=0){
    this.cartItemId = cartItemId;
    this.Id=Id;
    this.Urlimage = Urlimage;
    this.title = title;
    this.price = price;
    this.quantity = 0;
  }
}
