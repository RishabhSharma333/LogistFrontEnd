import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor(private httpClient:HttpClient) { }
  getAllUsers(){}
  sendPostRequest(data: any): Observable<any> {
    return this.httpClient.post<any>("http://localhost:8080/api/logist", data);
   }

}
