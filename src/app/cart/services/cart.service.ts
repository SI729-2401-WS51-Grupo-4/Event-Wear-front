import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import {Cart} from "../model/cart.entity";
import {Product} from "../../products/model/product.entity";


@Injectable({
  providedIn: 'root'
})
export class CartsService{
  private baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getCartItems(): Observable<any> {
    return this.http.get(`${this.baseUrl}/cartItems`);
  }

  removeFromCart(itemId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/cartItems/${itemId}`);
  }

  updateQuantity(itemId: number, quantity: number): Observable<any> {
  console.log(`Updating quantity for item ${itemId} to ${quantity}`);
  if (quantity > 0) {
    // Si la cantidad es mayor que 0, actualiza la cantidad
    return this.http.put(`${this.baseUrl}/cartItems/${itemId}`, {quantity});
  } else {
    // Si la cantidad es 0, elimina el producto del carrito
    return this.http.delete(`${this.baseUrl}/cartItems/${itemId}`);
  }
}
}


