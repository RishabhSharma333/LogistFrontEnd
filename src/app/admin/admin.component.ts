import { Component, OnInit } from '@angular/core';
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
  displayedColumnsFleet: string[] = ['trucktype', 'location', 'tonnage'];
  displayedColumnsTrips: string[] = [
    'from',
    'to',
    'trucktype',
    'date',
    'state',
  ];
  dataSourceUser: users[] = [];
  dataSourceFleet: fleet[] = [];
  dataSourceTrips: trips[] = [];
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
  }

  ngOnInit(): void {}
  presentwindow: number = 0;
  rolepick(value: number) {
    this.presentwindow = value;
  }
}
