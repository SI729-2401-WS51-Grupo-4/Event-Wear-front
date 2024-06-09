import { Injectable } from '@angular/core';
import { BaseService } from "../../shared/services/base.service";
import { HttpClient } from "@angular/common/http";
import {ProductDetails} from "../model/product-details.entity";

@Injectable({
  providedIn: 'root'
})
export class DetailApiService extends BaseService<ProductDetails>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/productDetails';
  }
}
