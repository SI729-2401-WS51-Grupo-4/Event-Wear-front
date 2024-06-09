import {Rating} from "./rating.entity";
import {Characteristic} from "./characteristic.entity";
import {Lessor} from "./lessor.entity";
import {Comment} from "./comment.entity";

export class ProductDetails {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  rating: Rating;
  characteristics: Array<Characteristic>;
  lessor: Lessor;
  comments: Array<Comment>;

  constructor() {
    this.id = 0;
    this.image = "";
    this.title = "";
    this.description = "";
    this.price = 0;
    this.rating = new Rating();
    this.characteristics = [];
    this.lessor = new Lessor();
    this.comments = [];
  }
}
