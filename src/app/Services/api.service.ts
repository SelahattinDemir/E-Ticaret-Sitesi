import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import { product } from '../models/product';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public checkUser = new BehaviorSubject<boolean>(false);

  private baseUrl:string = "http://localhost:3000/";

  constructor(private http : HttpClient, private router:Router) {}

//posting to db.json for fake json server firstly you have to start json server for working json-server --watch db.json 

//Http requests for all back-end operations

//Product and user requests
getAllProductApi() {
  return this.http.get<product>(`${this.baseUrl}products`)
    .pipe(map((res: any) => {
      return res;
    }))
  }

  checkoutApi(itemList:any){
    return this.http.post<any>(`${this.baseUrl}orders`,itemList);
  }


  ordersApi(){
    return this.http.get<any>(`${this.baseUrl}orders`).pipe(map((res: any, i) => {
      return res[i];
    }))
  }

  //Signup and login API's
  signUp(signupForm:any){
    return this.http.post<any>(`${this.baseUrl}signupUsers`,signupForm.value);
  }

  login(){
    return this.http.get<any>(`${this.baseUrl}signupUsers`).pipe(map((res:any)=>{
      return res;
    }))
  }

  logout(){
    this.checkUser.next(false)
    localStorage.clear()
  }

  getToken(){
   return localStorage.getItem("token")
  }

  //ADMIN SECTION

  Postadmin(data : any){
    return this.http.post<any>(`${this.baseUrl}products`,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  Deleteadmin(id : number){
    return this.http.delete<any>(`${this.baseUrl}products/${id}`)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  Updateadmin(data : any){
    return this.http.put<any>(`${this.baseUrl}products/${data.id}`,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  Getadmins(){
    return this.http.get<any>(`${this.baseUrl}products`)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}