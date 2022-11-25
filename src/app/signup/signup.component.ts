import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { ApiService } from '../Services/api.service';
import { passwordMatchValidatorService } from '../Services/passwordMatchValidator.service';
import { usernameValidator } from '../Services/regexValidator.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  signupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private api: ApiService, private match: passwordMatchValidatorService, private toastr: ToastrService) { }

  //using pattern att. for regex valid.(common patterns are used)
  emailPattern =/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  pwdPattern =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({

    //3 Type of Validation Added
    // usernameValidator added in default validation from regexValidator.ts (1)
    username:["", usernameValidator],
    // default validators(2)
    email:["", Validators.pattern(this.emailPattern)],
    password:["", [Validators.required, Validators.pattern(this.pwdPattern)]],
    confirmpassword:[""],
    token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    role:"user"
    },
    {
      //custom validator(3)from passwordMatchValidator.ts
      validator:this.match.passwordMatchValidator('password','confirmpassword')
    }
    )
  }

  // sending data with api.signUp 

  signUp(){
    this.api.signUp(this.signupForm).subscribe(res=>{
      this.toastr.success('Başarıyla kaydoldunuz');
      this.signupForm.reset();
      this.router.navigate(["login"]);
    },err=>{
      this.toastr.success('Bir şeyler yanlış gitti');
    })
  }
}
