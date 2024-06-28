export class Product {
  publicationId: number;
  image: string;
  title: string;
  description: string;
  price: number;
  rating: string;
  lessorId: number; // Agrega esta línea
  constructor() {
    this.publicationId = 0;
    this.image = '';
    this.title = '';
    this.description = '';
    this.price = 0;
    this.rating = '';
    this.lessorId = 0; // Agrega esta línea
  }
}
