import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private sharedService:SharedServiceService) {
    
  }

  ngOnInit(): void {}
  credentials={
    username:'',
    password:'',
    role:'Customer'
  }
  onSubmit(){
    if((this.credentials.username!='' && this.credentials.password!='')&&(this.credentials.password!=null&&this.credentials.username!=null)){
      console.log(this.credentials.username);
      console.log(this.credentials.password);
      console.log(this.credentials.role);
      this.sharedService.sendPostRequest({"username":this.credentials.username,
                                          "password":this.credentials.password,
                                          "role":this.credentials.role}).subscribe(
                                            res=>{console.log("values are stored",res);}
      );
    }
  }

 



    
  
}
