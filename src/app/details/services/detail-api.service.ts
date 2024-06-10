import { Injectable } from '@angular/core';
import { BaseService } from "../../shared/services/base.service";
import { HttpClient } from "@angular/common/http";
import {ProductDetails} from "../model/product-details.entity";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DetailApiService{
  private baseUrl = 'https://my-json-server.typicode.com/AdrianoSCruzP/product-details';
  constructor(private http: HttpClient) {  }
  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/productDetails`);
  }

}
