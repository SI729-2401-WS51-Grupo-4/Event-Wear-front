import { Injectable } from '@angular/core';
import { BaseService } from "../../shared/services/base.service";
import { HttpClient } from "@angular/common/http";
import {  Envio } from "../model/envio.entity"

@Injectable({
  providedIn: 'root'
})
export class EnvioService extends BaseService<Envio>
{
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/envios';

  }
}
