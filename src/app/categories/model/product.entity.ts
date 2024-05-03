export class Product {
  id: number;
  category: string;
  price_range: number;
  category_type: string;
  type: string;
  image: string;
  image2: string;
  description: string;
  rate: number;

  constructor() {
    this.id = 0;
    this.category = '';
    this.price_range = 0;
    this.category_type = '';
    this.type = '';
    this.image = '';
    this.image2 = '';
    this.description = '';
    this.rate = 0;
  }
}
