import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../model/category.entity';
import { Router } from "@angular/router";
import {BaseService} from "../../shared/services/base.service";

@Injectable({
  providedIn: 'root'
})
export class EventWearApiService extends BaseService<Category>{
  private baseUrl = 'http://localhost:8090/api/v1/category';
  constructor(private router: Router, http: HttpClient) {
    super(http);
  }

  getCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}`, this.httpOptions);
  }

  createCategory(category: Category): Observable<any> {
    return this.http.post<Category>(`${this.baseUrl}`, category, this.httpOptions);
  }

  updateCategory(idC: number, category: Category): Observable<any> {
    return this.http.put<void>(`${this.baseUrl}/${idC}`, category, this.httpOptions);
  }

  deleteCategory(idC: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${idC}`, this.httpOptions);
  }

  getCategoryById(id: number): Observable<Category> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Category>(url, this.httpOptions);
  }

  getFavoriteCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}/favorites`, this.httpOptions);
  }
}
