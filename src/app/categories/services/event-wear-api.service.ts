import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventWearApiService {
  private baseUrl = 'https://my-json-server.typicode.com/AdrianoSCruzP/Category'
  /*https://my-json-server.typicode.com/SI729-2401-WS51-Grupo-4/db-server */
  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/Category`);
  }
}
/*
http://localhost:3000*/
