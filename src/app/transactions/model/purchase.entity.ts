import {Item} from "./item.entity";

export class Purchase {
  id: number;
  total: number;
  items: Array<Item>;

  constructor(id:number, price: number, items:Array<Item>) {
  this.id = id;
  this.total = price;
  this.items = items;
  }
}
