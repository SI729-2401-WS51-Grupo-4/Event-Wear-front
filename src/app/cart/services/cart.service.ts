import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import {Cart} from "../model/cart.entity";
import {Product} from "../../products/model/product.entity";


@Injectable({
  providedIn: 'root'
})
export class CartsService{
  //private baseUrl = ' https://my-json-server.typicode.com/U202211390/eventwear'
  private baseUrl = 'http://localhost:4000';
  constructor(private http: HttpClient) {}

  getCartItems(): Observable<any> {
    return this.http.get(`${this.baseUrl}/shoppingCart`);
  }

  removeFromCart(itemId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/shoppingCart/${itemId}`);
  }

}
