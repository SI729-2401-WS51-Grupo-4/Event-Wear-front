export class Category {
  public id: number;
  public price_range: number;
  public category_name: string;
  public category_type: string;
  public image2: string;
  public description: string;
  public rate: number;
  public isFavorite: boolean;

  constructor(id:number, price_range:number, category_name:string, category_type:string, image2:string, description:string, rateC:number, isFavorite:boolean) {
    this.id = 0;
    this.price_range = 0;
    this.category_name = '';
    this.category_type = '';
    this.image2 = '';
    this.description = '';
    this.rate = 0;
    this.isFavorite = false;
  }
}
