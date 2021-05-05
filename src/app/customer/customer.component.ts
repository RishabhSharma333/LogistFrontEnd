import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }
  attachVehicle={
    trucktype:'',
    location:'',
    weightage:0
  }

  truckBook={
    from:'',
    to:'',
    trucktype:'',
    date:'',
    time:''
  }
  onLogout(){
    this.loginService.loggedIn=false;
    this.loginService.userId='';
  }

}
