import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { RequestModel } from './requestModel';

const API_URL = 'https://reqres.in';
const API_URL1 = 'http://10.192.7.174/OpenPathWS/basic';
const API_URL2 = 'http://azr-op-uat';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public async PostReport() : Promise<Observable<any>>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Total-Lending-Vendor-Integration-Client-Application-Name': 'CreditQuest',
      });
      // headers.append('Access-Control-Allow-Origin', '*');
      // headers.append('Access-Control-Allow-Credentials', 'true');
      // headers.append("Access-Control-Allow-Headers", '*');
      // headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      // headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH');
    let options = { headers: headers };
    let reqData = new RequestModel();
    //let arr = JSON.stringify(reqData);
    let res = await this.http.post(API_URL1,reqData,options);
  //let res =  this.http.post<any>(API_URL1,reqData,options);
  console.log(res);
  return res;
  }

  
}