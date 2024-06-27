import { Injectable } from '@angular/core';
import { BaseService } from "../../shared/services/base.service";
import { HttpClient } from "@angular/common/http";
import { Envio } from "../model/envio.entity"
import { catchError } from 'rxjs/operators';
import {Observable} from "rxjs";
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnvioService extends BaseService<Envio>
{
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = 'shippings';

  }

  created(envio: Envio): Observable<Envio> {
    return this.http.post<Envio>(`${this.basePath}${this.resourceEndpoint}/create/Shipping`, envio, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

}
