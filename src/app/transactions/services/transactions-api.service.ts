import { Injectable } from '@angular/core';
import { BaseService } from "../../shared/services/base.service";
import { HttpClient } from "@angular/common/http";
import { Purchase } from "../model/purchase.entity";

@Injectable({
  providedIn: 'root'
})
export class TransactionsApiService extends BaseService<Purchase> {

    constructor(http: HttpClient) {
      super(http);
      this.resourceEndpoint = '/purchases';
    }
}
