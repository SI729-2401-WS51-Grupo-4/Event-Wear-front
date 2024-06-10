import { Injectable } from '@angular/core';
import { BaseService } from "../../shared/services/base.service";
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PublicacionService
{
  private baseUrl = 'https://my-json-server.typicode.com/AdrianoSCruzP/db-server';
  constructor(private http: HttpClient) {  }
  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/products`);
  }
}
