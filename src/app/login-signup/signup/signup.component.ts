import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  constructor(private router:Router) {
    
   }

  ngOnInit(): void {
  }
  credentials={
    username:'',
    password:''
  }
  onSignup(){
    if((this.credentials.username!='' && this.credentials.password!='')&&(this.credentials.password!=null&&this.credentials.username!=null)){
      console.log("submit form to customer");
    }
  }

}
