import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../model/category.entity';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class EventWearApiService {
  private baseUrl = 'http://localhost:8090'
  /*https://my-json-server.typicode.com/SI729-2401-WS51-Grupo-4/db-server */
  constructor(private router: Router, private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createCategory(category: Category): Observable<any> {
    return this.http.post<Category>(`${this.baseUrl}`, category);
  }

  updateCategory(idC: number, category: Category): Observable<any> {
    return this.http.put<void>(`${this.baseUrl}/${idC}`, category);
  }

  deleteCategory(idC: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${idC}`);
  }

  getCategoryById(id: number): Observable<Category> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Category>(url);
  }

  getFavoriteCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}/favorites`);
  }
}
/*
http://localhost:3000*/
