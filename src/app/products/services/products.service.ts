import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Product } from '../model/product.entity';

@Injectable({
  providedIn: 'root'
})
export class ProductsService{
  private baseUrl = 'https://my-json-server.typicode.com/AdrianoSCruzP/db-server'
  //private baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {  }
  getProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/products`);
  }
  createProduct(product: Product): Observable<any> {
    return this.http.post(`${this.baseUrl}/products`, product);
  }

  updateProduct(id: number, product: Product): Observable<any> {
    return this.http.put(`${this.baseUrl}/products/${id}`, product);
  }
}
