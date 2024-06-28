import {Observable} from "rxjs";

export class ProductRequest {
  id: number;
  lessorId: number;
  image: string;
  title: string;
  description: string;
  price: number;
  rating: string;
  constructor() {
    this.id = 0;
    this.lessorId = 0;
    this.image = '';
    this.title = '';
    this.description = '';
    this.price = 0;
    this.rating = '';
  }
}
