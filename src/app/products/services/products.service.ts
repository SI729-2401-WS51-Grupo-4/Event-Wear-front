import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Product } from '../model/product.entity';
import { switchMap } from 'rxjs/operators';
import {BaseService} from "../../shared/services/base.service";
import {Cart} from "../../cart/model/cart.entity";
import {Router} from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseService<Product> {
  private baseUrl = 'http://localhost:8090/api/v1/';
  constructor(private router: Router, http: HttpClient) {
    super(http);
  }
  getProducts(): Observable<any> {
    console.log(this.httpOptions.headers.get('Authorization'));
    return this.http.get(`${this.baseUrl}/publications/all-publications`,this.httpOptions);
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
