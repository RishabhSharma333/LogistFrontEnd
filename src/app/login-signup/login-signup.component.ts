import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {
  name:string="";
  loginSignupAs:string="";
  password:string="";
  role:string="";
  constructor(private router:Router) {
    this.name="";
    this.password="";
    this.role="";
   }
   roles= [
    {value: 'customer', viewValue: 'Customer'},
    {value: 'truckowner', viewValue: 'Truck owner'},
    {value: 'admin', viewValue: 'Admin'}
  ];

  ngOnInit(): void {
  }
 

}
