import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  basePath: string = `${environment.serverBasePath}`;
  httpOptions = { headers: new HttpHeaders({'Content-type': 'application/json'}) };
  constructor(private http: HttpClient) { }

  getProfile() {
    return this.http.get(`${this.basePath}/profile`, this.httpOptions);
  }
  createProfile(profile: any) {
    return this.http.post(`${this.basePath}/profile`, profile, this.httpOptions);
  }
}
