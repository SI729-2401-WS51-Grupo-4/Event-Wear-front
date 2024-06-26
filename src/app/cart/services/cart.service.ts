import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import {Cart} from "../model/cart.entity";
import {Product} from "../../products/model/product.entity";
import {BaseService} from "../../shared/services/base.service";
import {Category} from "../../categories/model/category.entity";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class CartsService extends BaseService<Cart> {
  private baseUrl = 'http://localhost:8090/api/v1/cart';
  constructor(private router: Router, http: HttpClient) {
    super(http);
  }

  getCartItems(): Observable<any> {
    const userId = localStorage.getItem('userId');
    console.log(this.httpOptions.headers.get('Authorization'));
    const observable = this.http.get(`${this.baseUrl}/cartItems/${userId}`, this.httpOptions);
    observable.subscribe(data => console.log(data));
    return observable;
  }

  removeFromCart(cartItemId: number): Observable<any> {
    const userId = localStorage.getItem('userId');
    return this.http.delete(`${this.baseUrl}/delete/${userId}/${cartItemId}`, this.httpOptions);
  }

  updateQuantity(cartItemId: number, quantity: number): Observable<any> {
    const userId = localStorage.getItem('userId');
    console.log(`Updating quantity for cart item ${cartItemId} to ${quantity}`);
    if (quantity > 0) {
      return this.http.put(`${this.baseUrl}/update/${userId}/${cartItemId}`, {newQuantity: quantity}, this.httpOptions);
    } else {
      return this.http.delete(`${this.baseUrl}/delete/${userId}/${cartItemId}`, this.httpOptions);
    }
  }
}


