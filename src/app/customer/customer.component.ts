import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
allAttachedVehicle:any;
allBookedTruck:any;
  constructor(private loginService:LoginService) {
    this.allAttachedVehicle=[];
    this.allBookedTruck=[];

   }

  ngOnInit(): void {
    this.loginService.getTripsByUsername().subscribe(
      (response:any)=>{
        console.log(response)
      }
      ,
      (error)=>{
        console.log(error)
      }
    );
    this.loginService.getFleetsByUsername().subscribe(
      (response:any)=>{
        console.log(response)
      },
      (error)=>{
        console.log(error)
      }
    );
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
    this.loginService.userId='';
    this.loginService.role='';
  }

}
