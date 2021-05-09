import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';


export interface fleet{
  trucktype:string;
  location:string;
  tonnage:number;
  }
  export interface trip{
    from:string;
    to:string;
    date:string;
    truckType:string;
  }

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  allAttachedVehicle: any;
  allBookedTruck: any;
  allTrips:trip[]=[];
  allFleets:fleet[]=[];
  displayedColumnsFleet: string[] = [ 'trucktype', 'location', 'tonnage'];
  displayedColumnsTrips: string[] = [ 'from', 'to', 'truckType','date'];
  constructor(private loginService: LoginService) {
    this.allAttachedVehicle = [];
    this.allBookedTruck = [];
    this.loginService.getTripsByUsername().subscribe(
      (response: any) => {
        console.log(response);
        this.allTrips=response;
        // console.log(this.allTrips);
      },
      (error) => {
        console.log(error);
      }
    );
    this.loginService.getFleetsByUsername().subscribe(
      (response: any) => {
        console.log(response);
        this.allFleets=response;
        // console.log(this.allFleets);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {

    
  }
  attachVehicle = {
    truckType: '',
    location: '',
    tonnage: 0,
  };

  truckBook = {
    from: '',
    to: '',
    truckType: '',
    date: '',
  };
  tripUserData = {
    userId: '',
    tripId: '',
  };
  fleetUserData = {
    userId: '',
    fleetId: '',
  };
  onLogout() {
    this.loginService.userId = '';
    this.loginService.role = '';
  }
  bookTruck() {
    if (
      this.truckBook.date != null &&
      this.truckBook.to != null &&
      this.truckBook.truckType != null &&
      this.truckBook.from != null &&
      this.truckBook.date != '' &&
      this.truckBook.to != '' &&
      this.truckBook.truckType != '' &&
      this.truckBook.from != ''
    ) {
      // console.log(this.truckBook.truckType+ 'see here');
      this.loginService.bookTruck(this.truckBook).subscribe(
        (response: any) => {
          if (response != null && response.tripId != null) {
            this.tripUserData.userId = this.loginService.userId;
            this.tripUserData.tripId = response.tripId;
            this.loginService
              .addDataToUserDetailsTrips(this.tripUserData)
              .subscribe(
                (response) => {},
                (error) => {}
              );
          }
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  addFleet() {
    if (
      this.attachVehicle.location != null &&
      this.attachVehicle.truckType != null &&
      this.attachVehicle.tonnage > 0 &&
      this.attachVehicle.location != '' &&
      this.attachVehicle.truckType != ''
    ) {
      // console.log(this.attachVehicle);
      this.loginService.addFleet(this.attachVehicle).subscribe(
        (response: any) => {
          if (response != null && response.fleetId != null) {
            this.fleetUserData.fleetId = response.fleetId;
            this.fleetUserData.userId = this.loginService.userId;
            this.loginService
              .addDataToUserDetailsFleets(this.fleetUserData)
              .subscribe(
                (response) => {
                  console.log(response);
                },
                (error) => {}
              );
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
