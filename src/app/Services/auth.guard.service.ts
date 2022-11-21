import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

//Guards should be supported with back end this way is not legit way
export class AuthGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(): boolean {

//If anyone logged in registered in local storage 
//Also if they logout local storage will be deleted and this will return false

    if(localStorage.getItem('token')){
       return true
    }
    else{
      this.router.navigate([''])
      return false
    }
  }

}