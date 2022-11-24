import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private api:ApiService, private router:Router){}

  canActivate():boolean{
    const user=this.api.user.value
        if(user.role == "admin"){

          return true
        } 
        else{
          alert("İzinsiz giremezsiniz")
          this.router.navigate([""])
          localStorage.clear()
          return false
        }
      }

  }