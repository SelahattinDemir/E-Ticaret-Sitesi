import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor(private formBuilder:FormBuilder,
    private router:Router,private api:ApiService) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      //validators for login
      email:["admin@admin",Validators.required],
      password:["123456",Validators.required]
    })
  }

  login(){
    //getting data from json and checking input matching
    this.api.login(this.loginForm.value.email,this.loginForm.value.password).subscribe((data:any)=>{
      if(data.length !== 0){
        this.api.user.next(data[0]);
        this.loginForm.reset();
        localStorage.setItem('token', JSON.stringify(data[0].token));
      if(data[0].role === "admin"){
        this.router.navigate(["dashboard"])
      }
      else if(data[0].role === "user"){
        this.router.navigate(["products"])
      }
      }else{
        alert("E-posta veya Şifre Yanlış")
      }
    });
  }
}
