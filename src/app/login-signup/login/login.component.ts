import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {
    
  }

  ngOnInit(): void {}
  credentials={
    username:'',
    password:''
  }
  onSubmit(){
    if((this.credentials.username!='' && this.credentials.password!='')&&(this.credentials.password!=null&&this.credentials.username!=null)){
      console.log("submit form to customer");
    }
  }
    
  
}
