import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  constructor() {
    
   }

  ngOnInit(): void {
  }
  credentials={
    username:'',
    password:'',
    role:'Customer'
  }
  onSignup(){
    if((this.credentials.username!='' && this.credentials.password!='')&&(this.credentials.password!=null&&this.credentials.username!=null)){
      console.log(this.credentials.username);
      console.log(this.credentials.password);
      console.log(this.credentials.role);
    }
  }

}
