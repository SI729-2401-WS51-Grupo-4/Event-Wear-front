import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Product } from '../model/product.entity';
import { switchMap } from 'rxjs/operators';
import {BaseService} from "../../shared/services/base.service";
@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseService<Product>{
  private baseUrl = 'http://localhost:8090/api/v1/publications';
  constructor(http: HttpClient) { super(http);}
  getProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all-publications`, this.  httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    });
  }
  createProduct(product: Product): Observable<any> {
    return this.http.post(`${this.baseUrl}/products`, product);
  }

  updateProduct(id: number, product: Product): Observable<any> {
    return this.http.put(`${this.baseUrl}/products/${id}`, product);
  }

  addToCart(product: any): Observable<any> {
 return this.http.get<any[]>(`${this.baseUrl}/shoppingCart`).pipe(
  switchMap((items: any[]) => {
    const item = items.find(item => item.id === product.id);
    if (item) {
      // Si el producto ya está en el carrito, actualiza la cantidad
      return this.http.put(`${this.baseUrl}/shoppingCart/${item.id}`, { ...item, quantity: item.quantity + 1 });
    } else {
      // Si el producto no está en el carrito, lo agrega
      return this.http.post(`${this.baseUrl}/shoppingCart`, { ...product, quantity: 1 });
    }
  })
);
}

}
