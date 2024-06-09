export class Item {
  id: number;
  name: string;
  price: number;
  lessor: string;
  logo: string

  constructor(id:number, name:string, price: number, lessor: string, logo:string){
  this.id = id;
  this.name = name;
  this.price = price;
  this.lessor = lessor;
  this.logo = logo;
  }
}
