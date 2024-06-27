import { Injectable } from '@angular/core';
import { BaseService } from "../../shared/services/base.service";
import { HttpClient } from "@angular/common/http";
import {Transaction} from "../model/transaction.entity";

@Injectable({
  providedIn: 'root'
})
export class TransactionsApiService extends BaseService<Transaction> {

    constructor(http: HttpClient) {
      super(http);
      this.resourceEndpoint = '/transactions';
    }
}
