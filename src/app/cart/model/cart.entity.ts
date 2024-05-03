export class Cart {
  id:number;
  image: string;
  title: string;
  price: number;
  quantity: number;

  constructor(id:number=0,image: string=" ", title: string=" ", price: number=0,quantity:number=0){
    this.id=id;
    this.image = image;
    this.title = title;
    this.price = price;
    this.quantity = 0;
  }
}
