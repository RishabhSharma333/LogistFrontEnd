import { Component, OnInit } from '@angular/core';


export interface users{
  name:string;
  email:string;
  phoneNumber:string;
}
export interface fleet{
trucktype:string,
location:string,
tonnage:number
}
export interface trips{
  from:string;
  to:string;
  trucktype:string,
  date:string;
  state:string;
}

const USER_DATA: users[] = [
  {name: 'rogen', email: 'fds@gmail.com', phoneNumber: '4755'},
  {name: 'ium', email: 'heli@gmail.com', phoneNumber: '8+561'},
  {name: 'Liium', email: 'lith@gmail.com', phoneNumber: '8671655'},
  {name: 'ryll', email: 'bery@gmail.com', phoneNumber: '8715'},
  {name: 'Bdfsd', email: 'vvo@gmail.com', phoneNumber: '46856'},
  {name: 'Carn', email: 'card@gmail.com', phoneNumber: '468165'},
  {name: 'Nigen', email: 'nit@gmail.com', phoneNumber: '4894'},
  {name: 'deen', email: 'oyge@gmail.com', phoneNumber: '48615'},
  {name: 'Fluo', email:'fl@gmail.com', phoneNumber: '46455'},
];
const FLEET_DATA: fleet[] = [
  {trucktype: 'rogen', location: 'fdsgmail.com',  tonnage: 45},
  {trucktype: 'ium',   location: 'heligmail.com', tonnage: 741},
  {trucktype: 'Liium', location: 'lithgmail.com', tonnage: 1},
  {trucktype: 'ryll',  location: 'berygmail.com', tonnage: 2},
  {trucktype: 'Bdfsd', location: 'vvomail.com',  tonnage: 58},
  {trucktype: 'Carn',  location: 'cardgmail.com', tonnage: 85},
  {trucktype: 'Nigen', location: 'nitmail.com',  tonnage: 25},
  {trucktype: 'deen',  location: 'oygegmail.com', tonnage: 20},
  {trucktype: 'Fluo',  location:'fluorlgmail.com',tonnage: 10},
];
const TRIPS_DATA: trips[] = [
  {from: 'rogen', to: 'fds@', trucktype: 'tata',date:'2/2/2021',state:'completed'},
  {from: 'ium',   to: 'heli', trucktype: 'tata',date:'3/2/2021',state:'Not completed'},
  {from: 'Liium', to: 'lith', trucktype: 'tata',date:'4/2/2021',state:'completed'},
  {from: 'ryll',  to: 'bery', trucktype: '8715',date:'5/2/2021',state:'completed'},
  {from: 'Bdfsd', to: 'vvo@', trucktype: '4686',date:'6/2/2021',state:'Not completed'},
  {from: 'Carn',  to: 'card', trucktype: '4685',date:'7/2/2021',state:'completed'},
  {from: 'Nigen', to: 'nit@', trucktype: '4894',date:'8/2/2021',state:'completed'},
  {from: 'deen',  to: 'oyge', trucktype: '4865',date:'9/2/2021',state:'completed'},
];

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  displayedColumnsUser: string[] =  [ 'name', 'email', 'phoneNumber'];
  displayedColumnsFleet: string[] = [ 'trucktype', 'location', 'tonnage'];
  displayedColumnsTrips: string[] = [ 'from', 'to', 'trucktype','date','state'];
  dataSourceUser :users[];
  dataSourceFleet:fleet[];
  dataSourceTrips:trips[];
  openrole:string='allUsers';
  constructor() { 
    this.dataSourceUser=USER_DATA;
    this.dataSourceFleet=FLEET_DATA;
    this.dataSourceTrips=TRIPS_DATA;
  }

  ngOnInit(): void {
  }
  presentwindow:number=0;
  rolepick(value:number){
    this.presentwindow=value;
  }
}
