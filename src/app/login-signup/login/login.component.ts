import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  
  constructor(private loginService: LoginService, private router: Router) {
    
  }
  ngOnInit(): void {}
  credentials = {
    username: '',
    password: '',
    role: 'Customer',
  };
   
  onSubmit() {
    if (
      this.credentials.username != '' &&
      this.credentials.password != '' &&
      this.credentials.password != null &&
      this.credentials.username != null
    ) {
      this.loginService.loginByUsernamePassword(this.credentials).subscribe(
        (response: any) => {
          console.log(response);
          if (response == null) {
            this.router.navigate(['/customer']);
            this.loginService.loggedIn=true;
            this.loginService.userId=response.id;
          }
        },
        (error) => {
          console.log(error);
          this.router.navigate(['/login']);
        }
      );
    }
  }
}
