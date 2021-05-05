import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url="http://localhost:8080/api/logist/users";
  url2="http://localhost:9004/api/logist";
  
  userId:string;
  role:string;
  constructor(private http:HttpClient) { 
    this.userId = '';
    this.role='';
  }
  
  loginByUsernamePassword(credentials:any){ 
    return this.http.get(`${this.url}/get/`+credentials.username+'/'+credentials.password);
  }
   
  signUpByUsernamepassword(credentials:any){
    return this.http.post(`${this.url}/add`,
    {"username":credentials.username,
    "password":credentials.password,
    "role":credentials.role
    });
  }

  logout(){
    this.userId='';
  }
  getTripsByUsername(){
    return this.http.get(`${this.url2}/getTrips/`+this.userId);
  }
  getFleetsByUsername(){
    return this.http.get(`${this.url2}/getFleets/`+this.userId);
  }


  
}
