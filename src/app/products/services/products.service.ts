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
  private baseUrl = 'http://localhost:8090/api/v1';
  constructor(http: HttpClient) { super(http);}
  getProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/publications/all-publications`, this.  httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    });
  }
  createProduct(product: Product): Observable<any> {
    return this.http.post(`${this.baseUrl}/publications/create-publication`, product, this.  httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    });
  }

  updateProduct(publicationId: number, product: Product): Observable<any> {
    return this.http.put(`${this.baseUrl}/products/${publicationId}`, product);
  }

  private cartItemIdCounter = 1; // Contador para cartItemId

  addToCart(product: any): Observable<any> {
  const userId = localStorage.getItem('userId');
  console.log(this.httpOptions.headers.get('Authorization'));
  return this.http.get<any[]>(`${this.baseUrl}/cart/cartItems/${userId}`, this.httpOptions).pipe(
    switchMap((items: any[]) => {
      const item = items.find(item => item.publicationId === product.id);
      if (item) {
        // Si el producto ya está en el carrito, actualiza la cantidad
        return this.http.put(`${this.baseUrl}/cart/update/${userId}/${item.cartItemId}`, { ...item, quantity: item.quantity + 1 }, this.httpOptions);
      } else {
        // Si el producto no está en el carrito, lo agrega
        const productToPost = {
          cartItemId: this.cartItemIdCounter++, // Usar el contador como cartItemId
          publicationId: product.id,
          quantity: 1,
          Urlimage: product.image,
          title: product.title,
          price: product.price
        };
        console.log('Agregando al carrito:', productToPost);
        return this.http.post(`${this.baseUrl}/cart/add/${userId}`, productToPost, this.httpOptions);
      }
    })
  );
}

}
