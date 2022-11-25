import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})

//Guards should be supported with back end this way is not legit way
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private toastr: ToastrService){}

  canActivate(): boolean {
//If anyone logged in registered in local storage 
//Also if they logout local storage will be deleted and this will return false
    if(localStorage.getItem('token')){
      return true;
    }
    else{     
      this.toastr.error('Giriş yapmadan erişemezsiniz');
      this.router.navigate(['']);
      return false;
    }
  }

}