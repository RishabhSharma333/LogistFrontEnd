import { ThisReceiver } from '@angular/compiler';
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
  };
   warning='';
  onSubmit() {
    if (
      this.credentials.username != '' &&
      this.credentials.password != '' &&
      this.credentials.password != null &&
      this.credentials.username != null
    ) {
      this.loginService.loginByUsernamePassword(this.credentials).subscribe(
        (response: any) => {
          // console.log(response);
          if(response&&response.id!=null){
             this.loginService.userId=response.id;
             this.loginService.role=response.role;
             if(response.role=='Admin'){
               this.router.navigate(['/admin']);
             }
             else{
               this.router.navigate(['/customer']);
             }
          }
          else{
            this.warning='Such combination doesnt exists';

          }
         
        },
        (error) => {
          console.log(error);
        }
      );
    } 
  }

  // onLogout(){
  //   this.loginService.role='';
  //   this.loginService.userId='';
  // }
}
