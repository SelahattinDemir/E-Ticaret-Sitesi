import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

import { product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl:string = "http://localhost:3000/"

  constructor(private http : HttpClient) {}

//posting to db.json for fake json server firstly you have to start json server for working json-server --watch db.json 

//Http requests for all back-end operations

//Product and user requests
getAllProductApi() {
  return this.http.get<product>(`${this.baseUrl}products`)
    .pipe(map((res: any) => {
      return res;
    }))
  }
}