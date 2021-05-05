import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url="http://localhost:8080/api/logist";
  loggedIn:boolean;
  userId:string;
  constructor(private http:HttpClient) { 
    this.loggedIn = false;
    this.userId = '';

  }
  
  //calling the server to generate Token
  loginByUsernamePassword(credentials:any){ 
    return this.http.get(`${this.url}/getByNP/`+credentials.username+'/'+credentials.password);
  }

  signUpByUsernamepassword(credentials:any){
    return this.http.post(`${this.url}/add`,
    {"username":credentials.username,
    "password":credentials.password,
    "role":credentials.role
    });
  }

  logout(){
    this.loggedIn=false;
    this.userId='';
  }
  


  
}
