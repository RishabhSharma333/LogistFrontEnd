import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private loginService:LoginService,private router :Router) {}

  ngOnInit(): void {}
  credentials = {
    username: '',
    password: '',
    role: 'Customer',
  };
  onSignup() {
    if (
      this.credentials.username != '' &&
      this.credentials.password != '' &&
      this.credentials.password != null &&
      this.credentials.username != null
    ) {
      this.loginService.signUpByUsernamepassword(this.credentials).subscribe(
        (response)=>{
          console.log(response);
          this.loginService.loggedIn=true;
        },
        (error)=>{
          console.log(error)
        }
        ); 
        this.loginService.loginByUsernamePassword(this.credentials).subscribe(
          (response:any)=>{
            this.loginService.loggedIn=true;
            this.loginService.userId=response.id;
            this.router.navigate(['/customer']);
          },
          (error)=>{
            console.log(error);
          }
        )
    }
  }
  
}
