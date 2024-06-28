import { Injectable } from '@angular/core';
import { BaseService } from "../../shared/services/base.service";
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../../products/model/product.entity";

@Injectable({
  providedIn: 'root'
})
export class PublicationService extends BaseService<Product>
{
  private baseUrl = 'http://localhost:8090/api/v1/publications';
  constructor(http: HttpClient) { super(http);}
  getAllProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}`, this.httpOptions);
  }
}
