import { Injectable } from '@angular/core';
import { BaseService } from "../../shared/services/base.service";
import { HttpClient } from "@angular/common/http";
import { Purchase } from "../model/purchase.entity";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TransactionsApiService{
  private baseUrl = 'https://my-json-server.typicode.com/AdrianoSCruzP/purchases';
  constructor(private http: HttpClient) {  }
  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/purchases`);
  }

  delete(itemId: number) {

  }
}
