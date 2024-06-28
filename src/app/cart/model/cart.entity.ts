export class Cart {
  cartItemId: string; // Nuevo campo
  Id:number;
  Urlimage: string;
  title: string;
  price: number;
  quantity: number;

  constructor(cartItemId: string, Id:number=0, Urlimage: string=" ", title: string=" ", price: number=0,quantity:number=0){
    this.cartItemId = cartItemId; // Inicializar el nuevo campo
    this.Id=Id;
    this.Urlimage = Urlimage;
    this.title = title;
    this.price = price;
    this.quantity = 0;
  }
}
