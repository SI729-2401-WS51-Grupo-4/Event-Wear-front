import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Favorite} from "../model/favorite.entity";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FavoriteApiService extends BaseService<Array<Favorite>>{

  constructor(http: HttpClient)
  {
    super(http);
    this.resourceEndpoint = '/favoritos';
  }
}
