import { Injectable } from '@angular/core';
import { BaseService } from "../../shared/services/base.service";
import { HttpClient } from "@angular/common/http";
import {  Envio } from "../model/envio.entity"

@Injectable({
  providedIn: 'root'
})
export class EnvioService
{
  private baseUrl = 'https://my-json-server.typicode.com/AdrianoSCruzP/Envios';
  constructor(private http: HttpClient) { }

  getAll  (): any {
    return this.http.get(`${this.baseUrl}/envios`);
  }

}
