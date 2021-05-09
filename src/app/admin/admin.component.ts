import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LoginService } from '../login.service';

export interface users {
  username: string;
  role:string;
}
export interface fleet {
  truckType: string;
  location: string;
  tonnage: number;
}

export interface trips {
  from: string;
  to: string;
  truckType: string;
  date: string;
  state: string;
}


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  displayedColumnsUser: string[] = ['name', 'role' ];
  displayedColumnsFleetOnly: string[] = ['trucktype', 'location', 'tonnage'];
  displayedColumnsFleet: string[] = ['trucktype', 'location', 'tonnage','assign'];
  displayedColumnsTrips: string[] = [
    'from',
    'to',
    'trucktype',
    'date',
    'state',
  ];
  // dataSourceUser=new MatTableDataSource<users>()
  dataSourceUser:users[]=[];
  dataSourceFleet: fleet[] = [];
  dataSourceTrips: trips[] = [];
  assigningTripId:string='';
  openrole: string = 'allUsers';
  constructor(private loginService: LoginService) {
    this.loginService.getAllFleets().subscribe(
      (response:any) => {
        console.log(response);
        this.dataSourceFleet=response;
      },
      (error) => {
        console.log(error);
      }
    );

    this.loginService.getAllUser().subscribe(
      (response:any) => {
        console.log(response);
        this.dataSourceUser=response;
      },
      (error) => {
        console.log(error);
      }
    );
    this.loginService.getAllTrips().subscribe(
      (response:any) => {
        console.log(response);
        this.dataSourceTrips=response;
      },
      (error) => {
        console.log(error);
      }
    );
    this.assigningTripId='';
  }

  ngOnInit(): void {}




// refreshUser() {
//   this.myService.doSomething().subscribe((data: users[]) => {
//     this.dataSource.data = data;
//   }
  presentwindow: number = 0;
  rolepick(value: number) {
    this.presentwindow = value;
  }
  cancelAssignment(){
    this.assigningTripId='';
  }
  assignTrip(tripId:string){
    this.assigningTripId=tripId;
    console.log(tripId);
  }
  assignFleet(fleetId:string){
    if(this.assigningTripId==''){
      console.log('no fleet selected');
    }
    else{
      console.log(fleetId+'fleetId');
      this.loginService.addFleetToTrip(this.assigningTripId,fleetId).subscribe(
        (response)=>{
          console.log(response+ 'from assign fleet');
        },
        (error)=>{}
      );
      this.assigningTripId='';
    }

  }
}
