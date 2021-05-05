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
        (response:any)=>{
          if(response==null){
            this.router.navigate(['/login']);
          }
          else{
            this.loginService.userId=response.id;
            this.loginService.role=response.role;
            if(response.role=='Admin'){
              this.router.navigate(['/admin']);
            }
            else{
              this.router.navigate(['/customer']);
            }
            
          }
        },
        (error)=>{
          console.log(error)
        }
        ); 
        
    }
  }
  
}
